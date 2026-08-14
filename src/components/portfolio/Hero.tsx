import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/portfolio";

const codeLines = [
  { t: "const developer = {", c: "text-muted-foreground" },
  { t: "  name: 'Prabhpreet Singh',", c: "text-foreground" },
  { t: "  role: 'Backend & Full-Stack',", c: "text-foreground" },
  { t: "  stack: ['Java', 'Spring', 'Node'],", c: "text-primary" },
  { t: "  learning: ['DSA', 'System Design'],", c: "text-primary" },
  { t: "  shipping: true,", c: "text-foreground" },
  { t: "};", c: "text-muted-foreground" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-40">
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0 -z-10 opacity-40" />

      <div className="mx-auto grid max-w-6xl gap-14 px-5 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-sm text-muted-foreground"
          >
            Hi, I&apos;m {profile.name} <span aria-hidden="true">👋</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-gradient">{profile.heroHeadline}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.heroSupport}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
            >
              View My Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Contact Me
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Download Resume
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="mt-10 flex items-center gap-3"
          >
            {[
              { href: profile.github, label: "GitHub", Icon: Github },
              { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-secondary/50 text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="surface-card relative rounded-2xl p-1"
          aria-hidden="true"
        >
          <div className="flex items-center gap-2 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">developer.ts</span>
          </div>
          <div className="rounded-xl bg-background/60 p-5 font-mono text-[13px] leading-7 sm:text-sm">
            {codeLines.map((line, i) => (
              <motion.div
                key={line.t}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.09, duration: 0.35 }}
                className={line.c}
              >
                <span className="mr-4 select-none text-muted-foreground/40">{i + 1}</span>
                {line.t}
              </motion.div>
            ))}
            <motion.span
              animate={{ opacity: [1, 0.15, 1] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
              className="mt-1 inline-block h-4 w-2 bg-primary align-middle"
            />
          </div>
          <div className="grid grid-cols-3 gap-2 p-3">
            {["API", "DB", "CACHE"].map((n) => (
              <div
                key={n}
                className="rounded-lg border border-border bg-secondary/40 px-3 py-2 text-center font-mono text-[11px] text-muted-foreground"
              >
                {n}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
