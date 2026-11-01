import { GraduationCap, Code2, Layers, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const HIGHLIGHTS = [
  { icon: GraduationCap, title: "B.Tech CSE", sub: "Class of 2027" },
  { icon: Code2, title: "C++ & DSA", sub: "Core problem-solving toolkit" },
  { icon: Layers, title: "MERN Stack", sub: "Full-stack web development" },
  { icon: Target, title: "Problem Solving", sub: "Consistent, deliberate practice" },
];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="01 · About Me" title="A developer in the making" testid="about-heading" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          <Reveal className="md:col-span-7">
            <div className="h-full glass rounded-2xl border border-blue-500/15 p-6 sm:p-8 hover:border-cyan-400/30 transition-colors duration-300">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                I am pursuing a Bachelor of Technology in Computer Science and Engineering. I have a strong
                foundation in C++, Data Structures and Algorithms, and full-stack web development using the
                MERN stack.
              </p>
              <p className="mt-5 text-sm sm:text-base text-slate-400 leading-relaxed">
                I enjoy building practical applications, learning new technologies and improving my programming
                and problem-solving abilities. My goal is to become a skilled software developer and contribute
                to real-world projects.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Curious", "Disciplined", "Builder", "Team Player"].map((t) => (
                  <span key={t} className="text-xs font-mono px-3 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="md:col-span-5 grid grid-cols-2 gap-4 lg:gap-6">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.title} delay={0.08 * i}>
                <div
                  data-testid={`about-highlight-${h.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className="h-full glass rounded-2xl border border-blue-500/15 p-5 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/25 to-cyan-400/25 border border-cyan-400/25 flex items-center justify-center mb-4">
                    <h.icon size={18} className="text-cyan-300" />
                  </div>
                  <p className="font-display font-semibold text-sm text-slate-100">{h.title}</p>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">{h.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
