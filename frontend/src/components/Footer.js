import { ArrowUp } from "lucide-react";
import Logo from "./Logo";
import { scrollToId } from "../lib/scroll";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="border-t border-cyan-500/10 bg-[#0B132B]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Logo />
          <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2">
            {LINKS.map((l) => (
              <button
                key={l.id}
                data-testid={`footer-link-${l.id}`}
                onClick={() => scrollToId(l.id)}
                className="text-sm text-slate-400 hover:text-cyan-300 transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>
          <button
            data-testid="back-to-top-button"
            onClick={() => scrollToId("home")}
            aria-label="Back to top"
            className="w-11 h-11 rounded-full border border-cyan-400/25 flex items-center justify-center text-cyan-300 hover:bg-cyan-400/10 hover:-translate-y-1 transition-all duration-300"
          >
            <ArrowUp size={18} />
          </button>
        </div>
        <div className="mt-10 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-500">© 2026 Sitaram Kumar. All Rights Reserved.</p>
          <p className="text-xs text-slate-500">
            Designed with <span className="text-gradient font-semibold">passion</span> for technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
