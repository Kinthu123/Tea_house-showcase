import { InstagramLogo, FacebookLogo } from '@phosphor-icons/react/dist/ssr'

export default function Footer() {
  return (
    <footer className="bg-[#1A1410] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-16 pb-16 border-b border-white/8">
          {/* Brand */}
          <div>
            <p className="font-display text-3xl font-light text-[#FAF5E9] tracking-wide mb-1">Rangoon</p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8730A] mb-6">Tea House · Bangkok</p>
            <p className="text-[#FAF5E9]/35 font-light text-sm leading-relaxed max-w-[36ch]">
              A celebration of the century-old Burmese teahouse tradition.
              Thonglor, Bangkok.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#" className="text-[#FAF5E9]/30 hover:text-[#B8730A] transition-colors" aria-label="Instagram">
                <InstagramLogo size={20} weight="light" />
              </a>
              <a href="#" className="text-[#FAF5E9]/30 hover:text-[#B8730A] transition-colors" aria-label="Facebook">
                <FacebookLogo size={20} weight="light" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#FAF5E9]/30 mb-5">Explore</p>
            <ul className="space-y-3">
              {['Story', 'Tea Menu', 'Food Menu', 'Atmosphere', 'The Reading Room'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#FAF5E9]/45 hover:text-[#FAF5E9] transition-colors font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#FAF5E9]/30 mb-5">Visit</p>
            <ul className="space-y-3">
              {['Reservations', 'Private Dining', 'Events', 'Gift Cards', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#FAF5E9]/45 hover:text-[#FAF5E9] transition-colors font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#FAF5E9]/30 mb-5">Contact</p>
            <div className="space-y-3 text-sm text-[#FAF5E9]/45 font-light">
              <p>+66 64 060 3536</p>
              <p className="break-all">sawadee@rthgroupmyanmar.com</p>
              <p className="leading-relaxed">
                6 Soi Sangchai, Thonglor<br />
                Bangkok 10110
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-light tracking-wide text-[#FAF5E9]/20">
          <p>© 2025 Rangoon Tea House Bangkok. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FAF5E9]/40 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FAF5E9]/40 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
