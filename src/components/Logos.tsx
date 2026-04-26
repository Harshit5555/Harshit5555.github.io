import type { ReactNode } from 'react';

type SlotProps = { size?: number; className?: string };

function Slot({
  children,
  size = 36,
  className = '',
}: { children: ReactNode } & SlotProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center bg-whisper rounded-[3px] overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      {children}
    </span>
  );
}

function Img({
  src,
  alt,
  size,
  pad = 0.18,
}: {
  src: string;
  alt: string;
  size: number;
  pad?: number;
}) {
  const inner = Math.round(size * (1 - pad * 2));
  return (
    <img
      src={src}
      alt={alt}
      width={inner}
      height={inner}
      loading="lazy"
      className="block object-contain"
      style={{ width: inner, height: inner }}
    />
  );
}

/* UW–Madison Motion W (SVG from Wikimedia Commons) */
export function UWLogo({ size = 36, className = '' }: SlotProps) {
  return (
    <Slot size={size} className={className}>
      <Img src="/logos/uw.svg" alt="UW–Madison" size={size} pad={0.12} />
    </Slot>
  );
}

/* Wisconsin Union — iconic Memorial Union sunburst chair */
export function WisconsinUnionLogo({ size = 36, className = '' }: SlotProps) {
  return (
    <Slot size={size} className={className}>
      <Img
        src="/logos/wisconsin-union-chair.png"
        alt="Wisconsin Union"
        size={size}
        pad={0.1}
      />
    </Slot>
  );
}

/* OpenAI — wordmark via simpleicons CDN */
export function OpenAILogo({ size = 36, className = '' }: SlotProps) {
  return (
    <Slot size={size} className={className}>
      <Img
        src="https://cdn.simpleicons.org/openai/1A1A1A"
        alt="OpenAI"
        size={size}
      />
    </Slot>
  );
}

/* Deloitte — wordmark via simpleicons CDN, in brand green */
export function DeloitteLogo({ size = 36, className = '' }: SlotProps) {
  return (
    <Slot size={size} className={className}>
      <Img
        src="https://cdn.simpleicons.org/deloitte/86BC24"
        alt="Deloitte"
        size={size}
      />
    </Slot>
  );
}

/* Strudel — early-stage AI startup, no public mark; custom monogram */
export function StrudelLogo({ size = 36, className = '' }: SlotProps) {
  const inner = Math.round(size * 0.66);
  return (
    <Slot size={size} className={className}>
      <svg
        width={inner}
        height={inner}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 10c0-1.7 1.3-3 3-3h7v3h-7v3h4c2.2 0 4 1.8 4 4v2c0 2.2-1.8 4-4 4h-7v-3h7v-3h-4c-2.2 0-4-1.8-4-4v-3z"
          fill="#1A1A1A"
        />
      </svg>
    </Slot>
  );
}

/* WISCERS — research program, no public mark; serif W */
export function WiscersLogo({ size = 36, className = '' }: SlotProps) {
  const inner = Math.round(size * 0.66);
  return (
    <Slot size={size} className={className}>
      <svg
        width={inner}
        height={inner}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="16"
          y="23"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="20"
          fontWeight="700"
          fill="#C5050C"
        >
          W
        </text>
      </svg>
    </Slot>
  );
}

/* GitHub mark for project rows */
export function GitHubMark({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11.1 11.1 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}

/* External-link arrow */
export function ArrowOut({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

/* Tech logo via simpleicons CDN. Uses ink-soft tint and is lazy-loaded. */
export function TechIcon({
  slug,
  label,
  color = '5C5240',
  size = 14,
}: {
  slug: string;
  label: string;
  color?: string;
  size?: number;
}) {
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${color}`}
      alt=""
      title={label}
      width={size}
      height={size}
      loading="lazy"
      className="inline-block opacity-80 align-[-2px]"
    />
  );
}
