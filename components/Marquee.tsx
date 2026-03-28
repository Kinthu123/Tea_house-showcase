export default function Marquee() {
  const items = [
    "Slow-Simmered Chai · 4 Signature Blends",
    "Traditional Myanmar Street Food · Bangkok",
    "World's Best Tea Houses — CNN",
    "Mohinga · Biryani · Tea Leaf Salad",
    "The Reading Room Cocktail Lounge",
    "Thonglor · Open Daily from 9 AM",
  ]

  return (
    <div className="overflow-hidden bg-[#B8730A] py-3.5">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8 pr-8">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#FAF5E9] whitespace-nowrap">
              {item}
            </span>
            <span className="text-[#FAF5E9]/40 text-lg font-thin">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
