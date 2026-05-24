export interface MenuPdf {
  id: string;
  icon: string;
  title: { tr: string; en: string };
  description: { tr: string; en: string };
  pdfUrl: { tr: string; en: string };
}

export const menuPdfs: MenuPdf[] = [
  {
    id: 'coffee-menu',
    icon: '☕',
    title: { tr: 'Kahve Menüsü', en: 'Coffee Menu' },
    description: {
      tr: 'Espresso, filtre, Türk kahvesi ve tüm sıcak içecekler.',
      en: 'Espresso, filter, Turkish coffee and all hot drinks.',
    },
    pdfUrl: { tr: '/pdfs/menu-tr.pdf', en: '/pdfs/menu-en.pdf' },
  },
  {
    id: 'food-menu',
    icon: '🥐',
    title: { tr: 'Yiyecek Menüsü', en: 'Food Menu' },
    description: {
      tr: 'Sandviçler, tostlar, börekler ve günlük atıştırmalıklar.',
      en: 'Sandwiches, toasts, börek and daily snacks.',
    },
    pdfUrl: { tr: '/pdfs/food-tr.pdf', en: '/pdfs/food-en.pdf' },
  },
  {
    id: 'dessert-menu',
    icon: '🍰',
    title: { tr: 'Tatlı Menüsü', en: 'Dessert Menu' },
    description: {
      tr: 'Günlük ev yapımı tatlılar ve pasta çeşitleri.',
      en: 'Daily homemade desserts and cake selection.',
    },
    pdfUrl: { tr: '/pdfs/dessert-tr.pdf', en: '/pdfs/dessert-en.pdf' },
  },
  {
    id: 'drinks-menu',
    icon: '🍵',
    title: { tr: 'İçecekler', en: 'Drinks' },
    description: {
      tr: 'Çaylar, soğuk içecekler ve mevsimlik özel içecekler.',
      en: 'Teas, cold drinks, and seasonal specials.',
    },
    pdfUrl: { tr: '/pdfs/drinks-tr.pdf', en: '/pdfs/drinks-en.pdf' },
  },
];
