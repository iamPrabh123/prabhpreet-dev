import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

const socials = [
  { href: profile.github, label: "GitHub", Icon: Github },
  { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">Built with passion, code, and curiosity.</p>
        </div>

        <ul className="flex items-center gap-3">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-secondary/50 text-muted-foreground transition-colors hover:text-primary"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground sm:px-8">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
