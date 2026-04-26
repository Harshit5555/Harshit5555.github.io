import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../lib/motion';

const links = [
  { label: 'email', value: 'hjoshi4@wisc.edu', href: 'mailto:hjoshi4@wisc.edu' },
  {
    label: 'linkedin',
    value: 'linkedin.com/in/hjoshi4',
    href: 'https://linkedin.com/in/hjoshi4',
  },
  {
    label: 'github',
    value: 'github.com/Harshit5555',
    href: 'https://github.com/Harshit5555',
  },
  { label: 'web', value: 'joshiharshit.tech', href: 'https://joshiharshit.tech' },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-36"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <p className="section-index mb-8">05 — contact</p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <h2
            id="contact-heading"
            className="fraunces-display italic font-light text-[clamp(3rem,7vw,5rem)] leading-[1] text-ink"
          >
            Say hello.
          </h2>

          <p className="mt-8 text-[1.05rem] md:text-[1.125rem] leading-[1.65] text-ink-soft max-w-prose38">
            I read every email. The fastest ways to reach me are below.
          </p>

          <ul className="mt-12 space-y-3 font-mono text-[0.95rem] tracking-widish text-ink">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="link-underline"
                >
                  {l.label} · {l.value}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
