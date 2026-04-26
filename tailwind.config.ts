import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F4F1EA',
        ink: '#1A1A1A',
        'ink-soft': '#5C5C5C',
        rule: '#E2DDD2',
        accent: '#FF5B2E',
        whisper: '#FAF8F3',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightish: '-0.015em',
        widish: '0.08em',
      },
      maxWidth: {
        prose38: '38ch',
        prose60: '60ch',
      },
    },
  },
  plugins: [],
} satisfies Config;
