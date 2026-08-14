import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Section, Reveal } from "./Section";
import { learning } from "@/data/portfolio";

export function Learning() {
  return (
    <Section
      id="learning"
      eyebrow="Currently Learning"
      title="Currently Learning"
      description="Active focus areas — honest progress, no invented percentages."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {learning.map((l, i) => (
          <Reveal key={l.name} delay={i * 0.05}>
            <div className="surface-card h-full rounded-2xl p-5 hover:-translate-y-0.5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-medium">{l.name}</h3>
                <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{l.level}</p>
              <div className="mt-4 h-1 overflow-hidden rounded-full bg-secondary">
                <motion.div
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full w-full rounded-full bg-primary/70"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
