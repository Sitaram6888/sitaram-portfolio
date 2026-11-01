import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, testid }) {
  return (
    <Reveal className="mb-14">
      <p className="eyebrow-label mb-3" data-testid={testid ? `${testid}-eyebrow` : undefined}>{eyebrow}</p>
      <h2 data-testid={testid} className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-50">
        {title}
      </h2>
      <div className="mt-4 h-px w-24 bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent" />
    </Reveal>
  );
}
