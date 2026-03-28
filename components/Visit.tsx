'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, EnvelopeSimple, Clock } from '@phosphor-icons/react'

export default function Visit() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="visit" ref={ref} className="bg-[#FAF5E9] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24">
          {/* Left: Info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[10px] tracking-[0.3em] uppercase text-[#B8730A] mb-4"
            >
              Find Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-light text-[#3D2B1F] leading-tight tracking-tight mb-12"
            >
              Come as you are.<br />
              <em>Stay for tea.</em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Location */}
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 flex items-center justify-center border border-[#B8730A]/30 mt-0.5">
                  <MapPin size={16} weight="light" className="text-[#B8730A]" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wide uppercase text-[#3D2B1F]/40 mb-1">Location</p>
                  <p className="text-[#3D2B1F] font-light leading-relaxed">
                    No. 6 Soi Sangchai (Saeng Chai)<br />
                    Thonglor, Khlong Toei<br />
                    Bangkok 10110, Thailand
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 flex items-center justify-center border border-[#B8730A]/30 mt-0.5">
                  <Clock size={16} weight="light" className="text-[#B8730A]" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wide uppercase text-[#3D2B1F]/40 mb-2">Hours</p>
                  <div className="space-y-1.5">
                    <div className="flex gap-8">
                      <span className="text-[#3D2B1F]/50 font-light text-sm w-28">Sunday — Thursday</span>
                      <span className="text-[#3D2B1F] font-light text-sm">9:00 AM — 10:30 PM</span>
                    </div>
                    <div className="flex gap-8">
                      <span className="text-[#3D2B1F]/50 font-light text-sm w-28">Friday — Saturday</span>
                      <span className="text-[#3D2B1F] font-light text-sm">9:00 AM — 11:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 flex items-center justify-center border border-[#B8730A]/30 mt-0.5">
                  <Phone size={16} weight="light" className="text-[#B8730A]" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wide uppercase text-[#3D2B1F]/40 mb-1">Telephone</p>
                  <a href="tel:+66640603536" className="text-[#3D2B1F] font-light hover:text-[#B8730A] transition-colors">
                    +66 64 060 3536
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 flex items-center justify-center border border-[#B8730A]/30 mt-0.5">
                  <EnvelopeSimple size={16} weight="light" className="text-[#B8730A]" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wide uppercase text-[#3D2B1F]/40 mb-1">Email</p>
                  <a href="mailto:sawadee@rthgroupmyanmar.com" className="text-[#3D2B1F] font-light hover:text-[#B8730A] transition-colors text-sm">
                    sawadee@rthgroupmyanmar.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Reservation form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-[#3D2B1F] p-10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8730A] mb-2">Reservations</p>
              <h3 className="font-display text-3xl font-light text-[#FAF5E9] mb-8 tracking-tight">
                Request a table
              </h3>

              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#FAF5E9]/40">First Name</label>
                    <input
                      type="text"
                      placeholder="Mei Ling"
                      className="bg-transparent border border-[#FAF5E9]/15 px-4 py-3 text-sm text-[#FAF5E9] placeholder-[#FAF5E9]/20 focus:outline-none focus:border-[#B8730A] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#FAF5E9]/40">Last Name</label>
                    <input
                      type="text"
                      placeholder="Aung"
                      className="bg-transparent border border-[#FAF5E9]/15 px-4 py-3 text-sm text-[#FAF5E9] placeholder-[#FAF5E9]/20 focus:outline-none focus:border-[#B8730A] transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-[#FAF5E9]/40">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-transparent border border-[#FAF5E9]/15 px-4 py-3 text-sm text-[#FAF5E9] placeholder-[#FAF5E9]/20 focus:outline-none focus:border-[#B8730A] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#FAF5E9]/40">Date</label>
                    <input
                      type="date"
                      className="bg-transparent border border-[#FAF5E9]/15 px-4 py-3 text-sm text-[#FAF5E9]/60 focus:outline-none focus:border-[#B8730A] transition-colors [color-scheme:dark]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#FAF5E9]/40">Guests</label>
                    <select
                      className="bg-[#3D2B1F] border border-[#FAF5E9]/15 px-4 py-3 text-sm text-[#FAF5E9]/60 focus:outline-none focus:border-[#B8730A] transition-colors appearance-none"
                    >
                      {[1,2,3,4,5,6,7,8].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-[#FAF5E9]/40">Special Requests</label>
                  <textarea
                    rows={3}
                    placeholder="Dietary requirements, occasions, seating preferences..."
                    className="bg-transparent border border-[#FAF5E9]/15 px-4 py-3 text-sm text-[#FAF5E9] placeholder-[#FAF5E9]/20 focus:outline-none focus:border-[#B8730A] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#B8730A] text-[#FAF5E9] text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#D4940F] transition-colors duration-300 active:scale-[0.99]"
                >
                  Request Reservation
                </button>
              </form>

              <p className="text-[#FAF5E9]/25 text-xs mt-4 text-center font-light">
                We will confirm your reservation within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
