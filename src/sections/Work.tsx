import { motion } from 'framer-motion';
import type { ComponentType } from 'react';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';
import {
  StrudelLogo,
  OpenAILogo,
  DeloitteLogo,
  UWLogo,
  WisconsinUnionLogo,
  WiscersLogo,
} from '../components/Logos';

type IconCmp = ComponentType<{ size?: number; className?: string }>;

type Role = {
  dates: string;
  location: string;
  role: string;
  company: string;
  body: string;
  Logo: IconCmp;
};

const roles: Role[] = [
  {
    dates: 'Aug 2025 — present',
    location: 'Madison',
    role: 'AI Engineer',
    company: 'Strudel',
    body: 'Shipping the OCR and LLM extraction pipeline, the FastAPI service that exposes it, and a reusable customer-onboarding framework that cut integration time by sixty percent.',
    Logo: StrudelLogo,
  },
  {
    dates: 'Summer 2025',
    location: 'Madison',
    role: 'Software Developer',
    company: 'OpenAI × UW-Madison SAIL Program',
    body: 'Built justGO.AI, a GPT-4 powered travel planner that compresses an eight-hour planning session into fifteen minutes. Two thousand daily requests, 99.2% uptime.',
    Logo: OpenAILogo,
  },
  {
    dates: 'Summer 2023',
    location: 'Mumbai',
    role: 'Software Analyst Intern',
    company: 'Deloitte',
    body: 'AI document processing for enterprise clients including the Reserve Bank of India and Godrej. Lifted extraction accuracy from 92% to 99.5%.',
    Logo: DeloitteLogo,
  },
  {
    dates: 'Aug 2023 — present',
    location: 'Madison',
    role: 'Teaching Assistant',
    company: 'CS 400, UW-Madison',
    body: 'Walking two thousand students through Java, hash maps, red-black trees, and the kind of debugging that makes the next bug less scary.',
    Logo: UWLogo,
  },
  {
    dates: 'Jan 2025 — present',
    location: 'Madison',
    role: 'Building Manager',
    company: 'Wisconsin Union',
    body: 'On-site decision-maker for a $5M facilities operation across Memorial Union and Union South. Mostly: keeping things running while ten things happen at once.',
    Logo: WisconsinUnionLogo,
  },
  {
    dates: '2024',
    location: 'Madison',
    role: 'Research Scholar',
    company: 'WISCERS',
    body: 'Computer vision and mixed reality on Microsoft HoloLens for emergency-response situational awareness. Presented at the WISCERS symposium.',
    Logo: WiscersLogo,
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="py-20 md:py-32"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-12 md:mb-20">
          <p className="section-index mb-3">02 — work</p>
          <h2
            id="work-heading"
            className="font-mono text-xs tracking-widish text-ink-soft"
          >
            where i've spent my hours
          </h2>
        </div>

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="divide-y divide-rule border-t border-rule"
        >
          {roles.map((r) => (
            <motion.li
              key={r.role + r.company}
              variants={fadeUp}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-7 md:py-9"
            >
              <div className="md:col-span-3 lg:col-span-3 flex items-start gap-4">
                <r.Logo size={36} className="shrink-0 mt-1" />
                <div>
                  <p className="font-mono text-xs tracking-widish text-ink-soft">
                    {r.dates}
                  </p>
                  <p className="font-mono text-xs tracking-widish text-ink-soft mt-1">
                    {r.location}
                  </p>
                </div>
              </div>
              <div className="md:col-span-9 lg:col-span-9 max-w-prose60">
                <p className="font-serif text-[1.5rem] md:text-[1.75rem] leading-tight text-ink">
                  {r.role},{' '}
                  <span className="italic text-ink-soft">{r.company}</span>
                </p>
                <p className="mt-3 text-[1rem] md:text-[1.05rem] leading-[1.65] text-ink-soft">
                  {r.body}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
