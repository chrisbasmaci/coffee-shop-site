export type ShopCategory = 'coffee' | 'tiles' | 'carpets' | 'kilims' | 'textiles';

type LocalizedText = { tr: string; en: string };

export interface ShopItem {
  id: string;
  category: ShopCategory;
  title: LocalizedText;
  description: LocalizedText;
  details: { tr: string[]; en: string[] };
  price: string;
  badge: LocalizedText | null;
  featured: boolean;
  image: string;
  externalUrl: string;
}

interface ShopItemSeed {
  id: string;
  category: ShopCategory;
  title?: LocalizedText;
  description?: LocalizedText;
  details?: { tr: string[]; en: string[] };
  price?: string;
  badge?: LocalizedText | null;
  featured?: boolean;
  image?: string;
  externalUrl: string;
}

interface ShopierMetadata {
  title?: string;
  description?: string;
  price?: string;
  image?: string;
}

const SHOPIER_HOST = 'shopier.com';

function isShopierUrl(url: string): boolean {
  if (!url || url === '#') return false;
  try {
    const parsed = new URL(url);
    return parsed.hostname.includes(SHOPIER_HOST);
  } catch {
    return false;
  }
}

function decodeHtml(input: string): string {
  return input
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

function readMetaContent(html: string, key: string): string | undefined {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const withProperty = new RegExp(`<meta[^>]+property=["']${escapedKey}["'][^>]+content=["']([^"']+)["'][^>]*>`, 'i');
  const withName = new RegExp(`<meta[^>]+name=["']${escapedKey}["'][^>]+content=["']([^"']+)["'][^>]*>`, 'i');
  const propertyMatch = html.match(withProperty);
  const nameMatch = html.match(withName);
  const value = propertyMatch?.[1] ?? nameMatch?.[1];
  return value ? decodeHtml(value) : undefined;
}

function readPriceFromHtml(html: string): string | undefined {
  const schemaPrice = html.match(/"price"\s*:\s*"([0-9.,]+)"/i)?.[1];
  if (schemaPrice) {
    return `${schemaPrice} TL`;
  }

  const rawPrice = html.match(/([0-9][0-9.,]*)\s*TL/i)?.[1];
  if (rawPrice) {
    return `${rawPrice} TL`;
  }

  return undefined;
}

function readBestShopierImage(html: string): string | undefined {
  // Prefer the gallery full-size source, which matches the expanded image in Shopier's viewer.
  const originalFromDataSrc = html.match(/class=["'][^"']*js-product-image-slide[^"']*["'][^>]*\sdata-src=["']([^"']+)["']/i)?.[1];
  if (originalFromDataSrc) {
    return decodeHtml(originalFromDataSrc);
  }

  const scaledOriginal = html.match(/https:\/\/cdn\.shopier\.app\/scaledoriginal\/[^"'\s>]+/i)?.[0];
  if (scaledOriginal) {
    return decodeHtml(scaledOriginal);
  }

  const largePicture = html.match(/https:\/\/cdn\.shopier\.app\/pictures_large\/[^"'\s>]+/i)?.[0];
  if (largePicture) {
    return decodeHtml(largePicture);
  }

  return undefined;
}

async function fetchShopierMetadata(url: string): Promise<ShopierMetadata> {
  try {
    const response = await fetch(url, {
      headers: {
        'user-agent': 'Mozilla/5.0 (compatible; CiniliCafeBot/1.0)'
      }
    });

    if (!response.ok) {
      return {};
    }

    const html = await response.text();
    const title = readMetaContent(html, 'og:title') ?? readMetaContent(html, 'twitter:title');
    const description = readMetaContent(html, 'og:description') ?? readMetaContent(html, 'description');
    const image = readBestShopierImage(html)
      ?? readMetaContent(html, 'og:image')
      ?? readMetaContent(html, 'twitter:image');
    const price = readPriceFromHtml(html);

    return {
      title,
      description,
      image,
      price,
    };
  } catch {
    return {};
  }
}

function localize(value?: string): LocalizedText | undefined {
  if (!value) return undefined;
  return { tr: value, en: value };
}

function pickLocalized(preferred?: LocalizedText, fallback?: LocalizedText, defaultValue = ''): LocalizedText {
  if (preferred && preferred.tr && preferred.en) {
    return preferred;
  }

  if (preferred && (preferred.tr || preferred.en)) {
    return {
      tr: preferred.tr || preferred.en || defaultValue,
      en: preferred.en || preferred.tr || defaultValue,
    };
  }

  if (fallback) {
    return fallback;
  }

  return { tr: defaultValue, en: defaultValue };
}

function normalizeDetails(details?: { tr: string[]; en: string[] }): { tr: string[]; en: string[] } {
  return {
    tr: details?.tr ?? [],
    en: details?.en ?? [],
  };
}

async function enrichItem(seed: ShopItemSeed): Promise<ShopItem> {
  const hasShopierLink = isShopierUrl(seed.externalUrl);
  const shopierData = hasShopierLink
    ? await fetchShopierMetadata(seed.externalUrl)
    : {};

  const title = hasShopierLink
    ? pickLocalized(localize(shopierData.title), seed.title, 'Urun')
    : pickLocalized(seed.title, undefined, 'Urun');

  const description = hasShopierLink
    ? pickLocalized(localize(shopierData.description), seed.description, '')
    : pickLocalized(seed.description, undefined, '');

  return {
    id: seed.id,
    category: seed.category,
    title,
    description,
    details: normalizeDetails(seed.details),
    price: hasShopierLink
      ? (shopierData.price ?? seed.price ?? '')
      : (seed.price ?? ''),
    badge: seed.badge ?? null,
    featured: seed.featured ?? false,
    image: hasShopierLink
      ? (shopierData.image ?? seed.image ?? '')
      : (seed.image ?? ''),
    externalUrl: seed.externalUrl,
  };
}

const shopItemSeeds: ShopItemSeed[] = [
  // ── Coffee ───────────────────────────────────────────────────────────────
  {
    id: 'espresso-blend',
    category: 'coffee',
    title: { tr: 'Espresso Harman 250g', en: 'Espresso Blend 250g' },
    description: {
      tr: 'İmza harmanımız. Yoğun aroma, kadifemsi doku.',
      en: 'Our signature blend. Rich aroma, velvety texture.',
    },
    details: { tr: ['250 g', 'Çekirdek veya öğütülmüş'], en: ['250 g', 'Whole bean or ground'] },
    price: '₺180',
    badge: { tr: 'Çok Satan', en: 'Best Seller' },
    featured: true,
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
    details: { tr: ['200 g', 'İnce öğütülmüş'], en: ['200 g', 'Finely ground'] },
    price: '₺150',
    badge: null,
    featured: false,
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
    details: { tr: ['Aylık değişen menşei', 'Çekirdek veya öğütülmüş'], en: ['Monthly origin rotation', 'Whole bean or ground'] },
    price: '₺200',
    badge: { tr: 'Aylık Değişir', en: 'Monthly Rotation' },
    featured: false,
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
    details: { tr: ['Seramik', '300 ml', 'Sınırlı stok'], en: ['Ceramic', '300 ml', 'Limited stock'] },
    price: '₺320',
    badge: { tr: 'El Yapımı', en: 'Handmade' },
    featured: true,
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
    details: { tr: ['İkili set', 'Özel paketleme'], en: ['Duo set', 'Special packaging'] },
    price: '₺120',
    badge: null,
    featured: false,
    image: '/images/shop/tea.jpg',
    externalUrl: '#',
  },
  {
    id: 'gift-set',
    category: 'coffee',
    title: { tr: 'Kahve Hediye Kutusu', en: 'Coffee Gift Box' },
    description: {
      tr: 'Espresso harman, kupa ve kahve ölçeği hediye kutusu.',
      en: 'Espresso blend, mug and coffee scoop gift box.',
    },
    details: { tr: ['Özel paketleme', 'Siparişle hazırlanır'], en: ['Special packaging', 'Prepared on order'] },
    price: '₺580',
    badge: { tr: 'Hediye', en: 'Gift' },
    featured: true,
    image: '/images/shop/gift-set.jpg',
    externalUrl: '#',
  },

  // ── Tiles / Çini ─────────────────────────────────────────────────────────
  {
    id: 'cini-tile-1',
    category: 'tiles',
    externalUrl: 'https://www.shopier.com/kachtiles/47511176',
  },

  // ── Kilims ────────────────────────────────────────────────────────────────
  {
    id: 'kilim-1',
    category: 'kilims',
    externalUrl: 'https://www.shopier.com/kachtiles/47511157',
  },

  // ── Carpets / Halı ────────────────────────────────────────────────────────
  {
    id: 'hali-1',
    category: 'carpets',
    externalUrl: 'https://www.shopier.com/kachtiles/47504008',
  },

  // ── Textiles ──────────────────────────────────────────────────────────────
  {
    id: 'textile-1',
    category: 'textiles',
    externalUrl: 'https://www.shopier.com/kachtiles/47511448',
  },
];

let shopItemsCache: Promise<ShopItem[]> | null = null;

export async function getShopItems(): Promise<ShopItem[]> {
  if (!shopItemsCache) {
    shopItemsCache = Promise.all(shopItemSeeds.map(item => enrichItem(item)));
  }
  return shopItemsCache;
}

export async function getItemsByCategory(category: ShopCategory): Promise<ShopItem[]> {
  const items = await getShopItems();
  return items.filter(item => item.category === category);
}
