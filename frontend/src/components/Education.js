import { GraduationCap, Target, CalendarDays, BookOpen } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" data-testid="education-section" className="py-20 lg:py-28 relative bg-[#0B132B]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="04 · Education & Objective" title="Where I'm headed" testid="education-heading" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <Reveal>
            <div data-testid="education-card" className="h-full glass rounded-2xl border border-blue-500/15 p-6 sm:p-8 hover:border-cyan-400/30 transition-colors duration-300 relative overflow-hidden">
              <GraduationCap size={110} className="absolute -right-5 -bottom-5 text-blue-500/10" strokeWidth={1} />
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/25 to-cyan-400/25 border border-cyan-400/25 flex items-center justify-center mb-6">
                <GraduationCap size={22} className="text-cyan-300" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-50 tracking-tight">
                Bachelor of Technology (B.Tech)
              </h3>
              <p className="mt-2 text-sm sm:text-base text-cyan-300 font-medium">Computer Science and Engineering</p>
              <p className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                <CalendarDays size={15} className="text-slate-500" />
                Graduation Year — <span className="text-slate-200 font-semibold">2027</span>
              </p>
              <div className="mt-4 space-y-1.5">
                <p className="text-xs text-slate-400">Class XII — BSEB Board, 2023 · <span className="text-slate-200 font-semibold">63.2%</span></p>
                <p className="text-xs text-slate-400">Class X — BSEB Board, 2021 · <span className="text-slate-200 font-semibold">65%</span></p>
              </div>
              <div className="mt-6">
                <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-3">
                  <BookOpen size={13} /> Focus areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {["C++", "Data Structures & Algorithms", "MERN Stack", "Problem Solving"].map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-slate-700 bg-slate-800/40 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div data-testid="career-objective-card" className="h-full glass rounded-2xl border border-blue-500/15 p-6 sm:p-8 hover:border-cyan-400/30 transition-colors duration-300 relative overflow-hidden">
              <Target size={110} className="absolute -right-5 -bottom-5 text-cyan-500/10" strokeWidth={1} />
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/25 to-teal-400/25 border border-teal-400/25 flex items-center justify-center mb-6">
                <Target size={22} className="text-teal-300" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-50 tracking-tight">
                Career Objective
              </h3>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                To build a successful career in software development by continuously improving my technical
                knowledge, problem-solving abilities and practical development experience.
              </p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-cyan-400/40 via-blue-500/20 to-transparent" />
              <p className="mt-5 text-xs font-mono text-slate-500 tracking-wide">
                Software Development · Internships & Fresher Roles · 2027
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
