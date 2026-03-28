// Static fallback data — shown when Supabase tables are empty.
// Once you add rows manually in Supabase, this data is replaced automatically.

export type Tea = {
  id: string
  name: string
  price: string
  description: string
  notes: string[]
  image_seed: string
  sort_order: number
}

export type MenuItem = {
  id: string
  category: string
  name: string
  price: string
  description: string
  tag: string | null
  sort_order: number
}

export const FALLBACK_TEAS: Tea[] = [
  {
    id: 'fallback-1',
    name: 'Classic Masala Chai',
    price: '฿115',
    description:
      'Our house chai — Ceylon black tea simmered with cinnamon, cardamom, clove, and ginger, finished with slow-cooked milk skin in the Burmese tradition.',
    notes: ['Spiced', 'Creamy', 'Warming'],
    image_seed: 'ceylon-tea-glass',
    sort_order: 1,
  },
  {
    id: 'fallback-2',
    name: 'Burmese Milk Tea',
    price: '฿110',
    description:
      'Strongly brewed black tea layered with sweetened condensed milk — the street-corner staple of Yangon, served in a tall glass over ice or steamed warm.',
    notes: ['Sweet', 'Rich', 'Bold'],
    image_seed: 'green-tea-ceremony',
    sort_order: 2,
  },
  {
    id: 'fallback-3',
    name: 'Cardamom Chai',
    price: '฿125',
    description:
      'Single-spice chai built around green cardamom pods cracked fresh to order. Lighter than masala, fragrant and clean on the finish.',
    notes: ['Floral', 'Aromatic', 'Delicate'],
    image_seed: 'jasmine-tea-flowers',
    sort_order: 3,
  },
  {
    id: 'fallback-4',
    name: 'Ginger Chai',
    price: '฿120',
    description:
      'Fresh Shan-grown ginger pounded into a paste, steeped hard with Assam tea and raw palm sugar. A warming, unapologetically spicy cup.',
    notes: ['Fiery', 'Earthy', 'Robust'],
    image_seed: 'shan-mountains-mist',
    sort_order: 4,
  },
]

export const FALLBACK_MENU_ITEMS: MenuItem[] = [
  // Signatures
  { id: 'fs-1', category: 'Signatures', name: 'Mohinga', price: '฿220', description: "Myanmar's soul food — rice noodles in a rich catfish and lemongrass broth, topped with crispy fritters, boiled egg, and lime.", tag: 'National Dish', sort_order: 1 },
  { id: 'fs-2', category: 'Signatures', name: 'Tea Leaf Salad (Lahpet Thoke)', price: '฿240', description: 'Fermented tea leaves tossed with fried garlic, roasted nuts, dried shrimp, tomato, and sesame. The pride of every Burmese table.', tag: 'Bestseller', sort_order: 2 },
  { id: 'fs-3', category: 'Signatures', name: 'Shan Noodles', price: '฿250', description: 'Flat rice noodles from the Shan Plateau — braised pork, pickled mustard greens, sesame oil, and a side of clear broth.', tag: null, sort_order: 3 },
  { id: 'fs-4', category: 'Signatures', name: 'Lobster Biryani', price: '฿1,400', description: 'Whole lobster biryani sealed under dough and slow-cooked in the traditional Indian-Burmese method. For the table.', tag: "Chef's Pick", sort_order: 4 },
  // Starters
  { id: 'fst-1', category: 'Starters', name: 'Samosa Soup (Samusa Thoke)', price: '฿180', description: 'Crispy samosas broken into a warm spiced soup with chickpeas, onion, lime juice, and tamarind — a Yangon street classic.', tag: null, sort_order: 1 },
  { id: 'fst-2', category: 'Starters', name: 'Crispy Tofu (Tohu Kyaw)', price: '฿160', description: 'Golden-fried tofu with turmeric, fresh coriander, and a tamarind dipping sauce.', tag: null, sort_order: 2 },
  { id: 'fst-3', category: 'Starters', name: 'Pea Paratha (Peji Parata)', price: '฿180', description: 'Flaky layered flatbread stuffed with spiced split peas and butter — eaten with curry or dipped in chai.', tag: null, sort_order: 3 },
  { id: 'fst-4', category: 'Starters', name: 'Burmese Spring Rolls', price: '฿190', description: 'Hand-rolled crispy shells filled with glass noodles, cabbage, and wood ear mushroom. Served with sweet chilli.', tag: null, sort_order: 4 },
  // Mains
  { id: 'fm-1', category: 'Mains', name: 'Pork Hin (Wet Thar Hin)', price: '฿320', description: 'Traditional Burmese pork belly stew — slow-cooked for hours with turmeric, ginger, garlic, and fish sauce until deeply tender.', tag: null, sort_order: 1 },
  { id: 'fm-2', category: 'Mains', name: 'Chicken Curry (Kyethar Hin)', price: '฿280', description: 'Dry-style Burmese chicken curry with shrimp paste, tomato, and a fragrant oil split — served with jasmine rice.', tag: null, sort_order: 2 },
  { id: 'fm-3', category: 'Mains', name: 'Prawn with Gourd Curry', price: '฿380', description: 'Fresh river prawns simmered with bottle gourd in a light Burmese coconut broth. Mild and aromatic.', tag: null, sort_order: 3 },
  { id: 'fm-4', category: 'Mains', name: 'Shan Rice (Htamin Gyin)', price: '฿240', description: 'Sour Shan-style turmeric rice with slow-cooked pork, fresh tomato salsa, and pickled cabbage.', tag: null, sort_order: 4 },
  // Desserts
  { id: 'fd-1', category: 'Desserts', name: 'Monster Falooda', price: '฿230', description: 'Cendol, egg pudding, milk ice cream, coconut, basil seed — a layered dream best finished with a cup of chai.', tag: 'Fan Favourite', sort_order: 1 },
  { id: 'fd-2', category: 'Desserts', name: 'Semolina Cake (Shwe Yin Aye)', price: '฿180', description: 'Sweet semolina cake topped with coconut flakes and sesame, served warm with condensed milk.', tag: null, sort_order: 2 },
  { id: 'fd-3', category: 'Desserts', name: 'Sticky Rice Mango', price: '฿200', description: 'Fresh Thai mango over pandan coconut sticky rice — a cross-border classic.', tag: null, sort_order: 3 },
  // Cocktails
  { id: 'fc-1', category: 'Cocktails', name: 'Chai Old Fashioned', price: '฿340', description: 'Bourbon infused with masala chai spices, demerara, and a clove-smoked orange peel.', tag: 'House Special', sort_order: 1 },
  { id: 'fc-2', category: 'Cocktails', name: 'Pegu Club', price: '฿310', description: "Classic gin and orange bitters from Rangoon's colonial era. Unchanged since 1920.", tag: 'Historic', sort_order: 2 },
  { id: 'fc-3', category: 'Cocktails', name: 'Lahpet Spritz', price: '฿260', description: 'Fermented tea leaf syrup, prosecco, cucumber, and tonic. Light and aromatic.', tag: null, sort_order: 3 },
  { id: 'fc-4', category: 'Cocktails', name: 'York St. Negroni', price: '฿440', description: "A spiced negroni inspired by Yangon's Jewish quarter and 19th century spice merchants.", tag: null, sort_order: 4 },
]
