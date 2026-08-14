import { Github, ArrowUpRight, GitBranch } from "lucide-react";
import { Section, Reveal } from "./Section";
import { githubRepos, githubStats, profile } from "@/data/portfolio";

// Placeholder contribution grid — swap for the GitHub API when configured.
const weeks = Array.from({ length: 26 });
const days = Array.from({ length: 7 });

export function GitHubSection() {
  return (
    <Section
      id="github"
      eyebrow="Open Source"
      title="Code and contributions"
      description="Repositories and activity live on GitHub. The stats below are placeholders and can be wired to the GitHub API later."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="surface-card h-full rounded-3xl p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-secondary text-primary">
                  <Github className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-medium">Contribution activity</h3>
                  <p className="text-sm text-muted-foreground">Last 6 months (placeholder)</p>
                </div>
              </div>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-3.5 py-2 text-sm transition-colors hover:bg-secondary"
              >
                GitHub Profile <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div aria-hidden="true" className="mt-7 flex gap-1 overflow-hidden">
              {weeks.map((_, w) => (
                <div key={w} className="grid gap-1">
                  {days.map((__, d) => {
                    const seed = (w * 7 + d * 3) % 9;
                    const tone =
                      seed > 6
                        ? "bg-primary/80"
                        : seed > 4
                          ? "bg-primary/50"
                          : seed > 2
                            ? "bg-primary/25"
                            : "bg-secondary";
                    return <span key={d} className={`h-3 w-3 rounded-[3px] ${tone}`} />;
                  })}
                </div>
              ))}
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {githubStats.map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-background/40 p-4">
                  <dt className="text-xs text-muted-foreground">{s.label}</dt>
                  <dd className="mt-1 font-mono text-sm text-primary">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {githubRepos.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.05}>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="surface-card block rounded-2xl p-5 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-2 font-mono text-sm text-foreground">
                  <GitBranch className="h-4 w-4 text-primary" aria-hidden="true" />
                  {r.name}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{r.description}</p>
                <p className="mt-3 text-xs text-muted-foreground">{r.language}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
