import { SITE_IMAGES } from '@/lib/images'

const sections = [...new Set(SITE_IMAGES.map((i) => i.section))]

export default function ImagesIndex() {
  return (
    <main className="min-h-screen bg-[#1A1410] px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8730A] mb-3">Admin</p>
          <h1 className="font-display text-5xl font-light text-[#FAF5E9] tracking-tight mb-4">
            Image Index
          </h1>
          <p className="text-[#FAF5E9]/40 font-light text-sm leading-relaxed max-w-[60ch]">
            To replace any image with your own photo, open{' '}
            <code className="text-[#B8730A] bg-[#FAF5E9]/5 px-1.5 py-0.5 rounded text-xs">
              lib/images.ts
            </code>{' '}
            and paste your image URL into the <code className="text-[#B8730A] bg-[#FAF5E9]/5 px-1.5 py-0.5 rounded text-xs">url</code> field
            for that key. Leave it empty to keep the placeholder.
          </p>
        </div>

        {sections.map((section) => (
          <div key={section} className="mb-16">
            <h2 className="text-[11px] tracking-[0.25em] uppercase text-[#B8730A] mb-6 pb-3 border-b border-[#FAF5E9]/8">
              {section}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SITE_IMAGES.filter((img) => img.section === section).map((img) => {
                const src = img.url || `https://picsum.photos/seed/${img.seed}/${img.w}/${img.h}`
                const isCustom = !!img.url
                return (
                  <div key={img.key} className="group">
                    {/* Image preview */}
                    <div className="relative aspect-video overflow-hidden bg-[#FAF5E9]/5 mb-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={img.label}
                        className="w-full h-full object-cover"
                      />
                      {/* Custom badge */}
                      {isCustom && (
                        <span className="absolute top-2 right-2 text-[9px] font-medium tracking-wide uppercase px-2 py-1 bg-[#2A4A1E] text-[#FAF5E9]">
                          Custom
                        </span>
                      )}
                      {!isCustom && (
                        <span className="absolute top-2 right-2 text-[9px] font-medium tracking-wide uppercase px-2 py-1 bg-[#B8730A]/80 text-[#FAF5E9]">
                          Placeholder
                        </span>
                      )}
                    </div>

                    {/* Info */}
                    <p className="text-[#FAF5E9] text-sm font-medium mb-1">{img.label}</p>
                    <p className="text-[#FAF5E9]/30 text-xs font-mono mb-2">{img.key}</p>

                    {/* URL display */}
                    <div className="bg-[#FAF5E9]/4 border border-[#FAF5E9]/8 px-3 py-2">
                      <p className="text-[9px] tracking-[0.15em] uppercase text-[#B8730A] mb-1">
                        {isCustom ? 'Custom URL' : 'Placeholder seed'}
                      </p>
                      <p className="text-[#FAF5E9]/50 text-xs font-mono truncate">
                        {isCustom ? img.url : img.seed}
                      </p>
                    </div>

                    {/* Edit hint */}
                    <p className="text-[#FAF5E9]/20 text-[10px] mt-2 font-light">
                      Edit <span className="text-[#B8730A]/60">lib/images.ts</span> → key: <span className="font-mono text-[#FAF5E9]/30">{img.key}</span>
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
