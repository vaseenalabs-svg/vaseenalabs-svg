import { FragranceProduct, HeroRevealStep, ScentNoteNode } from '../types/fragrance';

export const WHATSAPP_NUMBER = '918141603449';
export const WHATSAPP_DISPLAY = '8141603449';
export const WHATSAPP_FORMATTED = '+91 81416 03449';

export const BOUTIQUE_COORDS = {
  lat: 21.1997665,
  lng: 72.8275564,
  dms: '21°11\'59.2"N 72°49\'39.2"E',
  googleMapsDirectUrl: 'https://maps.google.com/maps?q=21.1997665%2C72.8275564&z=17&hl=en',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=21.1997665,72.8275564&z=17&hl=en&output=embed',
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_INQUIRY = buildWhatsAppUrl(
  'Hello La Royale Parfums, I would like to inquire about your luxury perfume collection.'
);

export const HERO_REVEAL_STEPS: HeroRevealStep[] = [
  {
    number: '01',
    title: 'Botanical Awakening',
    subtitle: 'Crisp green orchard essence, twisted bergamot peel & white blossom crown the crystal flacon.',
    timestampLabel: '00:00 — 00:02',
    progressRange: [0, 0.25],
  },
  {
    number: '02',
    title: 'Floral Heart Immersion',
    subtitle: 'Night-blooming jasmine petals and shaved cedarwood spiral through pure crystal essence.',
    timestampLabel: '00:02 — 00:05',
    progressRange: [0.25, 0.52],
  },
  {
    number: '03',
    title: 'Golden Amber Alchemy',
    subtitle: 'Velvety cream and aged Cambodian oud resin fuse with glowing golden amber droplets.',
    timestampLabel: '00:05 — 00:07',
    progressRange: [0.52, 0.78],
  },
  {
    number: '04',
    title: 'The Royal Signature',
    subtitle: 'Sealed beneath our bespoke walnut-and-gold crown—an unforgettable 24-hour Extrait trail.',
    timestampLabel: '00:07 — 00:09',
    progressRange: [0.78, 1.0],
  },
];

export const SCENT_ANATOMY_NODES: ScentNoteNode[] = [
  {
    id: 1,
    stepCode: '01',
    tierLabel: 'TOP NOTE • L’OUVERTURE',
    title: 'Calabrian Bergamot & Royal Saffron',
    subtitle: 'Citrus-Spice Opening',
    position: 'left-top',
    oilConcentration: 34,
    longevityHours: '6–8 Hours Opening Projection',
    origin: 'Reggio Calabria, Italy & Khorasan',
    extractionMethod: 'Cold-Pressed Rind & Hand-Harvested Stigma Infusion',
    sensoryDescription:
      'A luminous, sun-drenched burst of cold-pressed Calabrian bergamot rind interlaced with crimson threads of Royal Saffron—awakening the senses with aristocratic poise and radiant warmth.',
    accords: ['Calabrian Bergamot', 'Crimson Saffron', 'Green Apple Zest'],
    accentColor: '#D4AF37',
  },
  {
    id: 2,
    stepCode: '02',
    tierLabel: 'HEART NOTE • LE CŒUR',
    title: 'Velvet Damascus Rose & Night Jasmine',
    subtitle: 'Opulent Floral Core',
    position: 'left-bottom',
    oilConcentration: 38,
    longevityHours: '14+ Hours Heart Resonance',
    origin: 'Dades Valley & Grasse, France',
    extractionMethod: 'Copper-Alembic Steam Distillation at Dawn',
    sensoryDescription:
      'Harvested before sunrise when dew preserves every volatile molecule, Velvet Damascus Rose petals unfurl alongside intoxicating Grandiflorum Night Jasmine in a lush, velvety embrace.',
    accords: ['Damascus Rose Absolute', 'Grasse Night Jasmine', 'White Florentine Iris'],
    accentColor: '#C99E48',
  },
  {
    id: 3,
    stepCode: '03',
    tierLabel: 'BASE NOTE • LA PROFONDEUR',
    title: 'Aged Cambodian Oud & Smoked Woods',
    subtitle: 'Resinous Woody Depth',
    position: 'right-top',
    oilConcentration: 42,
    longevityHours: '24+ Hours Skin Tenacity',
    origin: 'Krâvanh Mountains, Cambodia',
    extractionMethod: '20-Year Aged Heartwood Hydro-Distillation',
    sensoryDescription:
      'Dark, hypnotic heartwood aged for two decades yields a balsamic, leathery, and sacred wood signature—anchored by smoked Atlas cedar shavings and warm vetiver roots.',
    accords: ['Aged Cambodian Oud', 'Smoked Atlas Cedar', 'Roasted Tonka Bean'],
    accentColor: '#B69138',
  },
  {
    id: 4,
    stepCode: '04',
    tierLabel: 'ELIXIR NOTE • LE SILLAGE ROYAL',
    title: 'Golden Amber Resin & Madagascar Vanilla',
    subtitle: '24-Hour Royal Sillage',
    position: 'right-bottom',
    oilConcentration: 45,
    longevityHours: '24–36 Hours Extrait Trail',
    origin: 'Sava Region, Madagascar & Andalusia',
    extractionMethod: '6-Month Oak Barrel Tincture Maceration',
    sensoryDescription:
      'Fossilized golden amber tears and cured black Madagascar vanilla pods melt into the skin like liquid gold—leaving a magnetic, unmistakable royal trail from dusk until dawn.',
    accords: ['Golden Amber Resin', 'Cured Bourbon Vanilla', 'Cistus Labdanum'],
    accentColor: '#E5C158',
  },
];

export const HERO_MAIN_IMAGE =
  '/assets/aistudio/WhatsApp_Image_2026-10-29_at_12.35.41_PM__3__83d1f342.jpeg';

export const DEFAULT_FRAGRANCE_CATALOG: FragranceProduct[] = [
  {
    id: 'dior-tobacolor-inspired',
    code: 'NO. 01',
    name: 'Dior Tobacolor',
    fullTitle: 'Dior Tobacolor — Inspired Version',
    category: 'extrait',
    concentrationLabel: 'High Impact Extrait',
    volume: '30ml / 60ml',
    oilPercentage: 40,
    longevity: '24+ Hours',
    sillage: 'High Impact • Long Lasting',
    price: '30ml / 60ml',
    notes: ['Honeyed Tobacco Leaf', 'Spiced Plum & Citrus', 'Warm Oriental Amber'],
    pyramid: {
      top: 'Juicy Plum · Smoked Citrus Zest · Oriental Spices',
      heart: 'Blonde & Dark Tobacco Leaves · Golden White Honey',
      base: 'Warm Amber Resin · Smoked Peach · Resinous Woods',
    },
    description:
      'High-impact, long-lasting La-Royale Parfums creation inspired by Dior Tobacolor. Rich honeyed tobacco leaf wrapped in warm amber and exotic spices, available in 30ml and 60ml gold-capped flacons.',
    preset: 'oud-imperial',
    customImageUrl:
      '/assets/aistudio/WhatsApp_Image_2026-10-29_at_12.35.41_PM__3__83d1f342.jpeg',
    featuredTag: 'High Impact • Long Lasting',
  },
  {
    id: 'dior-sauvage-inspired',
    code: 'NO. 02',
    name: 'Dior Sauvage',
    fullTitle: 'Dior Sauvage — Inspired Version',
    category: 'extrait',
    concentrationLabel: 'High Impact Extrait',
    volume: '30ml / 60ml',
    oilPercentage: 38,
    longevity: '24+ Hours',
    sillage: 'High Impact • Long Lasting',
    price: '30ml / 60ml',
    notes: ['Calabrian Bergamot', 'Sichuan Pepper', 'Noble Ambroxan'],
    pyramid: {
      top: 'Reggio Calabrian Bergamot · Crushed Black & Pink Pepper',
      heart: 'Sichuan Pepper · Lavender · Star Anise & Nutmeg',
      base: 'Noble Ambroxan · Smoked Papua Vanilla · Atlas Cedar',
    },
    description:
      'High-impact, long-lasting La-Royale Parfums creation inspired by Dior Sauvage. Crisp, magnetic Calabrian bergamot and spicy Sichuan pepper anchored by a commanding woody-ambroxan trail in 30ml and 60ml flacons.',
    preset: 'santal-royal',
    customImageUrl:
      '/assets/aistudio/WhatsApp_Image_2026-10-29_at_12.35.41_PM__2__d75bd1df.jpeg',
    featuredTag: 'High Impact • Long Lasting',
  },
  {
    id: 'ajmal-blu-inspired',
    code: 'NO. 03',
    name: 'Ajmal Blu',
    fullTitle: 'Ajmal Blu — Inspired Fragrance',
    category: 'elixir',
    concentrationLabel: 'Strong Projection Extrait',
    volume: '30ml / 60ml',
    oilPercentage: 36,
    longevity: '24+ Hours',
    sillage: 'Strong Projection • Long Lasting',
    price: '30ml / 60ml',
    notes: ['Crisp Bergamot & Melon', 'French Lavender & Lotus', 'Sandalwood & Amber'],
    pyramid: {
      top: 'Icy Bergamot · Crisp Watermelon · Cool Mint Breeze',
      heart: 'French Lavender · Aquatic Lotus Blossom · Jasmine',
      base: 'Mysore Sandalwood · Warm Amber · Clean White Musk',
    },
    description:
      'Strong-projection, long-lasting La-Royale Parfums creation inspired by Ajmal Blu. An invigorating oceanic-aromatic composition blending icy citrus, aquatic lotus, and warm sandalwood in 30ml and 60ml flacons.',
    preset: 'neroli-grasse',
    customImageUrl:
      '/assets/aistudio/WhatsApp_Image_2026-10-29_at_12.35.41_PM_c16e2421.jpeg',
    featuredTag: 'Strong Projection • Long Lasting',
  },
];
