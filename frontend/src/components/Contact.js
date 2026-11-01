import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Linkedin, Github, Copy, Send, Loader2, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { PROFILE } from "../data/portfolio";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const CHANNELS = [
  { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, copyable: true, testid: "contact-email" },
  { icon: Linkedin, label: "LinkedIn", value: "sitaram-kumar-29b312445", href: PROFILE.linkedin, copyable: false, testid: "contact-linkedin" },
  { icon: Github, label: "GitHub", value: "Sitaram6888", href: PROFILE.github, copyable: false, testid: "contact-github" },
];

const emptyForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Could not copy — please copy it manually");
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent — Sitaram will get back to you soon.");
      setForm(emptyForm);
    } catch {
      toast.error("Could not send right now — please email me directly.");
    } finally {
      setSending(false);
    }
  };

  const inputCls =
    "w-full rounded-xl bg-slate-900/60 border border-slate-700/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/15 transition-all duration-200";

  return (
    <section id="contact" data-testid="contact-section" className="py-20 lg:py-28 relative">
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading eyebrow="05 · Contact" title="Let's build something together" testid="contact-heading" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
              I'm open to internships, fresher roles and collaborative projects. Reach out through any of these
              channels — or drop a message and it lands straight in my inbox.
            </p>
            <div className="flex flex-col gap-4">
              {CHANNELS.map((c) => (
                <div
                  key={c.label}
                  data-testid={`${c.testid}-card`}
                  className="group flex items-center gap-4 glass rounded-2xl border border-blue-500/15 p-4 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-blue-500/25 to-cyan-400/25 border border-cyan-400/25 flex items-center justify-center">
                    <c.icon size={18} className="text-cyan-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500">{c.label}</p>
                    <a
                      data-testid={c.testid}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="block truncate text-sm text-slate-200 hover:text-cyan-300 transition-colors"
                    >
                      {c.value}
                    </a>
                  </div>
                  {c.copyable ? (
                    <button
                      data-testid="contact-copy-email-button"
                      onClick={copyEmail}
                      aria-label="Copy email address"
                      className="shrink-0 p-2 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-cyan-400/10 transition-colors"
                    >
                      <Copy size={15} />
                    </button>
                  ) : (
                    <ArrowUpRight size={15} className="shrink-0 text-slate-500 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <form
              data-testid="contact-form"
              onSubmit={submit}
              className="glass rounded-2xl border border-blue-500/15 p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-2">Name</label>
                  <input id="contact-name" data-testid="contact-name-input" required value={form.name} onChange={set("name")} placeholder="Your name" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="contact-email-input" className="block text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-2">Email</label>
                  <input id="contact-email-input" data-testid="contact-email-input" type="email" required value={form.email} onChange={set("email")} placeholder="you@example.com" className={inputCls} />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-2">Subject</label>
                <input id="contact-subject" data-testid="contact-subject-input" required value={form.subject} onChange={set("subject")} placeholder="Internship opportunity, project idea…" className={inputCls} />
              </div>
              <div className="mt-5">
                <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-2">Message</label>
                <textarea id="contact-message" data-testid="contact-message-input" required rows={5} value={form.message} onChange={set("message")} placeholder="Tell me about the role or project…" className={`${inputCls} resize-none`} />
              </div>
              <button
                data-testid="contact-submit-button"
                type="submit"
                disabled={sending}
                className="mt-7 group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 hover:shadow-[0_0_36px_rgba(6,182,212,0.5)] transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />}
                {sending ? "Sending…" : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
