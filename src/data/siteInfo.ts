import type { Lang } from './navigation';

export const siteInfo = {
  name: 'CiniliCafe',
  address: {
    tr: 'Beyazıt Kapalıçarşı, Halıcılar Cd. no 97, 34126 Fatih/İstanbul',
    en: 'Beyazıt Grand Bazaar, Halıcılar Cd. no 97, 34126 Fatih/Istanbul',
  },
  email: 'kachtiles@gmail.com',
  instagram: 'https://instagram.com/cinilicafe',
  mapsUrl: 'https://maps.app.goo.gl/DgeNiFT3h1kFbXe18',
  openingHours: {
    tr: [
      'Pazartesi – Cumartesi: 09:00 – 19:00',
      'Pazar: Kapalı',
    ],
    en: [
      'Monday – Saturday: 09:00 – 19:00',
      'Sunday: Closed',
    ],
  },
};

export type SiteInfo = typeof siteInfo;
