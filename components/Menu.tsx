'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import type { MenuItem } from '@/lib/fallback-data'

const CATEGORIES = ['Signatures', 'Starters', 'Mains', 'Desserts', 'Cocktails']

export default function Menu({ items }: { items: MenuItem[] }) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState('Signatures')

  // Group by category
  const byCategory = CATEGORIES.reduce<Record<string, MenuItem[]>>((acc, cat) => {
    acc[cat] = items.filter((item) => item.category === cat)
    return acc
  }, {})

  // Only show categories that have items
  const availableCategories = CATEGORIES.filter((cat) => byCategory[cat].length > 0)

  return (
    <section id="menu" ref={ref} className="bg-[#FAF5E9] py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[10px] tracking-[0.3em] uppercase text-[#B8730A] mb-4"
            >
              The Menu
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-light text-[#3D2B1F] leading-tight tracking-tight"
            >
              {items.length} dishes.<br />One kitchen.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:pt-16 text-[#3D2B1F]/55 font-light leading-relaxed self-end"
          >
            Burmese cuisine with Indian and Shan influences — thoughtfully prepared,
            beautifully presented, and packed with depth.
          </motion.p>
        </div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-0 mb-12 border-b border-[#3D2B1F]/10 overflow-x-auto"
        >
          {availableCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-3 text-xs font-medium tracking-wide uppercase transition-all duration-300 whitespace-nowrap ${
                active === cat
                  ? 'text-[#B8730A] border-b-2 border-[#B8730A] -mb-px'
                  : 'text-[#3D2B1F]/40 hover:text-[#3D2B1F]/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Dishes */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-0"
          >
            {(byCategory[active] ?? []).map((dish, i) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="py-7 px-2 border-b border-[#3D2B1F]/8 hover:bg-[#3D2B1F]/2 transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-medium text-[#3D2B1F] text-base">{dish.name}</h3>
                    {dish.tag && (
                      <span className="text-[9px] font-medium tracking-wide uppercase px-2 py-0.5 bg-[#B8730A]/10 text-[#B8730A] rounded-sm">
                        {dish.tag}
                      </span>
                    )}
                  </div>
                  <span className="font-display text-lg text-[#3D2B1F]/60 font-light shrink-0">
                    {dish.price}
                  </span>
                </div>
                <p className="text-sm text-[#3D2B1F]/50 font-light leading-relaxed">
                  {dish.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="#visit"
            className="inline-block text-xs font-medium tracking-[0.15em] uppercase px-8 py-3.5 border border-[#B8730A] text-[#B8730A] hover:bg-[#B8730A] hover:text-[#FAF5E9] transition-all duration-300 active:scale-[0.98]"
          >
            Reserve & Dine
          </a>
        </motion.div>
      </div>
    </section>
  )
}
