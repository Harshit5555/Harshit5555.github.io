export default function MobileFallback() {
  return (
    <div
      className="w-full h-full flex items-center justify-center select-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 600 240"
        className="w-[90%] max-w-[520px] drift-anim"
        role="img"
        aria-label="build"
      >
        <text
          x="50%"
          y="58%"
          textAnchor="middle"
          fontFamily="Fraunces, Georgia, serif"
          fontWeight="300"
          fontStyle="italic"
          fontSize="180"
          fill="#1A1A1A"
          letterSpacing="-4"
        >
          build
        </text>
      </svg>
    </div>
  );
}
