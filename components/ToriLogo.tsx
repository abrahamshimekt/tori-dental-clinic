interface ToriLogoProps {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * Tori Speciality Dental Clinic logo.
 * Matches the brand identity: rectangular frame, tooth/implant icon,
 * flame element above, and bold "D" letterform on the right.
 */
export default function ToriLogo({
  size = 44,
  color = "currentColor",
  className = "",
}: ToriLogoProps) {
  const h = Math.round(size * 0.84);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 58 49"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Tori Dental Logo"
    >
      {/* ── Outer frame ── */}
      <rect x="1.5" y="11" width="35" height="36" rx="2.5" strokeWidth="3" />

      {/* ── Flame above frame (centered at x=19) ── */}
      {/* Left flame */}
      <path d="M13 11 C12.5 8 14 6 15 4 C16 6 17 8 16.5 11" strokeWidth="2.2" />
      {/* Center flame — tallest */}
      <path d="M16.5 11 C15.5 7 18 4 19 1.5 C20 4 22.5 7 21.5 11" strokeWidth="2.2" />
      {/* Right flame */}
      <path d="M21.5 11 C21 8 22.5 6 23 4 C24 6 25.5 8 25 11" strokeWidth="2.2" />

      {/* ── Tooth / implant inside frame ── */}
      {/* Crown with 3 cusps */}
      <path
        d="M8 25 L8 21 Q11.5 17.5 14.5 21 Q17 18 19 21 Q21 18 23.5 21 Q26.5 17.5 30 21 L30 25 Q19 30 8 25 Z"
        strokeWidth="2.2"
      />
      {/* Implant post */}
      <rect x="17" y="25" width="4" height="7" rx="1" strokeWidth="2" />
      {/* Roots */}
      <line x1="18" y1="32" x2="14" y2="44" strokeWidth="2.2" />
      <line x1="19" y1="32" x2="19" y2="45.5" strokeWidth="2.2" />
      <line x1="20" y1="32" x2="24" y2="44" strokeWidth="2.2" />

      {/* ── Bold "D" letterform ── */}
      <path
        d="M40 11 L40 47 M40 11 C52 11 57 18 57 29 C57 40 52 47 40 47"
        strokeWidth="3.5"
      />
    </svg>
  );
}
