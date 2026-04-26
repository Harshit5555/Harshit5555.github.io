import { Suspense, lazy } from 'react';
import { useIsDesktop } from '../lib/useReducedMotion';
import MobileFallback from '../three/MobileFallback';
import { UWLogo } from '../components/Logos';

const HeroScene = lazy(() => import('../three/HeroScene'));

export default function Intro() {
  const isDesktop = useIsDesktop(768);

  return (
    <section
      id="intro"
      className="relative pt-28 md:pt-32 pb-20 md:pb-28"
      aria-labelledby="intro-heading"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <p className="section-index mb-8 md:mb-14">01 — intro</p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">
          {/* Left column: copy */}
          <div className="md:col-span-5 lg:col-span-5">
            <p className="font-mono text-xs tracking-widish text-ink-soft mb-8 flex items-center gap-2">
              <UWLogo size={18} />
              <span>Harshit Joshi / Madison, Wisconsin</span>
            </p>

            <h1
              id="intro-heading"
              className="fraunces-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] font-light text-ink tracking-tightish"
            >
              I build things that <em className="italic font-light">talk back</em>.
            </h1>

            <p className="mt-8 text-[1.05rem] md:text-[1.125rem] leading-[1.6] text-ink-soft max-w-prose38">
              Senior at UW-Madison studying computer science and data science.
              Currently shipping AI products at Strudel, teaching algorithms to
              two thousand undergrads, and quietly co-running a cricket club
              that keeps winning things it probably shouldn't.
            </p>

            <p className="mt-10 font-mono text-xs tracking-widish text-ink-soft">
              available May 2026 → full-time, no sponsorship needed.
            </p>
          </div>

          {/* Right column: 3D / SVG */}
          <div
            className="md:col-span-7 lg:col-span-7 h-[42vh] md:h-[68vh] min-h-[320px] md:min-h-[480px] relative"
            aria-hidden="true"
          >
            {isDesktop ? (
              <Suspense fallback={<MobileFallback />}>
                <HeroScene />
              </Suspense>
            ) : (
              <MobileFallback />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
