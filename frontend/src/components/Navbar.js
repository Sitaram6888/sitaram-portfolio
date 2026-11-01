import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { scrollToId } from "../lib/scroll";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? "glass border-b border-cyan-500/10" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <button onClick={() => go("home")} className="shrink-0" data-testid="nav-home-link" aria-label="Back to top">
          <Logo />
        </button>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => go(l.id)}
              className="relative text-sm text-slate-300 hover:text-cyan-300 transition-colors duration-200 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-gradient-to-r after:from-blue-400 after:to-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </button>
          ))}
          <button
            data-testid="nav-hire-me-button"
            onClick={() => go("contact")}
            className="group flex items-center gap-1.5 text-sm font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 hover:shadow-[0_0_24px_rgba(6,182,212,0.45)] transition-shadow duration-300"
          >
            Hire Me
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden text-slate-200 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div data-testid="nav-mobile-menu" className="md:hidden glass border-t border-cyan-500/10 px-6 py-4 flex flex-col gap-1">
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-mobile-link-${l.id}`}
              onClick={() => go(l.id)}
              className="text-left py-3 text-slate-200 hover:text-cyan-300 border-b border-slate-800/60 transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            data-testid="nav-mobile-hire-me-button"
            onClick={() => go("contact")}
            className="mt-3 mb-1 flex items-center justify-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950"
          >
            Hire Me <ArrowUpRight size={15} />
          </button>
        </div>
      )}
    </header>
  );
}
