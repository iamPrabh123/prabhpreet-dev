import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { Section, Reveal } from "./Section";
import { profile } from "@/data/portfolio";

const schema = z.object({
  name: z.string().min(2, "Please enter your name").max(80),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters").max(2000),
});

type FormValues = z.infer<typeof schema>;

/**
 * Submission handler placeholder.
 * Connect an email service (or a server function) here later.
 */
async function sendMessage(values: FormValues) {
  await new Promise((r) => setTimeout(r, 700));
  console.info("Contact form submission (not yet connected to an email service):", values);
}

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "LinkedIn", value: "Connect on LinkedIn", href: profile.linkedin, Icon: Linkedin },
  { label: "GitHub", value: "See my code", href: profile.github, Icon: Github },
];

const inputClass =
  "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus-visible:ring-2 focus-visible:ring-ring/40";

export function Contact() {
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setSending(true);
    try {
      await sendMessage(values);
      toast.success("Message ready to send", {
        description: "Email delivery isn't connected yet — reach out directly meanwhile.",
      });
      reset();
    } finally {
      setSending(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together."
      description="Whether you want to discuss a project, internship opportunity, collaboration, or just connect, feel free to reach out."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="grid content-start gap-4">
          {channels.map(({ label, value, href, Icon }, i) => (
            <Reveal key={label} delay={i * 0.05}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="surface-card flex items-center gap-4 rounded-2xl p-5 hover:-translate-y-0.5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary text-primary">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium">{label}</span>
                  <span className="block truncate text-sm text-muted-foreground">{value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="surface-card rounded-3xl p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  autoComplete="name"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  className={inputClass}
                  {...register("name")}
                />
                {errors.name && (
                  <p role="alert" className="mt-2 text-xs text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  className={inputClass}
                  {...register("email")}
                />
                {errors.email && (
                  <p role="alert" className="mt-2 text-xs text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Tell me about the role, project or idea..."
                aria-invalid={!!errors.message}
                className={`${inputClass} resize-y`}
                {...register("message")}
              />
              {errors.message && (
                <p role="alert" className="mt-2 text-xs text-destructive">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 disabled:opacity-60"
            >
              {sending ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <Send className="h-4 w-4" aria-hidden="true" />
              )}
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
