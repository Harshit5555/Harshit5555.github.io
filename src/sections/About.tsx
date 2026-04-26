import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../lib/motion';
import { UWLogo } from '../components/Logos';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <p className="section-index mb-10 md:mb-16">01b — the longer answer</p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left: prose */}
          <motion.div
            className="md:col-span-7 lg:col-span-7"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h2
              id="about-heading"
              className="sr-only"
            >
              About Harshit Joshi
            </h2>

            <div className="space-y-6 text-[1.05rem] md:text-[1.125rem] leading-[1.7] text-ink max-w-prose60">
              <p>
                I grew up in Mumbai and ended up in Madison through a
                Valedictorian-shaped accident and a love of cold weather I've
                since reconsidered. I'm graduating in May with a double major
                in computer science and data science.
              </p>
              <p>
                Most of my work lives at the seam between research-grade ideas
                and software people actually use. At Strudel I'm an early AI
                engineer shipping the OCR and LLM pipeline, the FastAPI service
                that wraps it, and the onboarding framework that cut customer
                integration time by sixty percent. Before that I was at
                Deloitte in Mumbai pulling document accuracy from 92 to 99.5
                percent for the Reserve Bank of India. Before that I built
                justGO.AI through the OpenAI x UW-Madison program, a travel
                planner that took eight hours of vacation work down to fifteen
                minutes.
              </p>
              <p>
                I teach CS 400 at UW. I co-founded the Badger Cricket Club,
                which has won two NCAA national championships since I started.
                I organized two TEDx events back home. I'm learning Japanese,
                slowly.
              </p>
              <p>I have a frog. His name is Pineapples. He is unbothered.</p>
            </div>
          </motion.div>

          {/* Right: marginalia */}
          <motion.aside
            className="md:col-span-5 lg:col-span-4 lg:col-start-9 space-y-8"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            aria-label="Quick facts"
          >
            <Marginalia
              label="Currently"
              value="Senior, UW-Madison · GPA 3.43"
              icon={<UWLogo size={28} />}
            />
            <Marginalia
              label="Reading"
              value="Books on protocol design and a lot of Murakami"
            />
            <Marginalia
              label="Roommate"
              value="Pineapples (Pacman frog, 4 years)"
            />
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Marginalia({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: ReactNode;
}) {
  return (
    <div className="bg-whisper px-5 py-4 border-l-[1px] border-rule flex gap-4 items-start">
      {icon ? <div className="shrink-0 mt-0.5">{icon}</div> : null}
      <div>
        <p className="font-mono text-[0.65rem] tracking-widish uppercase text-ink-soft mb-1.5">
          {label}
        </p>
        <p className="text-[0.95rem] leading-snug text-ink">{value}</p>
      </div>
    </div>
  );
}
