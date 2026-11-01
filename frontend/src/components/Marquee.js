import { MARQUEE_ITEMS } from "../data/portfolio";

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div data-testid="skills-marquee" className="relative border-y border-cyan-500/10 bg-[#0B132B]/60 py-5 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="flex w-max animate-marquee gap-10 pr-10">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap" aria-hidden={i >= MARQUEE_ITEMS.length}>
            <span className="font-display text-sm sm:text-base font-semibold tracking-wide text-slate-400">{item}</span>
            <span className="h-1.5 w-1.5 rotate-45 bg-cyan-400/70 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
