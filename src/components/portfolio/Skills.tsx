import { Code2, Layout, Server, Database, Wrench, Network } from "lucide-react";
import { Section, Reveal } from "./Section";
import { skillGroups } from "@/data/portfolio";

const icons = { Code2, Layout, Server, Database, Wrench, Network } as const;

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools and concepts I work with"
      description="A practical stack built around backend engineering, full-stack development and computer science fundamentals."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = icons[g.icon as keyof typeof icons];
          return (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="surface-card h-full rounded-2xl p-6 hover:-translate-y-0.5">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-secondary text-primary">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-medium">{g.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-lg border border-border bg-background/50 px-2.5 py-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
