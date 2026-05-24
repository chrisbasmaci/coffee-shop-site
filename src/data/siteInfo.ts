import type { Lang } from './navigation';

export const siteInfo = {
  name: 'CiniliCafe',
  address: {
    tr: 'Adres bilgisi yakında eklenecek, İstanbul',
    en: 'Address information coming soon, Istanbul',
  },
  phone: '+90 212 000 00 00',
  email: 'info@cinilikafe.com',
  instagram: 'https://instagram.com/cinilikafe',
  mapsUrl: 'https://maps.google.com/',
  openingHours: {
    tr: [
      'Pazartesi – Cuma: 08:00 – 22:00',
      'Cumartesi – Pazar: 09:00 – 23:00',
    ],
    en: [
      'Monday – Friday: 08:00 – 22:00',
      'Saturday – Sunday: 09:00 – 23:00',
    ],
  },
};

export type SiteInfo = typeof siteInfo;
