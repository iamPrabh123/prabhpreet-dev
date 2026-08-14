import { GraduationCap } from "lucide-react";
import { Section, Reveal } from "./Section";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="grid gap-6">
        {education.map((e) => (
          <Reveal key={e.degree}>
            <article className="surface-card rounded-3xl p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary text-primary">
                    <GraduationCap className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{e.degree}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
                    <p className="text-sm text-muted-foreground">{e.note}</p>
                  </div>
                </div>
                <span className="rounded-full border border-border bg-background/50 px-3 py-1 font-mono text-xs text-primary">
                  {e.period}
                </span>
              </div>

              <div className="mt-7">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Relevant coursework
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {e.coursework.map((c) => (
                    <li
                      key={c}
                      className="rounded-lg border border-border bg-background/50 px-2.5 py-1.5 text-[13px] text-muted-foreground"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
