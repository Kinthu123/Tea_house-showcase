'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'

const links = [
  { label: 'Story', href: '#story' },
  { label: 'Tea', href: '#tea' },
  { label: 'Menu', href: '#menu' },
  { label: 'Atmosphere', href: '#atmosphere' },
  { label: 'Visit', href: '#visit' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#FAF5E9]/90 backdrop-blur-md border-b border-[#3D2B1F]/8 shadow-[0_1px_20px_rgba(61,43,31,0.06)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group flex flex-col leading-none">
            <span className={`font-display text-xl font-medium tracking-wide transition-colors duration-500 group-hover:text-[#B8730A] ${scrolled ? 'text-[#3D2B1F]' : 'text-[#FAF5E9]'}`}>
              Rangoon
            </span>
            <span className="text-[10px] font-light tracking-[0.3em] text-[#B8730A] uppercase">
              Tea House · Bangkok
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-light tracking-wide hover:text-[#B8730A] transition-colors duration-300 relative group ${scrolled ? 'text-[#3D2B1F]/70' : 'text-[#FAF5E9]/80'}`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#B8730A] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Reserve CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#visit"
              className={`text-xs font-medium tracking-[0.15em] uppercase px-5 py-2.5 border transition-all duration-300 active:scale-[0.98] ${
                scrolled
                  ? 'border-[#B8730A] text-[#B8730A] hover:bg-[#B8730A] hover:text-[#FAF5E9]'
                  : 'border-[#FAF5E9]/60 text-[#FAF5E9] hover:border-[#B8730A] hover:text-[#B8730A]'
              }`}
            >
              Reserve
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-1 transition-colors duration-300 ${scrolled ? 'text-[#3D2B1F]' : 'text-[#FAF5E9]'}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} weight="light" /> : <List size={22} weight="light" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FAF5E9] pt-24 px-8 md:hidden flex flex-col"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="font-display text-4xl font-light text-[#3D2B1F] py-4 border-b border-[#3D2B1F]/10 hover:text-[#B8730A] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="#visit"
              onClick={() => setOpen(false)}
              className="mt-8 text-center text-sm font-medium tracking-[0.15em] uppercase px-5 py-3 bg-[#B8730A] text-[#FAF5E9]"
            >
              Reserve a Table
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
