import React from 'react'

const Logo = ({ size = 52, withText = true }) => {
  const s = size
  const stroke = 1.6
  return (
    <div className="flex items-center gap-3 select-none">
      <svg
        width={s}
        height={s}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-[0_10px_26px_rgba(14,165,233,0.35)]"
        aria-hidden
      >
        <defs>
          <linearGradient id="aegean" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="55%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#0b3b7a" />
          </linearGradient>
          <linearGradient id="terracotta" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer shield evoking a stylized labyrinth tile */}
        <rect x="5.5" y="5.5" width="53" height="53" rx="10" stroke="url(#aegean)" strokeWidth={stroke} fill="#021629" />
        <rect x="10" y="10" width="44" height="44" rx="8" stroke="url(#aegean)" strokeWidth={1} opacity="0.35" />

        {/* Ariadne's thread forming an "M" and a boat bow */}
        <path
          d="M12 40 C18 28, 22 28, 26 40 S34 52, 38 40 C42 28, 46 28, 52 40"
          stroke="url(#terracotta)"
          strokeWidth={stroke + 0.2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Bow profile (hard‑chine) inside */}
        <path d="M18 35 L32 22 L46 35 C40 36 24 36 18 35Z" fill="#e2e8f0" opacity="0.9" />

        {/* Waterline */}
        <path d="M14 46 C20 48 24 48 30 46 C36 44 40 44 50 46" stroke="url(#aegean)" strokeWidth={1.6} fill="none" strokeLinecap="round" />

        {/* Soft cyan glow */}
        <circle cx="32" cy="34" r="22" fill="url(#glow)" />
      </svg>
      {withText && (
        <div>
          <div className="text-xl md:text-2xl font-semibold tracking-tight text-white">Mitos 3D & Design</div>
          <div className="text-[11px] md:text-xs uppercase tracking-[0.22em] text-cyan-300/80">Marine CAD • Tooling • Moulds</div>
        </div>
      )}
    </div>
  )
}

export default Logo
