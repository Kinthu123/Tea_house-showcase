'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from '@phosphor-icons/react'
import { getImageSrc } from '@/lib/images'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative min-h-[100dvh] overflow-hidden bg-[#1A1410] flex items-end">
      {/* Parallax background image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 scale-110"
      >
        <img
          src={getImageSrc('hero-bg')}
          alt="Rangoon Tea House interior"
          className="w-full h-full object-cover opacity-50"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1410]/90 via-[#1A1410]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#1A1410] to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-32 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end"
      >
        {/* Left: Main headline */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <div className="relative w-2 h-2">
              <div className="pulse-dot absolute inset-0 rounded-full bg-[#B8730A]" />
              <div className="absolute inset-0 rounded-full bg-[#B8730A]" />
            </div>
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#B8730A]">
              CNN&apos;s World&apos;s Best Tea Houses
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-6xl md:text-8xl font-light text-[#FAF5E9] tracking-tight leading-[0.9] mb-6"
          >
            Chai &amp;
            <br />
            <em className="text-shimmer not-italic">Myanmar</em>
            <br />
            kitchen.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-[#FAF5E9]/60 text-base font-light leading-relaxed max-w-[45ch]"
          >
            Slow-simmered chai and traditional Myanmar food —
            served in a century-old teahouse tradition.
            Thonglor, Bangkok.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center gap-4 mt-10"
          >
            <a
              href="#menu"
              className="text-xs font-medium tracking-[0.15em] uppercase px-7 py-3.5 bg-[#B8730A] text-[#FAF5E9] hover:bg-[#D4940F] transition-colors duration-300 active:scale-[0.98]"
            >
              Explore Menu
            </a>
            <a
              href="#story"
              className="text-xs font-medium tracking-[0.15em] uppercase px-7 py-3.5 border border-[#FAF5E9]/30 text-[#FAF5E9]/70 hover:border-[#FAF5E9]/60 hover:text-[#FAF5E9] transition-all duration-300"
            >
              Our Story
            </a>
          </motion.div>
        </div>

        {/* Right: Details card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:ml-auto w-full lg:max-w-[320px]"
        >
          <div
            className="border border-white/10 p-7"
            style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(12px)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
            }}
          >
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#B8730A] mb-5">Hours & Location</p>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-start">
                <span className="text-[#FAF5E9]/50 font-light">Sun — Thu</span>
                <span className="text-[#FAF5E9] font-light">9:00 — 22:30</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-[#FAF5E9]/50 font-light">Fri — Sat</span>
                <span className="text-[#FAF5E9] font-light">9:00 — 23:00</span>
              </div>
              <div className="border-t border-white/10 pt-3 mt-3">
                <p className="text-[#FAF5E9]/50 font-light text-xs leading-relaxed">
                  6 Soi Sangchai, Thonglor<br />
                  Khlong Toei, Bangkok 10110
                </p>
              </div>
              <div className="border-t border-white/10 pt-3">
                <p className="text-[#FAF5E9]/40 font-light text-xs">+66 64 060 3536</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} weight="light" className="text-[#FAF5E9]/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
