export type Lang = 'tr' | 'en';
export type PageKey = 'home' | 'menu' | 'shop' | 'contact';

export const navigation: Record<Lang, Record<PageKey, string>> = {
  tr: {
    home: 'Ana Sayfa',
    menu: 'Menü',
    shop: 'Mağaza',
    contact: 'İletişim',
  },
  en: {
    home: 'Home',
    menu: 'Menu',
    shop: 'Shop',
    contact: 'Contact',
  },
};

/** Maps a PageKey to its URL path segment (empty string = root of lang) */
export const pagePaths: Record<PageKey, string> = {
  home: '',
  menu: 'menu',
  shop: 'shop',
  contact: 'contact',
};
