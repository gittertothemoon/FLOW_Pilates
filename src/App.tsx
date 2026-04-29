import { useEffect, useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { FounderForm } from "./components/FounderForm";
import { PricingSection } from "./components/PricingSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed left-0 top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-[var(--color-cream)]/10 bg-[var(--color-dark)]/85 backdrop-blur-md"
          : "bg-transparent",
      ].join(" ")}
      style={{ transform: "translateZ(0)", WebkitTransform: "translateZ(0)" }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <a
          href="#top"
          className="flex items-center gap-3 text-[var(--color-cream-bright)]"
          aria-label="FLOW Pilates Studio"
        >
          <img
            src="/logo-white.png"
            alt="FLOW Pilates Studio"
            className="h-10 w-auto select-none"
          />
        </a>
        <nav className="hidden items-center gap-10 text-[12px] uppercase tracking-[0.22em] text-[var(--color-cream)]/70 md:flex">
          <a
            className="transition hover:text-[var(--color-accent-soft)]"
            href="#metodo"
          >
            Metodo
          </a>
          <a
            className="transition hover:text-[var(--color-accent-soft)]"
            href="#founder-list"
          >
            Lista founder
          </a>
        </nav>
        <a
          href="#founder-list"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-cream)]/25 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-cream)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent-soft)] sm:px-6"
        >
          Entra in lista
        </a>
      </div>
    </header>
  );
}

function App() {
  return (
    <div id="top" className="bg-[var(--color-dark)]">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <FounderForm />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
