import { Terminal, Check } from "lucide-react";
import { Section, Reveal } from "./Section";
import { experience, journey } from "@/data/portfolio";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & Learning"
      title="Experience & Learning"
      description="I'm a student without formal industry experience yet — this is the self-directed engineering work I do instead."
    >
      <div className="grid gap-6">
        {experience.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.05}>
            <article className="surface-card rounded-3xl p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary text-primary">
                    <Terminal className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{e.title}</h3>
                    <p className="text-sm text-muted-foreground">{e.subtitle}</p>
                  </div>
                </div>
                <span className="rounded-full border border-border bg-background/50 px-3 py-1 font-mono text-xs text-primary">
                  {e.period}
                </span>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">{e.description}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 className="text-lg font-semibold">Development journey</h3>
        <p className="mt-2 text-sm text-muted-foreground">How my skills have compounded over time.</p>
      </Reveal>

      <ol className="relative mt-8 border-l border-border pl-6 sm:pl-8">
        {journey.map((j, i) => (
          <Reveal key={j.title} delay={i * 0.05}>
            <li className="group relative pb-8 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[31px] top-1.5 grid h-3 w-3 place-items-center rounded-full border border-primary bg-background transition-all group-hover:bg-primary sm:-left-[39px]"
              />
              <p className="font-mono text-xs text-primary">Step {String(i + 1).padStart(2, "0")}</p>
              <h4 className="mt-1 text-base font-medium">{j.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{j.detail}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
