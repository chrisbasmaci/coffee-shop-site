export interface ShopItem {
  id: string;
  title: { tr: string; en: string };
  description: { tr: string; en: string };
  price: string;
  badge: { tr: string; en: string } | null;
  image: string;
  externalUrl: string;
}

export const shopItems: ShopItem[] = [
  {
    id: 'espresso-blend',
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
];
