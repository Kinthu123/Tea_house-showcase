'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { getImageSrc } from '@/lib/images'

const gallery = [
  { key: "atm-lampshades", label: "Antique Mint Lampshades", aspect: "aspect-[3/4]", offset: "mt-0" },
  { key: "atm-teak",       label: "Refurbished Teak Furnishings", aspect: "aspect-[3/4]", offset: "mt-12" },
  { key: "atm-tiles",      label: "Vintage Patterned Tiles", aspect: "aspect-[4/3]", offset: "mt-0" },
  { key: "atm-portraits",  label: "Portraits of Myanmar Citizens", aspect: "aspect-[3/4]", offset: "mt-8" },
]

export default function Atmosphere() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const bannerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: bannerRef, offset: ['start end', 'end start'] })
  const bannerY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="atmosphere" ref={ref} className="bg-[#3D2B1F] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[10px] tracking-[0.3em] uppercase text-[#B8730A] mb-4"
            >
              The Space
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-light text-[#FAF5E9] leading-tight tracking-tight"
            >
              A room with<br />
              <em className="text-[#B8730A]">memory.</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-[#FAF5E9]/45 font-light leading-relaxed max-w-[45ch] lg:text-right"
          >
            Teak reclaimed from temples. Tiles carried from Mandalay. Every surface tells
            a story. Including the faces on the walls.
          </motion.p>
        </div>

        {/* Asymmetric masonry gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {gallery.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`group overflow-hidden ${item.aspect} ${item.offset}`}
            >
              <img
                src={getImageSrc(item.key)}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>

        {/* The Reading Room banner */}
        <div ref={bannerRef} className="mt-24 overflow-hidden">
          <motion.div
            style={{ y: bannerY }}
            className="relative min-h-[360px] flex items-center"
          >
            <img
              src={getImageSrc('reading-room-bg')}
              alt="The Reading Room"
              className="absolute inset-0 w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-[#1A1410]/75" />
            <div className="relative z-10 px-12 py-16">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8730A] mb-4">Upstairs</p>
              <h3 className="font-display text-4xl md:text-5xl font-light text-[#FAF5E9] mb-4 tracking-tight">
                The Reading Room
              </h3>
              <p className="text-[#FAF5E9]/55 font-light max-w-[42ch] leading-relaxed mb-6">
                Our cocktail lounge upstairs. Rare spirits, handcrafted drinks,
                and the quiet hum of good conversation. Open until 11pm.
              </p>
              <a
                href="#visit"
                className="inline-block text-xs font-medium tracking-[0.15em] uppercase px-6 py-3 border border-[#FAF5E9]/30 text-[#FAF5E9]/70 hover:border-[#B8730A] hover:text-[#B8730A] transition-all duration-300"
              >
                Book a Seat
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
