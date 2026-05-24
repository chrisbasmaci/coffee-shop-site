export const languages = ['tr', 'en'] as const;
export type Lang = typeof languages[number];

export const t = {
  tr: {
    home: {
      meta: {
        title: 'Ana Sayfa',
        description: "CiniliCafe – İstanbul'da el yapımı kahveler, sıcak bir ortam ve özgün bir kahve deneyimi.",
      },
      hero: {
        eyebrow: "İstanbul'dan Merhaba",
        headingLine1: 'Her Yudum,',
        headingLine2: 'Bir Hikâye',
        subheading: 'El yapımı içecekler, sıcak bir ortam ve gerçek bir kahve deneyimi.',
        ctaMenu: 'Menüyü Gör',
        ctaContact: 'Bize Ulaşın',
      },
      about: {
        label: 'Hakkımızda',
        heading: 'Kahveye Duyduğumuz Sevgi',
        body: 'CiniliCafe, geleneksel Türk çini sanatından ilham alarak kuruldu. Her fincan, özenle seçilmiş çekirdeklerden hazırlanmış bir deneyim. Misafirlerimize sadece kahve değil; huzur, sıcaklık ve kalite sunuyoruz.',
      },
      highlights: {
        heading: 'Ne Sunuyoruz?',
        items: [
          { icon: '☕', title: 'Kahve', desc: 'Espresso bazlı içeceklerden Türk kahvesine, filtreden cold brew\'ya geniş bir çeşitlilik.' },
          { icon: '🍰', title: 'Tatlılar & Atıştırmalıklar', desc: 'Günlük ev yapımı tatlılar, börekler ve taze hazırlanmış atıştırmalıklar.' },
          { icon: '🛍', title: 'Mağaza', desc: 'Kahve çekirdekleri, seramik kupalar ve özel hediye setleri.' },
          { icon: '📍', title: 'Konum', desc: "İstanbul'un kalbinde, kolay ulaşılabilir bir noktada sizinle buluşuyoruz." },
        ],
      },
      menuSection: {
        heading: 'Menümüzden',
        subtitle: 'Mevsimlik malzemelerle hazırlanan özel içecekler ve ev yapımı lezzetler.',
        cta: 'Tüm Menüyü Gör',
      },
      shopSection: {
        heading: 'Mağazamız',
        subtitle: 'Sevdiğiniz aromaları ve atmosferi evinize götürün.',
        cta: 'Ürünleri Keşfet',
      },
      locationStrip: {
        heading: 'Bizi Ziyaret Edin',
        cta: 'İletişim Sayfasına Git',
      },
    },
    menu: {
      meta: {
        title: 'Menü',
        description: 'CiniliCafe menüleri – PDF olarak indirin veya açın.',
      },
      heading: 'Menümüz',
      intro: 'Taze çekilmiş kahveler, seçkin çaylar ve ev yapımı lezzetlerimizi PDF menü olarak indirebilirsiniz.',
      openLabel: 'PDF Menüyü Aç',
      note: 'PDF yeni sekmede açılır.',
    },
    shop: {
      meta: {
        title: 'Mağaza',
        description: 'CiniliCafe ürünleri – kahve çekirdekleri, kupalar ve hediye setleri.',
      },
      heading: 'Mağaza',
      intro: 'CiniliCafe lezzetlerini ve atmosferini evinize taşıyın.',
      orderNote: 'Satın almak için bizi ziyaret edin veya iletişime geçin.',
      viewLabel: 'Ürünü İncele',
      buyLabel: 'Satın Al',
      categories: {
        coffee: 'Kahve',
        tiles: 'Çini',
        carpets: 'Halı',
      },
    },
    contact: {
      meta: {
        title: 'İletişim',
        description: 'CiniliCafe iletişim bilgileri, konum ve çalışma saatleri.',
      },
      heading: 'İletişim',
      intro: 'Sorularınız, rezervasyon veya toplu sipariş talepleriniz için bize ulaşın.',
      labels: {
        address: 'Adres',
        phone: 'Telefon',
        email: 'E-posta',
        hours: 'Çalışma Saatleri',
        instagram: 'Instagram',
      },
      mapCta: "Google Haritalar'da Aç",
      mapPlaceholder: 'Harita yakında eklenecek',
    },
    footer: {
      tagline: 'Kahveni sev, anını yaşa.',
      pagesLabel: 'Sayfalar',
      copyright: '© 2025 CiniliCafe. Tüm hakları saklıdır.',
    },
  },

  en: {
    home: {
      meta: {
        title: 'Home',
        description: 'CiniliCafe – Handcrafted coffee, a warm atmosphere and a genuine coffee experience in Istanbul.',
      },
      hero: {
        eyebrow: 'Hello from Istanbul',
        headingLine1: 'Every Sip,',
        headingLine2: 'A Story',
        subheading: 'Handcrafted drinks, a warm atmosphere, and a genuine coffee experience.',
        ctaMenu: 'View Menu',
        ctaContact: 'Contact Us',
      },
      about: {
        label: 'About Us',
        heading: 'Our Love for Coffee',
        body: 'CiniliCafe was founded inspired by the traditional Turkish art of çini ceramics. Every cup is a lovingly crafted experience, made with carefully sourced beans. We offer our guests warmth, tranquility, and quality — not just coffee.',
      },
      highlights: {
        heading: 'What We Offer',
        items: [
          { icon: '☕', title: 'Coffee', desc: 'A wide range from espresso-based drinks to Turkish coffee, filter and cold brew.' },
          { icon: '🍰', title: 'Desserts & Snacks', desc: 'Daily homemade desserts, börek, and freshly prepared snacks.' },
          { icon: '🛍', title: 'Shop', desc: 'Coffee beans, ceramic mugs, and special gift sets.' },
          { icon: '📍', title: 'Location', desc: 'At the heart of Istanbul, easy to reach and hard to leave.' },
        ],
      },
      menuSection: {
        heading: 'From Our Menu',
        subtitle: 'Specialty drinks crafted with seasonal ingredients and homemade bites.',
        cta: 'View Full Menu',
      },
      shopSection: {
        heading: 'Our Shop',
        subtitle: 'Take your favourite flavours and atmosphere home.',
        cta: 'Browse Products',
      },
      locationStrip: {
        heading: 'Come Visit Us',
        cta: 'Go to Contact Page',
      },
    },
    menu: {
      meta: {
        title: 'Menu',
        description: 'CiniliCafe menus – download or open as PDF.',
      },
      heading: 'Our Menu',
      intro: 'Download our menus as PDF — freshly ground coffees, fine teas and homemade bites.',
      openLabel: 'Open PDF Menu',
      note: 'PDF opens in a new tab.',
    },
    shop: {
      meta: {
        title: 'Shop',
        description: 'CiniliCafe products – coffee beans, mugs and gift sets.',
      },
      heading: 'Shop',
      intro: 'Bring the flavours and atmosphere of CiniliCafe into your home.',
      orderNote: 'Visit us or get in touch to purchase.',
      viewLabel: 'View Item',
      buyLabel: 'Buy',
      categories: {
        coffee: 'Coffee',
        tiles: 'Tiles',
        carpets: 'Carpets',
      },
    },
    contact: {
      meta: {
        title: 'Contact',
        description: 'CiniliCafe contact details, location and opening hours.',
      },
      heading: 'Contact',
      intro: 'Get in touch for any questions, reservations, or bulk order enquiries.',
      labels: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        hours: 'Opening Hours',
        instagram: 'Instagram',
      },
      mapCta: 'Open in Google Maps',
      mapPlaceholder: 'Map coming soon',
    },
    footer: {
      tagline: 'Love your coffee, live the moment.',
      pagesLabel: 'Pages',
      copyright: '© 2025 CiniliCafe. All rights reserved.',
    },
  },
} as const;