import React from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* background gradient + labyrinth grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00172A] via-[#041E3A] to-[#000B1A]" />
        <div className="absolute inset-0 opacity-[0.08] [mask-image:radial-gradient(circle_at_50%_40%,black,transparent_70%)]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="maze" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M0 24h24v24h24M24 0v24h24" stroke="#4cc9f0" strokeWidth="1" fill="none" opacity="0.35" />
              </pattern>
              <linearGradient id="print" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#0b3b7a" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#maze)" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left copy */}
          <div className="flex-1">
            <Logo size={56} />
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight text-white">
              From Labyrinth to Launch: large‑format 3D printed marine tooling
            </h1>
            <p className="mt-5 text-cyan-100/90 text-lg md:text-xl max-w-2xl">
              Based in Heraklion, Crete, we design speedboats and precision components, then fabricate plug tooling on our Modix Big Meter for production‑ready polyester moulds.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#services" className="px-5 py-3 rounded-xl bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-400/20 transition">Our services</a>
              <a href="#portfolio" className="px-5 py-3 rounded-xl bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition shadow-[0_8px_24px_rgba(245,158,11,0.35)]">See projects</a>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-cyan-100/80">
              <div>
                <div className="text-3xl font-semibold text-white">1 m³</div>
                <div className="text-xs uppercase tracking-wider">Build volume</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-white">±0.2 mm</div>
                <div className="text-xs uppercase tracking-wider">Tolerance</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-white">Marine‑grade</div>
                <div className="text-xs uppercase tracking-wider">Tooling output</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-white">Crete</div>
                <div className="text-xs uppercase tracking-wider">Minoan heritage</div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="flex-1 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-amber-400/10 to-sky-500/10 blur-2xl" />
              <div className="relative rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-6">
                {/* realistic speedboat hull being 3D printed */}
                <svg viewBox="0 0 800 460" className="w-full h-auto">
                  <defs>
                    <linearGradient id="hull" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#67e8f9" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                    <linearGradient id="nozzle" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  {/* build plate */}
                  <rect x="40" y="380" width="720" height="28" rx="14" fill="#06182a" stroke="#164e63" strokeWidth="2" />
                  {/* gantry */}
                  <g stroke="#164e63" strokeWidth="3" opacity="0.9">
                    <rect x="80" y="40" width="640" height="40" rx="8" fill="#0b1e33" />
                    <rect x="90" y="60" width="620" height="6" fill="#164e63" />
                    <rect x="740" y="40" width="12" height="340" fill="#0b1e33" />
                    <rect x="80" y="40" width="12" height="340" fill="#0b1e33" />
                  </g>
                  {/* nozzle and filament */}
                  <g filter="url(#softGlow)">
                    <rect x="440" y="86" width="22" height="30" rx="4" fill="url(#nozzle)" />
                    <path d="M451 116 L451 260" stroke="url(#nozzle)" strokeWidth="4" />
                  </g>
                  {/* hull outline - hard‑chine V hull */}
                  <g fill="none" stroke="url(#hull)" strokeWidth="2">
                    {/* sheer line */}
                    <path d="M100 270 C 200 210, 480 190, 700 240" />
                    {/* chine line */}
                    <path d="M120 320 C 240 270, 520 250, 720 290" />
                    {/* keel and stem */}
                    <path d="M140 340 C 300 320, 560 300, 740 300" />
                    {/* transom hint */}
                    <path d="M120 320 L110 260" opacity="0.4" />
                  </g>
                  {/* layer deposition curves */}
                  <g stroke="#22d3ee" strokeWidth="1" opacity="0.75">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <path key={i} d={`M ${130 - i*6} ${330 - i*4} C ${260 - i*6} ${280 - i*4}, ${540 - i*6} ${260 - i*4}, ${730 - i*6} ${300 - i*4}`} fill="none" />
                    ))}
                  </g>
                  {/* bead at nozzle tip */}
                  <circle cx="451" cy="260" r="5" fill="#f59e0b" />
                </svg>
                <div className="mt-4 text-center text-cyan-100/80 text-sm">Large‑format printing of a hard‑chine speedboat hull plug • Modix‑scale gantry</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* wave footer */}
      <svg className="block w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path fill="#021629" d="M0,32L60,53.3C120,75,240,117,360,117.3C480,117,600,75,720,58.7C840,43,960,53,1080,69.3C1200,85,1320,107,1380,117.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"/>
      </svg>
    </section>
  )
}

export default Hero
