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

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFICATION_EMAIL;

  if (!apiKey || !to) {
    return new Response(
      JSON.stringify({ ok: false, error: "Notification not configured" }),
      { status: 503, headers: { "content-type": "application/json" } },
    );
  }

  let lead: LeadPayload;
  try {
    lead = (await req.json()) as LeadPayload;
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "Invalid JSON" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const nome = (lead.nome || "").trim() || "Senza nome";
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

  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "FLOW Pilates <onboarding@resend.dev>",
      to: [to],
      reply_to: lead.email || undefined,
      subject,
      html,
    }),
  });

  if (!resp.ok) {
    const detail = await resp.text();
    return new Response(
      JSON.stringify({ ok: false, status: resp.status, detail }),
      { status: 502, headers: { "content-type": "application/json" } },
    );
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
