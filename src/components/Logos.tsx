import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 28, ...rest }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 32 32',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
    ...rest,
  };
}

/* University of Wisconsin – Madison: stylized cardinal-red W */
export function UWLogo(props: IconProps) {
  return (
    <svg {...base(props)} viewBox="0 0 32 32">
      <rect width="32" height="32" rx="2" fill="#C5050C" />
      <path
        d="M4.6 8h4.2l1.9 11 2.7-11h3.2l2.7 11 1.9-11h4.2l-3.6 16h-4.2L15 13.5 12.4 24H8.2L4.6 8z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/* Strudel — early-stage AI startup. Custom monogram. */
export function StrudelLogo(props: IconProps) {
  return (
    <svg {...base(props)} viewBox="0 0 32 32">
      <rect width="32" height="32" rx="2" fill="#1A1A1A" />
      <path
        d="M11 10c0-1.7 1.3-3 3-3h7v3h-7v3h4c2.2 0 4 1.8 4 4v2c0 2.2-1.8 4-4 4h-7v-3h7v-3h-4c-2.2 0-4-1.8-4-4v-3z"
        fill="#F4E6CB"
      />
    </svg>
  );
}

/* OpenAI — six-fold knot, simplified */
export function OpenAILogo(props: IconProps) {
  return (
    <svg {...base(props)} viewBox="0 0 32 32">
      <rect width="32" height="32" rx="2" fill="#1A1A1A" />
      <path
        d="M22.5 13.4a4.6 4.6 0 0 0-.4-3.8 4.7 4.7 0 0 0-5-2.2 4.6 4.6 0 0 0-3.5-1.6 4.7 4.7 0 0 0-4.5 3.3 4.6 4.6 0 0 0-3.1 2.3 4.7 4.7 0 0 0 .6 5.4 4.6 4.6 0 0 0 .4 3.8 4.7 4.7 0 0 0 5 2.2 4.6 4.6 0 0 0 3.5 1.6 4.7 4.7 0 0 0 4.5-3.3 4.6 4.6 0 0 0 3.1-2.3 4.7 4.7 0 0 0-.6-5.4zM16.6 23.4a3.5 3.5 0 0 1-2.2-.8l.1-.1 3.7-2.1c.2-.1.3-.3.3-.5v-5.2l1.6.9v4.3c0 1.9-1.6 3.5-3.5 3.5zm-7.5-3.2a3.4 3.4 0 0 1-.4-2.3l.1.1 3.7 2.1c.2.1.4.1.6 0l4.5-2.6v1.8l-3.8 2.2a3.5 3.5 0 0 1-4.7-1.3zm-1-8.3a3.5 3.5 0 0 1 1.8-1.5v4.4c0 .2.1.4.3.5l4.5 2.6-1.6.9-3.8-2.2a3.5 3.5 0 0 1-1.2-4.7zm12.7 3l-4.5-2.6 1.6-.9 3.8 2.2c1.7 1 2.3 3.1 1.3 4.8a3.5 3.5 0 0 1-1.8 1.5v-4.4c0-.2-.1-.4-.4-.6zm1.6-2.4l-.1-.1-3.7-2.1a.6.6 0 0 0-.6 0l-4.5 2.6v-1.8l3.8-2.2c1.7-1 3.8-.4 4.7 1.3.5.7.6 1.6.4 2.3zM12 14.2l-1.6-.9V9c0-1.9 1.6-3.5 3.5-3.5a3.5 3.5 0 0 1 2.2.8l-.1.1-3.7 2.1a.6.6 0 0 0-.3.5v5.2zm.9-1.9L14.9 11l2 1.2v2.4l-2 1.2-2-1.2v-2.4z"
        fill="#F4E6CB"
      />
    </svg>
  );
}

/* Deloitte — wordmark dot in green */
export function DeloitteLogo(props: IconProps) {
  return (
    <svg {...base(props)} viewBox="0 0 32 32">
      <rect width="32" height="32" rx="2" fill="#1A1A1A" />
      <text
        x="3"
        y="22"
        fontFamily="Inter, sans-serif"
        fontSize="11"
        fontWeight="700"
        fill="#F4E6CB"
        letterSpacing="-0.3"
      >
        Dlt
      </text>
      <circle cx="26" cy="22" r="2.5" fill="#86BC25" />
    </svg>
  );
}

/* Wisconsin Union — WU monogram */
export function WisconsinUnionLogo(props: IconProps) {
  return (
    <svg {...base(props)} viewBox="0 0 32 32">
      <rect width="32" height="32" rx="2" fill="#1A1A1A" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="14"
        fontStyle="italic"
        fill="#F4E6CB"
      >
        WU
      </text>
    </svg>
  );
}

/* WISCERS — small W mark */
export function WiscersLogo(props: IconProps) {
  return (
    <svg {...base(props)} viewBox="0 0 32 32">
      <rect width="32" height="32" rx="2" fill="#C5050C" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="15"
        fontWeight="700"
        fill="#FFFFFF"
      >
        W
      </text>
    </svg>
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
