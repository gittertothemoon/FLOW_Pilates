declare const process: { env: Record<string, string | undefined> };

export const config = { runtime: "edge" };

type LeadPayload = {
  nome?: string;
  email?: string;
  telefono?: string | null;
  comune?: string | null;
  obiettivo?: string | null;
  frequenza?: string | null;
  come_trovato?: string | null;
};

const RATE_WINDOW_MS = 60_000;
const RATE_MAX_REQUESTS = 3;

// Per-instance in-memory rate limiter. Edge instances are stateless across cold
// starts and don't share state across regions, so this is best-effort — it
// blunts trivial floods without requiring an external store.
const rateBuckets: Map<string, number[]> =
  (globalThis as { __rateBuckets?: Map<string, number[]> }).__rateBuckets ??
  new Map();
(globalThis as { __rateBuckets?: Map<string, number[]> }).__rateBuckets =
  rateBuckets;

const getClientIp = (req: Request): string => {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) {
    const first = fwd.split(",")[0]?.trim();
    if (first) return first;
  }
  return req.headers.get("x-real-ip")?.trim() || "unknown";
};

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const cutoff = now - RATE_WINDOW_MS;
  const recent = (rateBuckets.get(ip) ?? []).filter((t) => t > cutoff);
  if (recent.length >= RATE_MAX_REQUESTS) {
    rateBuckets.set(ip, recent);
    return false;
  }
  recent.push(now);
  rateBuckets.set(ip, recent);
  if (rateBuckets.size > 5000) {
    for (const [key, stamps] of rateBuckets) {
      if (stamps.every((t) => t <= cutoff)) rateBuckets.delete(key);
    }
  }
  return true;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidEmail = (value: string): boolean =>
  value.length >= 5 && value.length <= 254 && EMAIL_RE.test(value);

const validate = (lead: LeadPayload): string | null => {
  const nome = (lead.nome ?? "").trim();
  if (!nome) return "nome required";
  if (nome.length > 120) return "nome too long";

  const email = (lead.email ?? "").trim();
  if (!email) return "email required";
  if (!isValidEmail(email)) return "email invalid";

  const telefono = (lead.telefono ?? "").trim();
  if (telefono) {
    if (telefono.length > 30) return "telefono too long";
    if (telefono.replace(/\D/g, "").length < 7) return "telefono invalid";
  }

  const optionalLimits: Array<[keyof LeadPayload, number]> = [
    ["comune", 80],
    ["obiettivo", 60],
    ["frequenza", 60],
    ["come_trovato", 60],
  ];
  for (const [key, max] of optionalLimits) {
    const v = (lead[key] ?? "") as string;
    if (typeof v === "string" && v.length > max) return `${key} too long`;
  }

  return null;
};

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

const row = (label: string, value: string | null | undefined) => {
  const display = value && value.trim() ? escapeHtml(value) : "—";
  return `
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #eee;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#888;width:160px;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:12px 16px;border-bottom:1px solid #eee;font-size:15px;color:#1a1a1a;">${display}</td>
    </tr>`;
};

const jsonResponse = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const ip = getClientIp(req);
  if (!checkRateLimit(ip)) {
    return jsonResponse(429, { ok: false, error: "Too many requests" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFICATION_EMAIL;

  if (!apiKey || !to) {
    return jsonResponse(503, { ok: false, error: "Notification not configured" });
  }

  let lead: LeadPayload;
  try {
    lead = (await req.json()) as LeadPayload;
  } catch {
    return jsonResponse(400, { ok: false, error: "Invalid JSON" });
  }

  const validationError = validate(lead);
  if (validationError) {
    return jsonResponse(400, { ok: false, error: "Invalid payload" });
  }

  const nome = (lead.nome ?? "").trim();
  const email = (lead.email ?? "").trim();
  const subject = `Nuovo lead FLOW Pilates – ${nome}`;
  const timestamp = new Date().toLocaleString("it-IT", {
    timeZone: "Europe/Rome",
    dateStyle: "long",
    timeStyle: "short",
  });

  const html = `<!doctype html>
<html lang="it">
  <body style="margin:0;background:#faf7f2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1a1a1a;">
    <div style="max-width:560px;margin:32px auto;background:#ffffff;border:1px solid #ece7df;border-radius:14px;overflow:hidden;">
      <div style="padding:24px 28px;background:#1a1a1a;color:#faf7f2;">
        <p style="margin:0;font-size:11px;letter-spacing:0.32em;text-transform:uppercase;color:#c49a6c;">FLOW Pilates Studio</p>
        <h1 style="margin:8px 0 0 0;font-size:22px;font-weight:500;letter-spacing:-0.01em;">Nuovo lead in lista prioritaria</h1>
      </div>
      <table role="presentation" style="width:100%;border-collapse:collapse;">
        ${row("Nome", lead.nome)}
        ${row("Email", lead.email)}
        ${row("Telefono", lead.telefono ?? null)}
        ${row("Comune", lead.comune ?? null)}
        ${row("Obiettivo", lead.obiettivo ?? null)}
        ${row("Frequenza", lead.frequenza ?? null)}
        ${row("Come ci hai trovato", lead.come_trovato ?? null)}
        ${row("Ricevuto", timestamp)}
      </table>
      <div style="padding:18px 28px;background:#faf7f2;color:#888;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;">
        Notifica automatica · founder_leads
      </div>
    </div>
  </body>
</html>`;

  const replyTo = isValidEmail(email) ? email : undefined;

  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "FLOW Pilates <onboarding@resend.dev>",
      to: [to],
      reply_to: replyTo,
      subject,
      html,
    }),
  });

  if (!resp.ok) {
    const detail = await resp.text().catch(() => "");
    console.error("[notify-lead] resend failed", resp.status, detail);
    return jsonResponse(502, { ok: false });
  }

  return jsonResponse(200, { ok: true });
}
