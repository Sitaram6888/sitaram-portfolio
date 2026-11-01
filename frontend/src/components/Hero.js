import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail, ChevronDown, Sparkles, FileText } from "lucide-react";
import { PROFILE } from "../data/portfolio";
import { scrollToId } from "../lib/scroll";

const EASE = [0.22, 1, 0.36, 1];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yGlow = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yCard = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onTilt = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -py * 10, ry: px * 12 });
  };

  return (
    <section id="home" ref={ref} data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div style={{ y: yGlow }} className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 grid lg:grid-cols-12 gap-14 lg:gap-10 items-center w-full">
        <div className="lg:col-span-7">
          <motion.div {...fadeUp(0.05)} className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-4 py-1.5 mb-8" data-testid="hero-status-badge">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300" />
            </span>
            <span className="text-xs font-mono tracking-wider text-cyan-300">Available for Internships — 2027 Batch</span>
          </motion.div>

          <h1 data-testid="hero-name" className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
            {["Sitaram", "Kumar"].map((w, i) => (
              <span key={w} className="block overflow-hidden pb-1 -mb-1">
                <motion.span
                  className={`block ${i === 1 ? "text-gradient" : "text-slate-50"}`}
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.95, delay: 0.18 + i * 0.14, ease: EASE }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p {...fadeUp(0.45)} data-testid="hero-headline" className="mt-5 text-base md:text-lg font-display font-semibold text-slate-200 flex items-center gap-2">
            <Sparkles size={17} className="text-cyan-400" />
            {PROFILE.headline}
          </motion.p>

          <motion.p {...fadeUp(0.55)} data-testid="hero-subtitle" className="mt-2 text-sm font-mono text-cyan-300/90 tracking-wide">
            {PROFILE.subtitle}
          </motion.p>

          <motion.p {...fadeUp(0.65)} data-testid="hero-intro" className="mt-6 text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
            {PROFILE.intro}
          </motion.p>

          <motion.div {...fadeUp(0.78)} className="mt-10 flex flex-wrap items-center gap-4">
            <button
              data-testid="hero-explore-projects-button"
              onClick={() => scrollToId("projects")}
              className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 hover:shadow-[0_0_36px_rgba(6,182,212,0.5)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore My Projects
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              data-testid="hero-contact-button"
              onClick={() => scrollToId("contact")}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border border-slate-700 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-cyan-400/5 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Contact Me
            </button>
            <a
              data-testid="hero-resume-button"
              href={PROFILE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border border-cyan-400/30 bg-cyan-400/5 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-0.5"
            >
              <FileText size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
              Resume
            </a>
          </motion.div>
        </div>

        <motion.div style={{ y: yCard }} className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: EASE }}
            onMouseMove={onTilt}
            onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
            style={{ transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
            className="relative w-72 sm:w-80 rounded-[1.75rem] p-px bg-gradient-to-br from-blue-500/70 via-cyan-400/40 to-teal-400/70 transition-transform duration-200 will-change-transform"
            data-testid="hero-portrait-card"
          >
            <div className="relative rounded-[1.7rem] bg-[#0B132B] aspect-[4/5] overflow-hidden grid-bg flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-[#030712]/40" />
              <div className="absolute w-56 h-56 rounded-full border border-cyan-400/15" />
              <div className="absolute w-40 h-40 rounded-full border border-blue-500/20" />
              <span className="font-display text-7xl font-extrabold text-gradient select-none" data-testid="hero-portrait-monogram">SK</span>

              <span className="absolute top-6 -left-1 animate-float glass border border-cyan-400/25 rounded-full px-3 py-1.5 text-xs font-mono text-cyan-300">C++</span>
              <span className="absolute bottom-20 -right-1 animate-float glass border border-blue-400/25 rounded-full px-3 py-1.5 text-xs font-mono text-blue-300" style={{ animationDelay: "1.2s" }}>React.js</span>
              <span className="absolute top-1/2 -right-2 animate-float glass border border-teal-400/25 rounded-full px-3 py-1.5 text-xs font-mono text-teal-300" style={{ animationDelay: "2.1s" }}>MongoDB</span>
              <span className="absolute bottom-6 left-6 animate-float glass border border-cyan-400/25 rounded-full px-3 py-1.5 text-xs font-mono text-cyan-200" style={{ animationDelay: "0.6s" }}>Node.js</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        data-testid="hero-scroll-indicator"
        onClick={() => scrollToId("about")}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-300 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown size={16} />
      </motion.button>
    </section>
  );
}
