'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Tea } from '@/lib/fallback-data'
import { getImageSrc } from '@/lib/images'
import DishCarousel from '@/components/DishCarousel'

export default function Tea({ teas }: { teas: Tea[] }) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="tea" ref={ref} className="bg-[#2A4A1E] py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[10px] tracking-[0.3em] uppercase text-[#B8730A] mb-4"
            >
              The Tea
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl font-light text-[#FAF5E9] leading-tight tracking-tight"
            >
              {teas.length} ways<br />to chai.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pt-16 text-[#FAF5E9]/50 font-light leading-relaxed max-w-[55ch] self-end"
          >
            Chai is our heart. Each cup is simmered low and slow — whole spices,
            fresh ginger, black tea from Assam and the Shan hills — finished
            the Burmese way with warm, slow-cooked milk.
          </motion.p>
        </div>

        {/* Tea cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#FAF5E9]/8">
          {teas.map((tea, i) => (
            <motion.div
              key={tea.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[#2A4A1E] p-8 hover:bg-[#3D6B2C]/30 transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-2xl font-light text-[#FAF5E9] tracking-tight">
                    {tea.name}
                  </h3>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {tea.notes.map((note) => (
                      <span key={note} className="text-[10px] tracking-wide text-[#B8730A] uppercase">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="font-display text-xl text-[#FAF5E9]/40 font-light shrink-0">
                  {tea.price}
                </span>
              </div>

              <div className="aspect-[16/9] overflow-hidden mb-6">
                <img
                  src={getImageSrc(`tea-${tea.image_seed}`, tea.image_seed, 640, 360)}
                  alt={tea.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <p className="text-[#FAF5E9]/55 font-light text-sm leading-relaxed">
                {tea.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dish carousel */}
        <DishCarousel />
      </div>
    </section>
  )
}
