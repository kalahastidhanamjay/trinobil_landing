/**
 * Trinobil logo: the receipt mark and the "trinobil" wordmark (Sora 700).
 * `onLight` uses the navy app-icon tile, since the white receipt would vanish on white.
 */
export function Logo({ size = 28, onLight = false, className = '' }: { size?: number; onLight?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`} style={{ gap: size * 0.32 }}>
      <img src={onLight ? '/favicon.svg' : '/logo-mark.svg'} alt="" style={{ height: size, width: onLight ? size : (size * 96) / 112 }} />
      <span
        style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 700,
          fontSize: size * 0.92,
          lineHeight: 1,
          letterSpacing: '-0.01em',
          color: onLight ? '#0F2A43' : '#FFFFFF',
        }}
      >
        trinobil
      </span>
    </span>
  );
}
