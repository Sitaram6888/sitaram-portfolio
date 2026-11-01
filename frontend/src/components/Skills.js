import { Code2, BrainCircuit, MonitorSmartphone, ServerCog, Database, GitBranch } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { SKILL_GROUPS } from "../data/portfolio";

const ICONS = { Code2, BrainCircuit, MonitorSmartphone, ServerCog, Database, GitBranch };

export default function Skills() {
  return (
    <section id="skills" data-testid="skills-section" className="py-20 lg:py-28 relative bg-[#0B132B]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="02 · Technical Skills" title="My technology toolkit" testid="skills-heading" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = ICONS[group.icon];
            return (
              <Reveal key={group.title} delay={0.06 * i}>
                <div
                  data-testid={`skill-card-${group.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className="group glass rounded-2xl border border-blue-500/15 p-6 hover:border-cyan-400/40 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_-12px_rgba(6,182,212,0.25)] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/25 to-cyan-400/25 border border-cyan-400/25 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={19} className="text-cyan-300" />
                    </div>
                    <h3 className="font-display text-base font-semibold text-slate-100">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((s) => (
                      <span
                        key={s}
                        data-testid={`skill-badge-${s.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                        className="text-xs font-medium px-3 py-1.5 rounded-full border border-slate-700 bg-slate-800/40 text-slate-300 group-hover:border-cyan-400/25 group-hover:text-cyan-200 transition-colors duration-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
