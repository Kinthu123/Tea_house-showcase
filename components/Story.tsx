'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { getImageSrc } from '@/lib/images'

export default function Story() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="story" ref={ref} className="bg-[#FAF5E9] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Asymmetric layout: text left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[10px] tracking-[0.3em] uppercase text-[#B8730A] mb-6"
            >
              Our Story
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-6xl font-light text-[#3D2B1F] leading-[1.05] tracking-tight mb-8"
            >
              Born in Yangon,<br />
              <em>lived in Bangkok.</em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 text-[#3D2B1F]/65 font-light leading-relaxed text-base max-w-[52ch]"
            >
              <p>
                Rangoon Tea House began as a celebration of the Burmese teahouse —
                a century-old institution at the heart of community life in Yangon.
                Warm, social, and built on the ritual of sharing.
              </p>
              <p>
                In Bangkok&apos;s Thonglor neighbourhood, husband-and-wife team
                Htet Myet Oo and Isabella Sway Tin brought that spirit to life.
                Teak furnishings sourced on personal trips between Thailand and Myanmar.
                Antique lampshades and vintage floor tiles. Portraits of everyday
                Myanmar citizens above the bar.
              </p>
              <p>
                Our kitchen and front-of-house team comprises refugees from Myanmar,
                each carrying a piece of home into every dish and every cup.
              </p>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex gap-8 mt-12 pt-8 border-t border-[#3D2B1F]/10"
            >
              {[
                { label: "CNN Best Tea Houses", sub: "World's List" },
                { label: "50 Best Essence", sub: "of Asia Award" },
                { label: "4.7 / 5", sub: "TripAdvisor Rating" },
              ].map((award) => (
                <div key={award.label}>
                  <p className="text-sm font-medium text-[#3D2B1F]">{award.label}</p>
                  <p className="text-xs text-[#B8730A] font-light mt-0.5">{award.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={getImageSrc('story-main')}
                alt="Rangoon Tea House interior with teak furnishings"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/20 to-transparent" />
            </div>

            {/* Floating accent card */}
            <div
              className="absolute -bottom-8 -left-8 hidden lg:block"
              style={{ background: '#2A4A1E' }}
            >
              <div className="p-6 w-52">
                <p className="font-display text-3xl text-[#FAF5E9] font-light leading-tight">
                  Since<br />2018
                </p>
                <p className="text-xs text-[#FAF5E9]/50 mt-2 font-light">
                  Yangon, Myanmar
                </p>
                <div className="w-8 h-px bg-[#B8730A] mt-3" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
