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
                {/* boat bow wireframe */}
                <svg viewBox="0 0 600 400" className="w-full h-auto">
                  <defs>
                    <linearGradient id="mesh" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#67e8f9" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                  <g fill="none" stroke="url(#mesh)" strokeWidth="1">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <path key={i} d={`M ${40+i*36} 360 Q 300 ${60 + i*16} 560 360`} opacity={(i+5)/28} />
                    ))}
                    {Array.from({ length: 9 }).map((_, i) => (
                      <path key={`v-${i}`} d={`M 300 40 C ${160+i*20} 120, ${160+i*20} 240, 300 320`} opacity={(i+6)/22} />
                    ))}
                  </g>
                  <g stroke="#f59e0b" strokeWidth="3" opacity="0.9">
                    <path d="M60 340 Q300 120 540 340" />
                  </g>
                </svg>
                <div className="mt-4 text-center text-cyan-100/80 text-sm">Parametric hull lines • Toolpath‑ready geometry</div>
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
