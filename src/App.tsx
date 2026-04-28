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
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-line)]/60 bg-[var(--color-bg)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-ink)] text-[10px] font-semibold tracking-[0.16em] text-[var(--color-bg)]"
          >
            FL
          </span>
          <span className="font-display text-lg leading-none text-[var(--color-ink)] tracking-[0.18em]">
            FLOW
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-[var(--color-muted)] md:flex">
          <a className="transition hover:text-[var(--color-ink)]" href="#metodo">
            Metodo
          </a>
          <a className="transition hover:text-[var(--color-ink)]" href="#founder-list">
            Lista founder
          </a>
        </nav>
        <a
          href="#founder-list"
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] px-4 py-2 text-xs font-medium text-white transition hover:bg-[var(--color-accent-deep)] sm:px-5 sm:text-sm"
        >
          Entra in lista
        </a>
      </div>
    </header>
  );
}

function App() {
  return (
    <div id="top" className="min-h-screen bg-[var(--color-bg)]">
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
