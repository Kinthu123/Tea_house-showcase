'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const DISHES = [
  {
    name:  'Mohinga',
    price: '฿220',
    tag:   'National Dish',
    img:   'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=85',
  },
  {
    name:  'Tea Leaf Salad',
    price: '฿240',
    tag:   'Bestseller',
    img:   'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=85',
  },
  {
    name:  'Samosa Soup',
    price: '฿180',
    tag:   null,
    img:   'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=85',
  },
  {
    name:  'Pea Paratha',
    price: '฿180',
    tag:   null,
    img:   'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=85',
  },
]

export default function DishCarousel() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="mt-24 border-t border-[#FAF5E9]/10 pt-16">
      <div className="mb-10">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8730A] mb-3">
          Also on the table
        </p>
        <h3 className="font-display text-3xl font-light text-[#FAF5E9] tracking-tight">
          Traditional Myanmar kitchen.
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#FAF5E9]/8">
        {DISHES.map((dish, i) => (
          <motion.div
            key={dish.name}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group bg-[#2A4A1E] overflow-hidden"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-5">
              {dish.tag && (
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#B8730A] font-medium">
                  {dish.tag}
                </span>
              )}
              <p className="font-display text-lg font-light text-[#FAF5E9] tracking-tight mt-1">
                {dish.name}
              </p>
              <p className="text-[#FAF5E9]/35 font-light text-sm mt-0.5">{dish.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
