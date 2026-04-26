import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';

type Project = {
  index: string;
  name: string;
  tagline: string;
  body: string;
  stack: string[];
  href: string;
};

const projects: Project[] = [
  {
    index: '01',
    name: 'justGO.AI',
    tagline:
      'AI travel planner that compresses eight hours into fifteen minutes.',
    body: 'Built end-to-end through the OpenAI × UW-Madison SAIL program. React + Flask, GPT-4, real-time flights and hotels, two thousand daily requests, 99.2% uptime, average $200 saved per booking.',
    stack: ['react', 'flask', 'gpt-4', 'aws'],
    href: 'https://github.com/Harshit5555/justgo-ai',
  },
  {
    index: '02',
    name: 'Centrible Scans',
    tagline:
      'OCR-driven receipt-to-spending tool for thirty local Madison businesses.',
    body: 'Kotlin + Firebase + OpenCV + Tesseract, tuned to 90% extraction accuracy across messy lighting and document formats. The project that made me care about small businesses.',
    stack: ['kotlin', 'firebase', 'opencv', 'tesseract'],
    href: 'https://github.com/Harshit5555/centrible-scans',
  },
  {
    index: '03',
    name: 'BadgerHome',
    tagline:
      'Cross-platform sublet-matching app with 250+ active users in Madison.',
    body: 'Collaborative-filtering match engine hits 75% preference accuracy and cuts average search time in half.',
    stack: ['react native', 'node', 'mongodb', 'scikit-learn'],
    href: 'https://github.com/Harshit5555/badgerhome',
  },
  {
    index: '04',
    name: 'Cloud Data Visualization Portal',
    tagline:
      'A secure cloud portal that lets UW researchers process and visualize fifty-plus GB datasets without writing code.',
    body: 'Flask + AWS S3 + Lambda + Pandas, with an automated cleaning pipeline that cut visualization prep time by sixty percent.',
    stack: ['python', 'flask', 'aws', 'pandas'],
    href: 'https://github.com/Harshit5555/cloud-data-portal',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-12 md:mb-20">
          <p className="section-index mb-3">03 — selected work</p>
          <h2
            id="projects-heading"
            className="font-mono text-xs tracking-widish text-ink-soft"
          >
            things i've shipped
          </h2>
        </div>

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="divide-y divide-rule border-t border-rule"
        >
          {projects.map((p) => (
            <motion.li
              key={p.name}
              variants={fadeUp}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 group"
            >
              <div className="md:col-span-1">
                <p className="font-mono text-xs tracking-widish text-ink-soft">
                  {p.index}
                </p>
              </div>
              <div className="md:col-span-11 lg:col-span-10 max-w-prose60">
                <h3 className="font-serif font-semibold text-[2rem] md:text-[2.75rem] leading-[1.05] text-ink tracking-tightish">
                  {p.name}
                </h3>
                <p className="mt-3 italic text-[1.05rem] md:text-[1.15rem] text-ink-soft leading-snug">
                  {p.tagline}
                </p>
                <p className="mt-5 text-[1rem] md:text-[1.05rem] leading-[1.7] text-ink">
                  {p.body}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.7rem] tracking-widish text-ink-soft">
                  {p.stack.map((s, i) => (
                    <span key={s} className="flex items-center gap-2">
                      <span>{s}</span>
                      {i < p.stack.length - 1 && (
                        <span aria-hidden="true">·</span>
                      )}
                    </span>
                  ))}
                </div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-block mt-6 font-mono text-xs tracking-widish text-ink"
                >
                  view →
                </a>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
