import { Section, Reveal } from "./Section";
import { aboutParagraphs, interests, stats } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A student developer with an engineer's mindset">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="space-y-5">
          {aboutParagraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          <ul className="flex flex-wrap gap-2 pt-2">
            {interests.map((i) => (
              <li
                key={i}
                className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-sm text-muted-foreground"
              >
                {i}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 self-start">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="surface-card h-full rounded-2xl p-5">
                <p className="font-mono text-2xl font-semibold text-primary">{s.value}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
