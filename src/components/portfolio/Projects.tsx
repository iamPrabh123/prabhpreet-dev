import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Section, Reveal } from "./Section";
import { projects, profile } from "@/data/portfolio";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've designed, built and shipped"
      description="Full-stack and backend-focused applications built to practise real engineering problems — auth, APIs, data modelling and clean UI."
    >
      <div className="grid gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05}>
            <article className="surface-card group grid overflow-hidden rounded-3xl md:grid-cols-2">
              <div className="relative overflow-hidden border-border md:border-r">
                <img
                  src={p.image}
                  alt={`${p.name} interface preview`}
                  loading="lazy"
                  width={1200}
                  height={750}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] md:h-full"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-background/25" />
              </div>

              <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {p.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-lg border border-border bg-background/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-4 py-2.5 text-sm transition-colors hover:bg-secondary"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" /> GitHub
                  </a>
                  <a
                    href={p.demo}
                    target={p.demo.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 flex justify-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            View All Projects <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
