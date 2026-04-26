import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';

type Note = {
  title: string;
  body: string;
};

const notes: Note[] = [
  {
    title: 'On AI as infrastructure',
    body: 'The moment a tool stops being a tool and becomes plumbing is the moment its design constraints flip from "delight" to "don\'t fail." Most AI products are still pretending to be the former. The interesting work is in the latter, the onboarding flows that work at 2am, the fallbacks that don\'t apologize, the latency budgets nobody ever sees. That\'s the stuff I want to spend my career on.',
  },
  {
    title: 'On forward-deployed engineering',
    body: 'A lot of my favorite engineering happens in customer offices, not on Slack. The bug in production is rarely the bug you wrote, and the feature that closes the deal is rarely the feature on the roadmap. You learn this by sitting next to the person clicking the buttons. There\'s no substitute. Every demo I\'ve shipped has an embarrassing story attached to it, and I\'m grateful for all of them.',
  },
  {
    title: 'On Madison winters',
    body: 'They are not, in fact, fine. They are character-building, which is a different thing. The first time it hit minus twenty I called my mother and asked her, with full sincerity, whether the human face was meant to do this. She laughed at me for eleven minutes. Six winters later I still miss Mumbai every February, and I still wouldn\'t trade Madison for it.',
  },
];

export default function Notes() {
  return (
    <section
      id="writing"
      className="py-20 md:py-32"
      aria-labelledby="notes-heading"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <p className="section-index mb-8">04 — notes</p>

        <motion.h2
          id="notes-heading"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="font-serif italic font-light text-[clamp(2rem,5vw,3.5rem)] leading-tight text-ink max-w-prose60 mb-16 md:mb-24"
        >
          Things I'm thinking about right now.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 border-t border-rule"
        >
          {notes.map((n, i) => (
            <motion.article
              key={n.title}
              variants={fadeUp}
              className={`pt-8 md:pt-10 pb-8 md:pb-2 md:pr-8 ${
                i < notes.length - 1
                  ? 'md:border-r md:border-rule border-b md:border-b-0 border-rule'
                  : ''
              } ${i > 0 ? 'md:pl-8' : ''}`}
            >
              <h3 className="font-mono text-[0.7rem] tracking-widish uppercase text-ink-soft mb-4">
                {n.title}
              </h3>
              <p className="text-[1rem] leading-[1.7] text-ink">{n.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
