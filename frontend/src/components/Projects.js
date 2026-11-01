import { ShoppingBag, LayoutGrid, ShoppingCart, Github, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { PROJECTS } from "../data/portfolio";

const ICONS = { ShoppingBag, LayoutGrid, ShoppingCart };

export default function Projects() {
  return (
    <section id="projects" data-testid="projects-section" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="03 · Projects" title="Things I've built" testid="projects-heading" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((p, i) => {
            const Icon = ICONS[p.icon];
            return (
              <Reveal key={p.title} delay={0.08 * i}>
                <article
                  data-testid={`project-card-${i + 1}`}
                  className="group h-full flex flex-col glass rounded-2xl border border-blue-500/15 overflow-hidden hover:border-cyan-400/40 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_-12px_rgba(6,182,212,0.3)] transition-all duration-300"
                >
                  <div className="relative h-40 grid-bg overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-60`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent" />
                    <Icon size={72} className="absolute -right-3 -bottom-3 text-white/10 group-hover:scale-110 group-hover:text-white/15 transition-all duration-500" strokeWidth={1.2} />
                    <div className="absolute left-5 bottom-4 w-11 h-11 rounded-xl glass border border-cyan-400/30 flex items-center justify-center">
                      <Icon size={20} className={p.accent} />
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="font-display text-lg font-semibold text-slate-50 tracking-tight group-hover:text-cyan-200 transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed flex-1">{p.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          data-testid={`project-tag-${t.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {(p.github || p.live) && (
                      <div className="mt-4 flex flex-wrap gap-3">
                        {p.live && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid={`project-live-${i + 1}`}
                            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 hover:shadow-[0_0_20px_rgba(6,182,212,0.45)] transition-all duration-300"
                          >
                            <ExternalLink size={14} />
                            Live Demo
                          </a>
                        )}
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid={`project-github-${i + 1}`}
                            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-slate-600 text-slate-300 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-cyan-400/5 transition-all duration-300"
                          >
                            <Github size={14} />
                            View on GitHub
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
