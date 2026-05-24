export type ShopCategory = 'coffee' | 'tiles' | 'carpets';

export interface ShopItem {
  id: string;
  category: ShopCategory;
  title: { tr: string; en: string };
  description: { tr: string; en: string };
  price: string;
  badge: { tr: string; en: string } | null;
  image: string;
  externalUrl: string;
}

export const shopItems: ShopItem[] = [
  // ── Coffee ───────────────────────────────────────────────────────────────
  {
    id: 'espresso-blend',
    category: 'coffee',
    title: { tr: 'Espresso Harman 250g', en: 'Espresso Blend 250g' },
    description: {
      tr: 'İmza harmanımız. Yoğun aroma, kadifemsi doku.',
      en: 'Our signature blend. Rich aroma, velvety texture.',
    },
    price: '₺180',
    badge: { tr: 'Çok Satan', en: 'Best Seller' },
    image: '/images/shop/espresso-blend.jpg',
    externalUrl: '#',
  },
  {
    id: 'turkish-coffee',
    category: 'coffee',
    title: { tr: 'Türk Kahvesi 200g', en: 'Turkish Coffee 200g' },
    description: {
      tr: 'Geleneksel yöntemlerle öğütülmüş ince çekim Türk kahvesi.',
      en: 'Finely ground Turkish coffee, prepared with traditional methods.',
    },
    price: '₺150',
    badge: null,
    image: '/images/shop/turkish-coffee.jpg',
    externalUrl: '#',
  },
  {
    id: 'filter-selection',
    category: 'coffee',
    title: { tr: 'Filtre Kahve Seçkisi', en: 'Filter Coffee Selection' },
    description: {
      tr: 'Farklı menşeilerden tek orijinli filtre kahveler.',
      en: 'Single-origin filter coffees from different regions.',
    },
    price: '₺200',
    badge: { tr: 'Aylık Değişir', en: 'Monthly Rotation' },
    image: '/images/shop/filter-coffee.jpg',
    externalUrl: '#',
  },
  {
    id: 'ceramic-mug',
    category: 'coffee',
    title: { tr: 'CiniliCafe Kupası', en: 'CiniliCafe Mug' },
    description: {
      tr: 'El boyaması çini desenli 300ml seramik kupa.',
      en: 'Hand-painted çini-patterned 300ml ceramic mug.',
    },
    price: '₺320',
    badge: { tr: 'El Yapımı', en: 'Handmade' },
    image: '/images/shop/mug.jpg',
    externalUrl: '#',
  },
  {
    id: 'tea-collection',
    category: 'coffee',
    title: { tr: 'Çay Koleksiyonu', en: 'Tea Collection' },
    description: {
      tr: 'Özel harman çay, ada çayı ve meyve çayı ikili seti.',
      en: 'Specialty blend tea, sage tea and fruit infusion duo set.',
    },
    price: '₺120',
    badge: null,
    image: '/images/shop/tea.jpg',
    externalUrl: '#',
  },
  {
    id: 'gift-set',
    category: 'coffee',
    title: { tr: 'Hediye Seti', en: 'Gift Set' },
    description: {
      tr: 'Espresso harman, kupa ve kahve ölçeği hediye kutusu.',
      en: 'Espresso blend, mug and coffee scoop gift box.',
    },
    price: '₺580',
    badge: { tr: 'Hediye', en: 'Gift' },
    image: '/images/shop/gift-set.jpg',
    externalUrl: '#',
  },

  // ── Tiles / Çini ─────────────────────────────────────────────────────────
  {
    id: 'iznik-plate',
    category: 'tiles',
    title: { tr: 'İznik Çini Tabak', en: 'Iznik Ceramic Plate' },
    description: {
      tr: '20 cm el boyaması geleneksel İznik desenli dekoratif çini tabak.',
      en: '20 cm hand-painted decorative plate with traditional Iznik patterns.',
    },
    price: '₺480',
    badge: { tr: 'El Yapımı', en: 'Handmade' },
    image: '/images/shop/iznik-plate.jpg',
    externalUrl: '#',
  },
  {
    id: 'ottoman-tile-set',
    category: 'tiles',
    title: { tr: 'Osmanlı Desen Karo Seti', en: 'Ottoman Pattern Tile Set' },
    description: {
      tr: '6 parça el yapımı Osmanlı çiçek desenli dekoratif duvar karosu.',
      en: 'Set of 6 hand-crafted decorative wall tiles with Ottoman floral motifs.',
    },
    price: '₺650',
    badge: null,
    image: '/images/shop/ottoman-tiles.jpg',
    externalUrl: '#',
  },
  {
    id: 'cini-vase',
    category: 'tiles',
    title: { tr: 'Çiçek Desenli Vazo', en: 'Floral Pattern Vase' },
    description: {
      tr: 'Türk çini geleneğinden ilham alan el boyaması seramik vazo.',
      en: 'Hand-painted ceramic vase inspired by traditional Turkish çini art.',
    },
    price: '₺380',
    badge: { tr: 'Yeni', en: 'New' },
    image: '/images/shop/cini-vase.jpg',
    externalUrl: '#',
  },
  {
    id: 'blue-cini-bowl',
    category: 'tiles',
    title: { tr: 'Mavi Çini Kase', en: 'Blue Çini Bowl' },
    description: {
      tr: 'Geleneksel kobalt mavisi ile boyalı, 18 cm çaplı çini kase.',
      en: 'Traditional cobalt blue 18 cm ceramic bowl, hand-crafted.',
    },
    price: '₺290',
    badge: null,
    image: '/images/shop/blue-bowl.jpg',
    externalUrl: '#',
  },
  {
    id: 'mini-tile-set',
    category: 'tiles',
    title: { tr: 'Mini Çini Set', en: 'Mini Tile Set' },
    description: {
      tr: '3 parça küçük dekoratif çini, çerçeveli duvar süsü olarak sunulur.',
      en: 'Set of 3 small decorative tiles, presented in frames for wall display.',
    },
    price: '₺320',
    badge: { tr: 'Hediyelik', en: 'Gift Idea' },
    image: '/images/shop/mini-tiles.jpg',
    externalUrl: '#',
  },

  // ── Carpets / Halı ────────────────────────────────────────────────────────
  {
    id: 'anatolian-kilim',
    category: 'carpets',
    title: { tr: 'Anadolu Kilimi', en: 'Anatolian Kilim' },
    description: {
      tr: '120×180 cm el dokuması geleneksel Anadolu kilimi.',
      en: '120×180 cm hand-woven traditional Anatolian kilim.',
    },
    price: '₺2.400',
    badge: null,
    image: '/images/shop/kilim-1.jpg',
    externalUrl: '#',
  },
  {
    id: 'silk-prayer-rug',
    category: 'carpets',
    title: { tr: 'İpek Seccade', en: 'Silk Prayer Rug' },
    description: {
      tr: 'El dokuması ipek seccade, zarif çiçek desenli.',
      en: 'Hand-woven silk prayer rug with elegant floral patterns.',
    },
    price: '₺1.800',
    badge: { tr: 'Özel', en: 'Special' },
    image: '/images/shop/prayer-rug.jpg',
    externalUrl: '#',
  },
  {
    id: 'turkmen-rug',
    category: 'carpets',
    title: { tr: 'Türkmen Halı', en: 'Turkmen Rug' },
    description: {
      tr: '90×150 cm geleneksel Türkmen dokuma halısı, doğal boyalar.',
      en: '90×150 cm traditional Turkmen woven rug with natural dyes.',
    },
    price: '₺3.200',
    badge: { tr: 'El Dokuması', en: 'Hand-Woven' },
    image: '/images/shop/turkmen-rug.jpg',
    externalUrl: '#',
  },
  {
    id: 'small-kilim',
    category: 'carpets',
    title: { tr: 'Minik Kilim', en: 'Small Kilim' },
    description: {
      tr: '60×90 cm dekoratif küçük kilim, masa veya duvar için ideal.',
      en: '60×90 cm small decorative kilim, ideal as a table or wall piece.',
    },
    price: '₺950',
    badge: null,
    image: '/images/shop/small-kilim.jpg',
    externalUrl: '#',
  },
  {
    id: 'ram-horn-kilim',
    category: 'carpets',
    title: { tr: 'Koçboynuzu Kilim', en: 'Ram Horn Kilim' },
    description: {
      tr: 'Koçboynuzu motifli 80×120 cm yün kilim. Güç ve bereket sembolü.',
      en: '80×120 cm wool kilim with ram horn motif — a symbol of strength.',
    },
    price: '₺1.400',
    badge: { tr: 'Yeni', en: 'New' },
    image: '/images/shop/ramhorn-kilim.jpg',
    externalUrl: '#',
  },
];

export function getItemsByCategory(category: ShopCategory): ShopItem[] {
  return shopItems.filter(item => item.category === category);
}
