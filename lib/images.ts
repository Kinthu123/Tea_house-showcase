/**
 * IMAGES CONFIG — edit all site images here.
 *
 * For each image you can use either:
 *   url:  a direct image URL (your own photo, Cloudinary, etc.)
 *   seed: a picsum.photos placeholder seed (used when url is empty)
 *
 * Format:  url takes priority over seed.
 * Size:    set w/h to control the placeholder dimensions.
 */

export type SiteImage = {
  key: string
  label: string
  section: string
  url: string        // ← put your own image URL here (leave "" to use seed)
  seed: string       // ← picsum seed (fallback placeholder)
  w: number
  h: number
}

export const SITE_IMAGES: SiteImage[] = [
  // ── HERO ─────────────────────────────────────────────────────────────────
  {
    key:     'hero-bg',
    label:   'Hero Background',
    section: 'Hero',
    url:     'https://lh3.googleusercontent.com/p/AF1QipOINn_alRfm-d99Tt8X2aRJ68zpdGDYWITf97I3=w1600-h1067-k-no',
    seed:    'rangoon-teahouse-myanmar',
    w: 1600, h: 1000,
  },

  // ── STORY ─────────────────────────────────────────────────────────────────
  {
    key:     'story-main',
    label:   'Story — Main Portrait',
    section: 'Story',
    url:     'https://images.unsplash.com/photo-1749871615234-98bff62995ba?w=800&q=85',
    seed:    'myanmar-teahouse-interior',
    w: 800, h: 1000,
  },

  // ── TEA (CHAI) ───────────────────────────────────────────────────────────
  {
    key:     'tea-ceylon-tea-glass',
    label:   'Chai — Classic Masala',
    section: 'Tea',
    url:     'https://images.unsplash.com/photo-1531876841334-5f48d532110b?w=640&q=85',
    seed:    'masala-chai-spices',
    w: 640, h: 360,
  },
  {
    key:     'tea-green-tea-ceremony',
    label:   'Chai — Burmese Milk Tea',
    section: 'Tea',
    url:     'https://images.unsplash.com/photo-1680633479678-72880cb9a29f?w=640&q=85',
    seed:    'burmese-milk-tea',
    w: 640, h: 360,
  },
  {
    key:     'tea-jasmine-tea-flowers',
    label:   'Chai — Cardamom Chai',
    section: 'Tea',
    url:     'https://images.unsplash.com/photo-1593487806527-40dcc19864bd?w=640&q=85',
    seed:    'cardamom-chai',
    w: 640, h: 360,
  },
  {
    key:     'tea-shan-mountains-mist',
    label:   'Chai — Ginger Chai',
    section: 'Tea',
    url:     'https://images.unsplash.com/photo-1742106856193-5cc3424ac450?w=640&q=85',
    seed:    'ginger-chai-steam',
    w: 640, h: 360,
  },

  // ── ATMOSPHERE GALLERY ────────────────────────────────────────────────────
  {
    key:     'atm-lampshades',
    label:   'Atmosphere — Antique Lampshades',
    section: 'Atmosphere',
    url:     'https://images.unsplash.com/photo-1514527680268-3db26b911869?w=600&q=85',
    seed:    'burmese-antique-lampshades-green',
    w: 600, h: 800,
  },
  {
    key:     'atm-teak',
    label:   'Atmosphere — Teak Furnishings',
    section: 'Atmosphere',
    url:     'https://images.unsplash.com/photo-1763392199003-27cee33bae31?w=600&q=85',
    seed:    'teak-wood-dining-table-vintage',
    w: 600, h: 800,
  },
  {
    key:     'atm-tiles',
    label:   'Atmosphere — Vintage Floor Tiles',
    section: 'Atmosphere',
    url:     'https://images.unsplash.com/photo-1752824250580-163f1532b1d0?w=600&q=85',
    seed:    'vintage-floor-tiles-pattern-bangkok',
    w: 600, h: 800,
  },
  {
    key:     'atm-portraits',
    label:   'Atmosphere — Myanmar Portraits',
    section: 'Atmosphere',
    url:     'https://images.unsplash.com/photo-1743609457537-414f893162c3?w=600&q=85',
    seed:    'myanmar-portraits-bar-restaurant',
    w: 600, h: 800,
  },

  // ── READING ROOM ─────────────────────────────────────────────────────────
  {
    key:     'reading-room-bg',
    label:   'Reading Room — Background',
    section: 'Atmosphere',
    url:     'https://images.unsplash.com/photo-1752041963432-7ad8fc573f8e?w=1400&q=85',
    seed:    'reading-room-cocktail-bar-dark',
    w: 1400, h: 500,
  },
]

/** Returns the resolved src URL for a given image key */
export function getImageSrc(key: string, fallbackSeed?: string, w = 640, h = 360): string {
  const img = SITE_IMAGES.find((i) => i.key === key)
  if (img) {
    if (img.url) return img.url
    return `https://picsum.photos/seed/${img.seed}/${img.w}/${img.h}`
  }
  // No config entry — use the fallback seed directly (for dynamic Supabase teas)
  if (fallbackSeed) return `https://picsum.photos/seed/${fallbackSeed}/${w}/${h}`
  return ''
}
