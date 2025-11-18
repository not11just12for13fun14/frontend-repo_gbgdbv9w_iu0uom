import React from 'react'

const Logo = ({ size = 48, withText = true }) => {
  const stroke = 1.5
  const s = size
  return (
    <div className="flex items-center gap-3 select-none">
      <svg
        width={s}
        height={s}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_8px_24px_rgba(14,165,233,0.35)]"
      >
        {/* Aegean gradient */}
        <defs>
          <linearGradient id="aegean" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#0b3b7a" />
          </linearGradient>
          <linearGradient id="terracotta" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>

        {/* Outer labyrinth ring */}
        <circle cx="32" cy="32" r="28" stroke="url(#aegean)" strokeWidth={stroke} opacity="0.9" />
        {/* Labyrinth paths */}
        <path d="M12 32h10c6 0 6-10 12-10s6 10 12 10h6" stroke="url(#aegean)" strokeWidth={stroke} opacity="0.7" />
        <path d="M20 44h8c6 0 6-8 12-8s6 8 12 8" stroke="url(#aegean)" strokeWidth={stroke} opacity="0.5" />

        {/* Thread of Ariadne winding through */}
        <path d="M8 20c6 10 14 12 24 12s16 6 24 16" stroke="url(#terracotta)" strokeWidth={stroke + 0.5} strokeLinecap="round" fill="none" />

        {/* Bow of a boat silhouette */}
        <path d="M28 38l4-10 4 10c-2 1-6 1-8 0z" fill="#e2e8f0" opacity="0.8" />

        {/* Waves */}
        <path d="M14 50c3 2 5 2 8 0s5-2 8 0 5 2 8 0 5-2 8 0" stroke="url(#aegean)" strokeWidth={stroke} fill="none" strokeLinecap="round" />
      </svg>
      {withText && (
        <div>
          <div className="text-xl md:text-2xl font-semibold tracking-tight text-white">Mitos 3D & Design</div>
          <div className="text-[11px] md:text-xs uppercase tracking-[0.22em] text-cyan-300/80">Labyrinth-grade Marine Fabrication</div>
        </div>
      )}
    </div>
  )
}

export default Logo
