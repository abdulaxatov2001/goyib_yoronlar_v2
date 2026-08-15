/* ============================================================
   G'oyib Yoronlar Jome Masjidi — v2
   Multi-language, Custom Floating Dropdowns, History Back Navigation,
   Telegram Bot Integration, Markdown & Stitch Theme
   ============================================================ */

'use strict';

// ============ MARKDOWN PARSER ============
function parseMarkdown(text) {
  if (!text) return '';
  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/^### (.*$)/gim, '<h4 class="text-sm font-bold text-primary dark:text-emerald-light mt-3 mb-1">$1</h4>')
    .replace(/^## (.*$)/gim, '<h3 class="text-base font-bold text-primary dark:text-emerald-light mt-3 mb-1">$1</h3>')
    .replace(/^# (.*$)/gim, '<h2 class="text-lg font-bold text-primary dark:text-emerald-light mt-4 mb-2">$1</h2>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-primary dark:text-emerald-light">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="text-emerald-deep dark:text-emerald-light underline font-medium hover:opacity-80">$1</a>')
    .replace(/^\s*[-*]\s+(.*$)/gim, '<div class="flex items-start gap-2 my-1"><span class="text-gold-shimmer text-xs mt-1">•</span><span>$1</span></div>')
    .replace(/\n\n/g, '<div class="my-2.5"></div>')
    .replace(/\n/g, '<br/>');

  return html;
}

// ============ TRANSLATIONS ============
const translations = {
  uz_lt: {
    bomdod: "BOMDOD",
    quyosh: "QUYOSH",
    peshin: "PESHIN",
    asr: "ASR",
    shom: "SHOM",
    xufton: "XUFTON",
    nav_home: "Bosh sahifa",
    nav_about: "Namoz",
    nav_team: "Jamoa",
    nav_news: "Yangiliklar",
    nav_sponsors: "Faxriylar",
    nav_gallery: "Galereya",
    nav_dua: "Duo olish",
    nav_contact: "Aloqa",
    nav_donate: "Xayriya",
    hero_title: "Xush kelibsiz",
    hero_title_inline: "G'OYIB YORONLAR",
    hero_subtitle: "Namangan viloyati, Pop tumani, To'da qishlog'i",
    dua_title: "Jamoatdan duo olish",
    news_title: "Yangiliklar",
    text_size: "Matn:",
    dua_warning_note: "Eslatma: Juma kuni soat 12:40 dan 13:00 gacha duo yuborish vaqtincha to'xtatiladi.",
    dua_blocked: "Hozir Juma namozi vaqti (12:40 - 13:00). Duolar qabul qilinmaydi.",
    dua_name_ph: "Ismingiz (ixtiyoriy)",
    dua_msg_ph: "Duo mazmuni (Masalan: Bemorman, shifo so'rab duo qilishlarini so'rayman)",
    dua_submit: "Yuborish",
    dua_success: "Xabaringiz yuborildi. Kelayotgan juma namozida yetkaziladi!",
    masjid_time_label: "Masjidda o'qilish vaqti",
    api_time_label: "Azon",
    loading: "Yuklanmoqda...",
    next_prayer_in: "Keyingi namozga:",
    about_title: "Biz haqimizda",
    about_text: "G'oyib Yoronlar jome masjidi Namangan viloyati Pop tumani To'da qishlog'ida joylashgan maskandir. Masjid mahalliy aholi uchun nafaqat ibodatxona, balki ma'naviy tarbiya o'chog'i ham hisoblanadi.",
    team_title: "Masjid Jamoasi",
    sponsors_title: "Faxriylar va homiylar",
    gallery_title: "Foto galereya",
    contact_title: "Biz bilan aloqa",
    charity_title: "Xayriya va ehson",
    charity_general: "Umumiy ehson",
    charity_utility: "Kommunal to'lovlar",
    domo_btn: "domo.uz orqali kommunal to'lash",
    read_more: "O'qish",
    bottom_nav_home: "BOSH",
    bottom_nav_prayers: "NAMOZ",
    bottom_nav_charity: "XAYRIYA",
    bottom_nav_gallery: "GALEREYA",
    bottom_nav_dua: "DUO",
    electric_note_title: "Qanday to'lash kerak?",
    electric_note_desc: "Bu — <strong>yuridik hisob raqam</strong>. Payme yoki Click ilovasidan to'lash uchun:<br/><strong>Kommunal to'lovlar</strong> → <strong>Elektr energiyasi (yuridik)</strong> → hisob raqamni kiriting.",
    no_news: "Hozircha yangiliklar yo'q...",
    no_sponsors: "Hozircha ma'lumot kiritilmagan.",
    no_team: "Hozircha jamoa a'zolari kiritilmagan...",
    no_gallery: "Hozircha rasmlar kiritilmagan..."
  },
  uz_cy: {
    bomdod: "БОМДОД",
    quyosh: "ҚУЁШ",
    peshin: "ПЕШИН",
    asr: "АСР",
    shom: "ШОМ",
    xufton: "ХУФТОН",
    nav_home: "Бош саҳифа",
    nav_about: "Намоз",
    nav_team: "Жамоа",
    nav_news: "Янгиликлар",
    nav_sponsors: "Фахрийлар",
    nav_gallery: "Галерея",
    nav_dua: "Дуо олиш",
    nav_contact: "Алоқа",
    nav_donate: "Хайрия",
    hero_title: "Хуш келибсиз",
    hero_title_inline: "ҒОЙИБ ЁРОНЛАР",
    hero_subtitle: "Наманган вилояти, Поп тумани, Тўда қишлоғи",
    dua_title: "Жамоатдан дуо олиш",
    news_title: "Янгиликлар",
    text_size: "Матн:",
    dua_warning_note: "Эслатма: Жума куни соат 12:40 дан 13:00 гача дуо юбориш вақтинча тўхтатилади.",
    dua_blocked: "Ҳозир Жума намози вақти (12:40 - 13:00). Дуолар қабул қилинмайди.",
    dua_name_ph: "Исмингиз (ихтиёрий)",
    dua_msg_ph: "Дуо мазмуни (Масалан: Беморман, шифо сўраб дуо қилишларини сўрайман)",
    dua_submit: "Юбориш",
    dua_success: "Хабарингиз юборилди. Келаётган жума намозида етказилади!",
    masjid_time_label: "Масжидда ўқилиш вақти",
    api_time_label: "Азон",
    loading: "Юкланмоқда...",
    next_prayer_in: "Кейинги намозга:",
    about_title: "Биз ҳақимизда",
    about_text: "Ғойиб Ёронlar жоме масжиди Наманган вилояти Поп тумани Тўда қишлоғида жойлашган. Масжид маҳаллий аҳоли учун нафақат ибодатхона, балки маънавий тарбия ўчоғи ҳам ҳисобланади.",
    team_title: "Масжид Жамоаси",
    sponsors_title: "Фахрийлар ва ҳомийлар",
    gallery_title: "Фото галерея",
    contact_title: "Биз билан алоқа",
    charity_title: "Хайрия ва эҳсон",
    charity_general: "Умумий эҳсон",
    charity_utility: "Коммунал тўловлар",
    domo_btn: "domo.uz орқали коммунал тўлаш",
    read_more: "Ўқиш",
    bottom_nav_home: "БОШ",
    bottom_nav_prayers: "НАМОЗ",
    bottom_nav_charity: "ХАЙРИЯ",
    bottom_nav_gallery: "ГАЛЕРЕЯ",
    bottom_nav_dua: "ДУО",
    electric_note_title: "Қандай тўлаш керак?",
    electric_note_desc: "Бу — <strong>юридик ҳисоб рақам</strong>. Payme ёки Click иловасидан тўлаш учун:<br/><strong>Коммунал тўловлар</strong> → <strong>Электр энергияси (юридик)</strong> → ҳисоб рақамни киритинг.",
    no_news: "Ҳозирча янгиликлар йўқ...",
    no_sponsors: "Ҳозирча маълумот киритилмаган.",
    no_team: "Ҳозирча жамоа аъзолари киритилмаган...",
    no_gallery: "Ҳозирча расмлар киритилмаган..."
  },
  ru: {
    bomdod: "ФАДЖР",
    quyosh: "ВОСХОД",
    peshin: "ЗУХР",
    asr: "АСР",
    shom: "МАГРИБ",
    xufton: "ИША",
    nav_home: "Главная",
    nav_about: "Намаз",
    nav_team: "Команда",
    nav_news: "Новости",
    nav_sponsors: "Ветераны",
    nav_gallery: "Галерея",
    nav_dua: "Молитва",
    nav_contact: "Контакты",
    nav_donate: "Пожертвование",
    hero_title: "Добро пожаловать",
    hero_title_inline: "ГОЙИБ ЁРОНЛАР",
    hero_subtitle: "Наманганская область, Папский район, село Туда",
    dua_title: "Получить молитву от джамаата",
    news_title: "Новости",
    text_size: "Текст:",
    dua_warning_note: "Примечание: По пятницам с 12:40 до 13:00 прием молитв временно приостанавливается.",
    dua_blocked: "Сейчас время Пятничного намаза (12:40 - 13:00). Молитвы не принимаются.",
    dua_name_ph: "Ваше имя (необязательно)",
    dua_msg_ph: "Содержание молитвы (Например: Прошу помолиться о моем исцелении)",
    dua_submit: "Отправить",
    dua_success: "Ваше сообщение отправлено. Оно будет передано на пятничном намазе!",
    masjid_time_label: "Время в мечети",
    api_time_label: "Азан",
    loading: "Загрузка...",
    next_prayer_in: "До следующего намаза:",
    about_title: "О нас",
    about_text: "Соборная мечеть «Гойиб Ёронlar» расположена в селе Туда Папского района Наманганской области.",
    team_title: "Команда мечети",
    sponsors_title: "Почётные лица и спонсоры",
    gallery_title: "Фотогалерея",
    contact_title: "Контакты",
    charity_title: "Благотворительность",
    charity_general: "Общее пожертвование",
    charity_utility: "Коммунальные платежи",
    domo_btn: "Оплата коммунальных через domo.uz",
    read_more: "Читать",
    bottom_nav_home: "ГЛАВНАЯ",
    bottom_nav_prayers: "НАМАЗ",
    bottom_nav_charity: "ПОЖЕРТВОВАНИЕ",
    bottom_nav_gallery: "ГАЛЕРЕЯ",
    bottom_nav_dua: "МОЛИТВА",
    electric_note_title: "Как оплатить?",
    electric_note_desc: "Это — <strong>юридический счёт</strong>. Для оплаты через Payme или Click:<br/><strong>Коммунальные платежи</strong> → <strong>Электроэнергия (юридический)</strong> → введите номер счёта.",
    no_news: "Новостей пока нет...",
    no_sponsors: "Данных пока нет.",
    no_team: "Данных пока нет...",
    no_gallery: "Фотографий пока нет..."
  },
  en: {
    bomdod: "FAJR",
    quyosh: "SUNRISE",
    peshin: "DHUHR",
    asr: "ASR",
    shom: "MAGHRIB",
    xufton: "ISHA",
    nav_home: "Home",
    nav_about: "Prayers",
    nav_team: "Team",
    nav_news: "News",
    nav_sponsors: "Sponsors",
    nav_gallery: "Gallery",
    nav_dua: "Prayer request",
    nav_contact: "Contact",
    nav_donate: "Donate",
    hero_title: "Welcome",
    hero_title_inline: "G'OYIB YORONLAR",
    hero_subtitle: "Tuda village, Pop district, Namangan region",
    dua_title: "Prayer request",
    news_title: "News",
    text_size: "Text:",
    dua_warning_note: "Note: On Fridays from 12:40 to 13:00, prayer requests are temporarily suspended.",
    dua_blocked: "It is currently Friday prayer time (12:40 - 13:00). Requests not accepted.",
    dua_name_ph: "Your name (optional)",
    dua_msg_ph: "Prayer details (E.g. Please pray for my health and recovery)",
    dua_submit: "Submit",
    dua_success: "Your message has been sent successfully!",
    masjid_time_label: "Mosque prayer time",
    api_time_label: "Adhan",
    loading: "Loading...",
    next_prayer_in: "Next prayer in:",
    about_title: "About Us",
    about_text: "G'oyib Yoronlar Mosque is located in Tuda village, Pop district, Namangan region.",
    team_title: "Mosque Team",
    sponsors_title: "Honorable sponsors",
    gallery_title: "Photo gallery",
    contact_title: "Contact Us",
    charity_title: "Charity & donation",
    charity_general: "General donation",
    charity_utility: "Utility payments",
    domo_btn: "Pay utilities via domo.uz",
    read_more: "Read",
    bottom_nav_home: "HOME",
    bottom_nav_prayers: "PRAYERS",
    bottom_nav_charity: "CHARITY",
    bottom_nav_gallery: "GALLERY",
    bottom_nav_dua: "DUA",
    electric_note_title: "How to pay?",
    electric_note_desc: "This is a <strong>legal account number</strong>. To pay via Payme or Click:<br/><strong>Utility payments</strong> → <strong>Electricity (legal)</strong> → enter the account number.",
    no_news: "No news available...",
    no_sponsors: "No information yet.",
    no_team: "No team members yet...",
    no_gallery: "No images yet..."
  }
};

const langMeta = {
  uz_lt: { flag: "🇺🇿", name: "O'zbekcha", code: "O'z" },
  uz_cy: { flag: "🇺🇿", name: "Ўзбекча", code: "Ўз" },
  ru: { flag: "🇷🇺", name: "Русский", code: "Ру" },
  en: { flag: "🇺🇸", name: "English", code: "En" }
};

let currentLang = localStorage.getItem('selected_language') || 'uz_lt';

function setLanguage(lang) {
  if (!translations[lang]) lang = 'uz_lt';
  currentLang = lang;
  localStorage.setItem('selected_language', lang);

  // Update dropdown labels
  document.querySelectorAll('.lang-current-flag').forEach(el => el.textContent = langMeta[lang].flag);
  document.querySelectorAll('.lang-current-name').forEach(el => el.textContent = langMeta[lang].name);
  document.querySelectorAll('.lang-current-code').forEach(el => el.textContent = langMeta[lang].code);

  // Update checkmarks
  document.querySelectorAll('.lang-menu button').forEach(btn => {
    const isCur = btn.dataset.lang === lang;
    const check = btn.querySelector('.check-icon');
    if (check) check.classList.toggle('hidden', !isCur);
    btn.classList.toggle('bg-surface-container', isCur);
    btn.classList.toggle('font-bold', isCur);
  });

  // Apply translations to all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Placeholders
  const nameInput = document.getElementById('dua-name');
  if (nameInput && translations[lang].dua_name_ph) nameInput.placeholder = translations[lang].dua_name_ph;
  const textInput = document.getElementById('dua-text');
  if (textInput && translations[lang].dua_msg_ph) textInput.placeholder = translations[lang].dua_msg_ph;
}

// Custom Language Dropdown Event Handlers
function initCustomLangDropdowns() {
  document.querySelectorAll('.custom-lang-dropdown').forEach(dropdown => {
    const trigger = dropdown.querySelector('.lang-dropdown-trigger');
    const menu = dropdown.querySelector('.lang-menu');

    trigger?.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !menu.classList.contains('hidden');
      document.querySelectorAll('.lang-menu').forEach(m => m.classList.add('hidden'));
      if (!isOpen) menu.classList.remove('hidden');
    });

    menu?.querySelectorAll('button[data-lang]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        setLanguage(btn.dataset.lang);
        menu.classList.add('hidden');
      });
    });
  });

  // Close when clicked outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.lang-menu').forEach(m => m.classList.add('hidden'));
  });
}
initCustomLangDropdowns();

// ============ FONT SIZE SCALING ============
function setFontSize(size) {
  document.documentElement.classList.remove('font-scale-lg', 'font-scale-xl');
  if (size === 'lg') document.documentElement.classList.add('font-scale-lg');
  if (size === 'xl') document.documentElement.classList.add('font-scale-xl');
  localStorage.setItem('selected_font_size', size);
}

document.querySelectorAll('.font-btn').forEach(btn => {
  btn.addEventListener('click', () => setFontSize(btn.dataset.size));
});

const savedFontSize = localStorage.getItem('selected_font_size') || 'norm';
setFontSize(savedFontSize);

// ============ DARK MODE ============
function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.classList.toggle('dark', saved === 'dark');
  updateThemeIcons(saved);
}

function updateThemeIcons(theme) {
  const icon = document.getElementById('theme-icon');
  const iconDesktop = document.getElementById('theme-icon-desktop');
  const val = theme === 'dark' ? 'dark_mode' : 'light_mode';
  if (icon) icon.textContent = val;
  if (iconDesktop) iconDesktop.textContent = val;
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  const next = isDark ? 'light' : 'dark';
  document.documentElement.classList.toggle('dark', next === 'dark');
  localStorage.setItem('theme', next);
  updateThemeIcons(next);
}

document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
document.getElementById('theme-toggle-desktop')?.addEventListener('click', toggleTheme);
initTheme();

// ============ LIVE CLOCK & DATE ============
function updateClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  const timeStr = `${hh}:${mm}:${ss}`;
  
  const timeEl = document.getElementById('current-time');
  if (timeEl) timeEl.textContent = timeStr;

  const dateEl = document.getElementById('current-date');
  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString('uz-UZ', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  // Hijri date
  try {
    const hijriEl = document.getElementById('hijri-date');
    if (hijriEl) {
      const hijri = new Intl.DateTimeFormat('uz-UZ-u-ca-islamic', {
        day: 'numeric', month: 'long', year: 'numeric'
      }).format(now);
      hijriEl.textContent = hijri;
    }
  } catch (e) {}
}
setInterval(updateClock, 1000);
updateClock();

// ============ BOTTOM NAV & SCROLL SPY ============
function initNavSync() {
  const bottomItems = document.querySelectorAll('.bottom-nav-item[data-section]');
  const desktopLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function setActiveTab(sectionId) {
    bottomItems.forEach(item => {
      const isCur = item.dataset.section === sectionId;
      const icon = item.querySelector('.material-symbols-outlined');
      if (isCur) {
        item.className = 'bottom-nav-item flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full p-2 min-w-[60px] active:scale-90 transition-transform duration-150 group';
        if (icon) icon.style.fontVariationSettings = "'FILL' 1";
      } else {
        item.className = 'bottom-nav-item flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant rounded-full p-2 min-w-[60px] transition-colors active:scale-90';
        if (icon) icon.style.fontVariationSettings = "'FILL' 0";
      }
    });

    desktopLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveTab(entry.target.id);
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));

  bottomItems.forEach(btn => {
    btn.addEventListener('click', () => setActiveTab(btn.dataset.section));
  });
}
initNavSync();

// ============ HISTORY BACK BUTTON HANDLER ============
function closeAllModals(fromPopState = false) {
  const teamModal = document.getElementById('team-modal');
  const newsModal = document.getElementById('news-modal');
  const lightboxModal = document.getElementById('lightbox-modal');

  let wasOpen = false;
  if (teamModal && !teamModal.classList.contains('hidden')) {
    teamModal.classList.add('hidden');
    teamModal.classList.remove('flex');
    wasOpen = true;
  }
  if (newsModal && !newsModal.classList.contains('hidden')) {
    newsModal.classList.add('hidden');
    newsModal.classList.remove('flex');
    wasOpen = true;
  }
  if (lightboxModal && !lightboxModal.classList.contains('hidden')) {
    lightboxModal.classList.add('hidden');
    lightboxModal.classList.remove('flex');
    wasOpen = true;
  }

  if (wasOpen) {
    document.body.style.overflow = '';
  }
}

window.addEventListener('popstate', () => {
  closeAllModals(true);
});

// ============ FIREBASE INITIALIZATION ============
let db = null;
try {
  if (typeof firebaseConfig !== 'undefined' && firebaseConfig.apiKey) {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    db = firebase.database();
    console.log('✅ Firebase muvaffaqiyatli ulandi');
  }
} catch (e) {
  console.warn('Firebase init xatosi:', e);
}

// ============ PRAYER TIMES STATE & LOGIC ============
let prayerTimes = {
  bomdod: '04:10',
  quyosh: '05:17',
  peshin: '13:00',
  asr: '17:30',
  shom: '19:30',
  xufton: '21:10'
};
let apiTimes = {
  bomdod: '03:40',
  quyosh: '05:17',
  peshin: '12:21',
  asr: '17:15',
  shom: '19:16',
  xufton: '20:54'
};
let countdownTimerInterval = null;

function renderMasjidTimes(data) {
  if (!data) return;
  prayerTimes = { ...prayerTimes, ...data };

  const prayers = ['bomdod', 'quyosh', 'peshin', 'asr', 'shom', 'xufton'];
  prayers.forEach(p => {
    const el = document.getElementById(`time-${p}`);
    if (el && prayerTimes[p]) {
      el.textContent = prayerTimes[p];
    }
  });

  const lastUpdated = document.getElementById('last-updated');
  if (lastUpdated) {
    if (data.updated_at) {
      lastUpdated.textContent = `YANGILANDI: ${data.updated_at}`;
    } else {
      const now = new Date();
      const yr = now.getFullYear();
      const mo = String(now.getMonth() + 1).padStart(2, '0');
      const da = String(now.getDate()).padStart(2, '0');
      const ho = String(now.getHours()).padStart(2, '0');
      const mi = String(now.getMinutes()).padStart(2, '0');
      lastUpdated.textContent = `YANGILANDI: ${yr}-${mo}-${da} ${ho}:${mi}`;
    }
  }

  highlightActivePrayer();
  startCountdown();
}

function loadFirebasePrayerTimes() {
  if (!db) {
    renderMasjidTimes(prayerTimes);
    return;
  }

  try {
    const cached = localStorage.getItem('cached_prayer_times');
    if (cached) renderMasjidTimes(JSON.parse(cached));
  } catch (e) {}

  db.ref('prayer_times').on('value', snapshot => {
    const data = snapshot.val();
    if (data) {
      try { localStorage.setItem('cached_prayer_times', JSON.stringify(data)); } catch (e) {}
      renderMasjidTimes(data);
    }
  }, err => {
    console.warn('Firebase prayer_times xatosi:', err.message);
  });
}

async function loadAladhanApiTimes() {
  try {
    const d = new Date();
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    const dateStr = `${dd}-${mm}-${yyyy}`;

    const res = await fetch(`https://api.aladhan.com/v1/timings/${dateStr}?latitude=40.8732&longitude=70.9575&method=3&school=1`);
    const json = await res.json();
    if (json && json.code === 200) {
      const t = json.data.timings;
      apiTimes = {
        bomdod: t.Fajr,
        quyosh: t.Sunrise,
        peshin: t.Dhuhr,
        asr: t.Asr,
        shom: t.Maghrib,
        xufton: t.Isha
      };

      const prayers = ['bomdod', 'quyosh', 'peshin', 'asr', 'shom', 'xufton'];
      prayers.forEach(p => {
        const el = document.getElementById(`api-${p}`);
        if (el && apiTimes[p]) el.textContent = apiTimes[p];
      });

      const quyoshEl = document.getElementById('time-quyosh');
      if (quyoshEl && (!prayerTimes.quyosh || prayerTimes.quyosh === '--:--')) {
        quyoshEl.textContent = t.Sunrise;
        prayerTimes.quyosh = t.Sunrise;
      }

      highlightActivePrayer();
      startCountdown();
    }
  } catch (e) {
    console.warn('Aladhan API xatosi:', e);
  }
}

// ============ ACTIVE PRAYER HIGHLIGHT ============
function highlightActivePrayer() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const prayers = ['bomdod', 'quyosh', 'peshin', 'asr', 'shom', 'xufton'];
  const timesMap = {};

  prayers.forEach(p => {
    const t = prayerTimes[p] || apiTimes[p];
    if (t && t !== '--:--') {
      const [hh, mm] = t.split(':').map(Number);
      timesMap[p] = hh * 60 + mm;
    }
  });

  let active = null;
  for (let i = prayers.length - 1; i >= 0; i--) {
    const p = prayers[i];
    if (timesMap[p] !== undefined && currentMinutes >= timesMap[p]) {
      active = p;
      break;
    }
  }

  if (!active) active = 'xufton';

  prayers.forEach(p => {
    const cell = document.getElementById(`cell-${p}`);
    if (!cell) return;

    const isCur = p === active;
    const nameEl = cell.querySelector('.prayer-name');
    const pillEl = cell.querySelector('.prayer-pill');
    const pillLabel = cell.querySelector('.prayer-pill-label');
    const masjidTimeEl = cell.querySelector('.prayer-masjid');
    const azonLabel = cell.querySelector('.prayer-azon-label');
    const apiTimeEl = cell.querySelector('.prayer-api');

    if (isCur) {
      cell.className = 'prayer-cell bg-emerald-deep p-3.5 text-center flex flex-col items-center justify-between min-h-[140px] group transition-all shadow-md relative overflow-hidden';
      if (nameEl) nameEl.className = 'font-label-caps text-[11px] font-bold text-gold-shimmer mb-1 prayer-name relative z-10';
      if (pillEl) pillEl.className = 'w-full bg-white/20 backdrop-blur-sm rounded-xl p-1.5 mb-1.5 prayer-pill relative z-10';
      if (pillLabel) pillLabel.className = 'text-[9px] text-white/80 uppercase font-bold tracking-wider mb-0.5 prayer-pill-label';
      if (masjidTimeEl) masjidTimeEl.className = 'font-prayer-time-display text-[22px] md:text-[24px] font-bold text-white tabular-nums leading-none prayer-masjid';
      if (azonLabel) azonLabel.className = 'text-[9px] font-bold uppercase tracking-wider text-white/70 prayer-azon-label';
      if (apiTimeEl) apiTimeEl.className = 'text-[12px] font-bold tabular-nums text-white/90 prayer-api';
    } else {
      cell.className = 'prayer-cell bg-surface-container-lowest p-3.5 text-center flex flex-col items-center justify-between min-h-[140px] group transition-all';
      if (nameEl) nameEl.className = 'font-label-caps text-[11px] text-on-surface-variant font-bold mb-1 prayer-name';
      if (pillEl) pillEl.className = 'w-full bg-surface-container-low rounded-xl p-1.5 mb-1.5 prayer-pill';
      if (pillLabel) pillLabel.className = 'text-[9px] text-on-surface-variant uppercase font-bold tracking-wider mb-0.5 prayer-pill-label';
      if (masjidTimeEl) masjidTimeEl.className = 'font-prayer-time-display text-[22px] md:text-[24px] font-bold text-primary tabular-nums leading-none prayer-masjid';
      if (azonLabel) azonLabel.className = 'text-[9px] text-on-surface-variant uppercase font-bold tracking-wider prayer-azon-label';
      if (apiTimeEl) apiTimeEl.className = 'text-[12px] font-bold text-on-surface-variant tabular-nums prayer-api';
    }
  });
}

// ============ COUNTDOWN ============
function startCountdown() {
  if (countdownTimerInterval) clearInterval(countdownTimerInterval);
  countdownTimerInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
}

function updateCountdown() {
  const prayers = ['bomdod', 'quyosh', 'peshin', 'asr', 'shom', 'xufton'];
  const names = {
    bomdod: 'Bomdod', quyosh: 'Quyosh', peshin: 'Peshin', asr: 'Asr', shom: 'Shom', xufton: 'Xufton'
  };

  const now = new Date();
  const currentSec = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

  let nextP = null;
  let minDiffSec = Infinity;

  prayers.forEach(p => {
    const t = prayerTimes[p] || apiTimes[p];
    if (!t || t === '--:--') return;
    const [hh, mm] = t.split(':').map(Number);
    const targetSec = hh * 3600 + mm * 60;
    const diff = targetSec > currentSec ? targetSec - currentSec : (86400 - currentSec) + targetSec;
    if (diff < minDiffSec) {
      minDiffSec = diff;
      nextP = p;
    }
  });

  const timerEl = document.getElementById('countdown-timer');
  const nameEl = document.getElementById('next-prayer-name');

  if (timerEl && nextP) {
    const h = Math.floor(minDiffSec / 3600);
    const m = Math.floor((minDiffSec % 3600) / 60);
    const s = minDiffSec % 60;
    timerEl.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    if (nameEl) nameEl.textContent = `(${names[nextP]})`;
  }
}

// ============ NEWS ============
let allNews = [];

function renderNews() {
  const container = document.getElementById('news-grid');
  if (!container) return;
  container.innerHTML = '';

  if (allNews.length === 0) {
    container.innerHTML = `
      <div class="min-w-[280px] w-[280px] md:w-auto bg-surface-container-lowest rounded-2xl p-6 text-center border border-surface-container-high col-span-full shadow-sm">
        <span class="material-symbols-outlined text-[36px] text-gold-shimmer mb-2">newspaper</span>
        <p class="text-on-surface-variant text-sm">${translations[currentLang]?.no_news || "Hozircha yangiliklar yo'q..."}</p>
      </div>
    `;
    return;
  }

  allNews.slice(0, 6).forEach((item) => {
    const card = document.createElement('div');
    card.className = 'min-w-[280px] w-[280px] md:w-auto bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(180,83,9,0.05)] border border-surface-container-high snap-start flex flex-col flex-shrink-0 cursor-pointer group hover:shadow-md transition-all';
    card.onclick = () => openNewsModal(item.title, item.desc || item.content, item.imgUrl, item.date);

    card.innerHTML = `
      <div class="h-36 bg-surface-variant relative overflow-hidden">
        ${item.imgUrl ? `<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="${item.imgUrl}" alt="${item.title || ''}" loading="lazy"/>` : `<div class="w-full h-full flex items-center justify-center text-on-surface-variant"><span class="material-symbols-outlined text-[36px] opacity-40">article</span></div>`}
        <div class="absolute top-2 left-2 bg-white/90 dark:bg-black/80 backdrop-blur px-2.5 py-0.5 rounded-full font-label-caps text-[10px] text-primary shadow-sm">
          ${item.date ? item.date.split(' ')[0] : 'Yangi'}
        </div>
      </div>
      <div class="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 class="font-body-md text-[15px] font-bold text-primary mb-2 line-clamp-2">${item.title || ''}</h3>
          <p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4 leading-relaxed">${item.desc || item.content || ''}</p>
        </div>
        <div class="mt-auto text-primary text-[12px] font-semibold flex items-center gap-1">
          <span>${translations[currentLang]?.read_more || "O'qish"}</span>
          <span class="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function loadNews() {
  if (!db) return;
  db.ref('news').on('value', snap => {
    allNews = [];
    if (snap.exists()) {
      snap.forEach(child => allNews.push({ id: child.key, ...child.val() }));
      allNews.reverse();
    }
    renderNews();
  });
}

window.openNewsModal = function(title, desc, imgUrl, date) {
  document.getElementById('news-modal-title').textContent = title || '';
  document.getElementById('news-modal-date').textContent = date || '';
  document.getElementById('news-modal-desc').innerHTML = parseMarkdown(desc || '');
  const imgBox = document.getElementById('news-modal-img');
  if (imgUrl) {
    imgBox.classList.remove('hidden');
    imgBox.querySelector('img').src = imgUrl;
  } else {
    imgBox.classList.add('hidden');
  }
  const modal = document.getElementById('news-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  history.pushState({ modalOpen: true }, "");
};

window.closeNewsModal = function() {
  const modal = document.getElementById('news-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
  if (history.state && history.state.modalOpen) {
    history.back();
  }
};

// ============ TEAM ============
let allTeam = [];

function renderTeam() {
  const container = document.getElementById('team-grid');
  if (!container) return;
  container.innerHTML = '';

  if (allTeam.length === 0) {
    container.innerHTML = `<p class="text-on-surface-variant text-sm col-span-full py-4 text-center">${translations[currentLang]?.no_team || "Hozircha jamoa a'zolari kiritilmagan..."}</p>`;
    return;
  }

  allTeam.forEach(member => {
    const card = document.createElement('div');
    card.className = 'min-w-[155px] w-[155px] md:w-auto bg-surface-container-lowest rounded-2xl p-4 flex flex-col items-center text-center shadow-[0_2px_8px_rgba(180,83,9,0.05)] border border-surface-container-high snap-start flex-shrink-0 cursor-pointer group hover:shadow-md hover:border-gold-shimmer/60 transition-all';
    card.onclick = () => openTeamModal(member);

    card.innerHTML = `
      <div class="w-20 h-20 rounded-full overflow-hidden bg-surface-container-high mb-3 border-2 border-surface-variant group-hover:border-gold-shimmer transition-colors shadow-sm flex items-center justify-center flex-shrink-0">
        ${member.imgUrl ? `<img class="w-full h-full object-cover" src="${member.imgUrl}" alt="${member.name || ''}" loading="lazy"/>` : `<div class="w-full h-full flex items-center justify-center text-on-surface-variant"><span class="material-symbols-outlined text-[36px]">person</span></div>`}
      </div>
      <h3 class="font-body-md text-[14px] font-bold text-primary group-hover:text-gold-metallic transition-colors leading-snug mb-1 line-clamp-2">${member.name || ''}</h3>
      <p class="font-label-caps text-[10px] text-on-surface-variant font-semibold tracking-wider">${member.role || ''}</p>
      
      <div class="mt-2.5 flex items-center gap-1 text-[11px] text-emerald-deep dark:text-emerald-light font-semibold opacity-80 group-hover:opacity-100">
        <span>Profil</span>
        <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
      </div>
    `;
    container.appendChild(card);
  });
}

function loadTeam() {
  if (!db) return;
  db.ref('team').on('value', snap => {
    allTeam = [];
    if (snap.exists()) {
      snap.forEach(child => {
        allTeam.push({ id: child.key, ...child.val() });
      });
    }
    renderTeam();
  });
}

window.openTeamModal = function(member) {
  document.getElementById('modal-name').textContent = member.name || '';
  document.getElementById('modal-role').textContent = member.role || '';
  
  const descEl = document.getElementById('modal-desc');
  if (descEl) {
    descEl.innerHTML = parseMarkdown(member.desc || "Ma'lumot kiritilmagan.");
  }

  const avatar = document.getElementById('modal-avatar');
  if (member.imgUrl) {
    avatar.innerHTML = `<img src="${member.imgUrl}" alt="${member.name || ''}" class="w-full h-full object-cover"/>`;
  } else {
    avatar.innerHTML = `<span class="material-symbols-outlined text-[64px] text-on-surface-variant">person</span>`;
  }

  const phoneEl = document.getElementById('modal-phone');
  if (member.phone && member.phone.trim()) {
    phoneEl.innerHTML = `<span class="material-symbols-outlined text-[16px]">call</span><span>${member.phone}</span>`;
    phoneEl.href = `tel:${member.phone.replace(/[^0-9+]/g, '')}`;
    phoneEl.classList.remove('hidden');
  } else {
    phoneEl.classList.add('hidden');
  }

  const tgEl = document.getElementById('modal-tg');
  if (member.tg && member.tg.trim()) {
    const cleanTg = member.tg.replace('@', '');
    tgEl.innerHTML = `<span class="material-symbols-outlined text-[16px]">send</span><span>@${cleanTg}</span>`;
    tgEl.href = `https://t.me/${cleanTg}`;
    tgEl.classList.remove('hidden');
  } else {
    tgEl.classList.add('hidden');
  }

  const modal = document.getElementById('team-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  history.pushState({ modalOpen: true }, "");
};

window.closeTeamModal = function() {
  const modal = document.getElementById('team-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
  if (history.state && history.state.modalOpen) {
    history.back();
  }
};

// ============ SPONSORS / FAXRIYLAR ============
let allSponsors = [];

function renderSponsors() {
  const container = document.getElementById('sponsors-grid');
  if (!container) return;
  container.innerHTML = '';

  if (allSponsors.length === 0) {
    container.innerHTML = `<p class="text-on-surface-variant text-sm col-span-full py-4 text-center">${translations[currentLang]?.no_sponsors || "Hozircha ma'lumot kiritilmagan."}</p>`;
    return;
  }

  allSponsors.forEach(sponsor => {
    const card = document.createElement('div');
    card.className = 'bg-surface-container-lowest rounded-2xl p-4 border-t-4 border-gold-metallic border-x border-b border-surface-container-high shadow-sm flex items-center gap-3.5 hover:shadow-md transition-all cursor-pointer';
    card.onclick = () => openSponsorModal(sponsor);

    card.innerHTML = `
      <div class="w-14 h-14 rounded-full overflow-hidden bg-surface-container flex-shrink-0 border border-surface-container-high">
        ${sponsor.imgUrl ? `<img src="${sponsor.imgUrl}" alt="${sponsor.name || ''}" class="w-full h-full object-cover" loading="lazy"/>` : `<div class="w-full h-full flex items-center justify-center text-gold-metallic"><span class="material-symbols-outlined text-[26px]">star</span></div>`}
      </div>
      <div>
        <h3 class="font-body-md text-[15px] font-bold text-primary">${sponsor.name || ''}</h3>
        <p class="text-xs text-on-surface-variant mt-0.5 line-clamp-2 leading-relaxed">${sponsor.desc || ''}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function loadSponsors() {
  if (!db) return;
  db.ref('sponsors').on('value', snap => {
    allSponsors = [];
    if (snap.exists()) {
      snap.forEach(child => allSponsors.push({ id: child.key, ...child.val() }));
      allSponsors.reverse();
    }
    renderSponsors();
  });
}

window.openSponsorModal = function(sponsor) {
  openTeamModal({
    name: sponsor.name,
    role: "Faxriy / Homiy",
    desc: sponsor.desc,
    imgUrl: sponsor.imgUrl
  });
};

// ============ CHARITY & UTILITIES ============
function renderCharity(data) {
  const container = document.getElementById('charity-grid');
  if (!container) return;

  const cardNum = data.general_card || '8600 0000 0000 0000';
  const cardOwner = data.general_owner || 'G\'oyib Yoronlar Jome Masjidi';

  const elecNoteTitle = translations[currentLang]?.electric_note_title || "Qanday to'lash kerak?";
  const elecNoteDesc = translations[currentLang]?.electric_note_desc || "Bu — <strong>yuridik hisob raqam</strong>. Payme yoki Click ilovasidan to'lash uchun:<br/><strong>Kommunal to'lovlar</strong> → <strong>Elektr energiyasi (yuridik)</strong> → hisob raqamni kiriting.";

  container.innerHTML = `
    <!-- Umumiy ehson kartasi (Faqat to'g'ridan-to'g'ri bank kartasi) -->
    <div class="bg-surface-container-lowest border-t-4 border-gold-metallic rounded-2xl shadow-sm border-x border-b border-surface-container-high p-5 flex flex-col justify-between">
      <div>
        <h3 class="font-headline-md text-[18px] font-bold text-primary mb-2 flex items-center gap-2">
          <span class="material-symbols-outlined text-emerald-deep text-[22px]">account_balance</span>
          <span data-i18n="charity_general">Umumiy ehson</span>
        </h3>
        <p class="text-xs text-on-surface-variant mb-4 leading-relaxed">Masjid ta'mirlash, tozalik va umumiy ehtiyojlari uchun ehson qiling.</p>
        
        <div class="bg-surface-container-low p-4 rounded-xl mb-4 border border-surface-variant flex justify-between items-center group">
          <div>
            <div class="font-label-caps text-[10px] text-on-surface-variant mb-1 font-bold">Uzcard / Humo</div>
            <div class="font-body-lg text-[17px] md:text-[18px] text-primary font-bold tracking-widest tabular-nums font-mono">${cardNum}</div>
            <div class="text-[12px] text-on-surface-variant mt-1 font-medium">${cardOwner}</div>
          </div>
          <button class="w-10 h-10 rounded-full bg-white dark:bg-surface-container border border-surface-variant flex items-center justify-center text-on-surface-variant hover:text-emerald-deep active:scale-90 transition-all copy-btn shadow-sm" data-copy="${cardNum}" title="Nusxa olish">
            <span class="material-symbols-outlined text-[18px]">content_copy</span>
          </button>
        </div>
      </div>

      <div class="p-3 bg-gold-shimmer/10 border border-gold-shimmer/30 rounded-xl text-xs text-gold-metallic dark:text-gold-shimmer font-medium flex items-center gap-2">
        <span class="material-symbols-outlined text-[18px]">info</span>
        <span>Karta raqamidan nusxa olib, Payme yoki Click ilovalari orqali to'lashingiz mumkin.</span>
      </div>
    </div>

    <!-- Kommunal to'lovlar (Domo to'lovi va Elektr eslatmasi shu yerda) -->
    <div class="bg-surface-container-lowest border-t-4 border-emerald-deep rounded-2xl shadow-sm border-x border-b border-surface-container-high p-5 flex flex-col justify-between">
      <div>
        <h3 class="font-headline-md text-[18px] font-bold text-primary mb-2 flex items-center gap-2">
          <span class="material-symbols-outlined text-emerald-deep text-[22px]">receipt_long</span>
          <span data-i18n="charity_utility">Kommunal to'lovlar</span>
        </h3>
        <p class="text-xs text-on-surface-variant mb-3 leading-relaxed">Masjidning oylik kommunal to'lovlarini to'lashda ishtirok eting.</p>

        <div class="space-y-2.5 mb-3">
          <!-- Elektr -->
          <div class="bg-surface-container-low p-2.5 rounded-xl border border-surface-variant flex justify-between items-center">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-sm shadow-sm">⚡</div>
              <div>
                <div class="font-label-caps text-[9px] text-on-surface-variant font-bold">Elektr (yuridik)</div>
                <div class="font-body-md text-[14px] font-bold text-primary tabular-nums font-mono">${data.util_elec || '470761'}</div>
              </div>
            </div>
            <button class="w-7 h-7 rounded-full bg-white dark:bg-surface-container border border-surface-variant flex items-center justify-center text-on-surface-variant hover:text-emerald-deep copy-btn" data-copy="${data.util_elec || '470761'}" title="Nusxa olish">
              <span class="material-symbols-outlined text-[13px]">content_copy</span>
            </button>
          </div>

          <!-- Suv -->
          <div class="bg-surface-container-low p-2.5 rounded-xl border border-surface-variant flex justify-between items-center">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-sm shadow-sm">💧</div>
              <div>
                <div class="font-label-caps text-[9px] text-on-surface-variant font-bold">Suv</div>
                <div class="font-body-md text-[14px] font-bold text-primary tabular-nums font-mono">${data.util_water || '160500025'}</div>
              </div>
            </div>
            <button class="w-7 h-7 rounded-full bg-white dark:bg-surface-container border border-surface-variant flex items-center justify-center text-on-surface-variant hover:text-emerald-deep copy-btn" data-copy="${data.util_water || '160500025'}" title="Nusxa olish">
              <span class="material-symbols-outlined text-[13px]">content_copy</span>
            </button>
          </div>

          <!-- Wi-Fi -->
          <div class="bg-surface-container-low p-2.5 rounded-xl border border-surface-variant flex justify-between items-center">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold text-sm shadow-sm">📶</div>
              <div>
                <div class="font-label-caps text-[9px] text-on-surface-variant font-bold">Wi-Fi (Internet)</div>
                <div class="font-body-md text-[14px] font-bold text-primary tabular-nums font-mono">${data.util_wifi || '1946506390'}</div>
              </div>
            </div>
            <button class="w-7 h-7 rounded-full bg-white dark:bg-surface-container border border-surface-variant flex items-center justify-center text-on-surface-variant hover:text-emerald-deep copy-btn" data-copy="${data.util_wifi || '1946506390'}" title="Nusxa olish">
              <span class="material-symbols-outlined text-[13px]">content_copy</span>
            </button>
          </div>

          ${data.util_gas ? `
            <div class="bg-surface-container-low p-2.5 rounded-xl border border-surface-variant flex justify-between items-center">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-sm shadow-sm">🔥</div>
                <div>
                  <div class="font-label-caps text-[9px] text-on-surface-variant font-bold">Gaz</div>
                  <div class="font-body-md text-[14px] font-bold text-primary tabular-nums font-mono">${data.util_gas}</div>
                </div>
              </div>
              <button class="w-7 h-7 rounded-full bg-white dark:bg-surface-container border border-surface-variant flex items-center justify-center text-on-surface-variant hover:text-emerald-deep copy-btn" data-copy="${data.util_gas}" title="Nusxa olish">
                <span class="material-symbols-outlined text-[13px]">content_copy</span>
              </button>
            </div>
          ` : ''}
        </div>

        <!-- Chiroyli Elektr To'lov Eslatmasi -->
        <div class="mb-3 p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-800 dark:text-amber-300 leading-relaxed shadow-sm">
          <div class="font-bold flex items-center gap-1.5 mb-1 text-amber-700 dark:text-amber-400">
            <span class="material-symbols-outlined text-[16px]">info</span>
            <span>${elecNoteTitle}</span>
          </div>
          <p>${elecNoteDesc}</p>
        </div>
      </div>

      <!-- Domo button under utilities -->
      <a class="w-full bg-emerald-deep hover:bg-emerald-light text-white font-label-caps text-[12px] py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm font-bold mt-1" href="https://domo.uz/donation/goyib-yoronlar" target="_blank">
        <span class="material-symbols-outlined text-[18px]">payment</span>
        <span data-i18n="domo_btn">domo.uz orqali kommunal to'lash</span>
      </a>
    </div>
  `;

  // Copy buttons
  container.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy');
      if (!text) return;
      navigator.clipboard.writeText(text).then(() => {
        const icon = btn.querySelector('.material-symbols-outlined');
        if (icon) {
          icon.textContent = 'check';
          setTimeout(() => icon.textContent = 'content_copy', 2000);
        }
      });
    });
  });
}

function loadCharity() {
  if (!db) return;
  db.ref('charity_info').on('value', snap => {
    const data = snap.val() || {};
    renderCharity(data);
  });
}

// ============ GALLERY ============
let allGallery = [];
let lightboxIdx = 0;

function renderGallery() {
  const container = document.getElementById('gallery-grid');
  if (!container) return;
  container.innerHTML = '';

  if (allGallery.length === 0) {
    container.innerHTML = `<p class="text-on-surface-variant text-sm col-span-full py-4 text-center">${translations[currentLang]?.no_gallery || "Hozircha rasmlar kiritilmagan..."}</p>`;
    return;
  }

  allGallery.forEach((img, idx) => {
    const item = document.createElement('div');
    item.className = 'aspect-square rounded-2xl overflow-hidden cursor-pointer border border-surface-container-high shadow-sm hover:border-gold-shimmer transition-all group';
    item.onclick = () => openLightbox(idx);
    item.innerHTML = `<img src="${img.url}" alt="Masjid galereya" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/>`;
    container.appendChild(item);
  });
}

function loadGallery() {
  if (!db) return;
  db.ref('gallery').on('value', snap => {
    allGallery = [];
    if (snap.exists()) {
      snap.forEach(child => allGallery.push({ id: child.key, ...child.val() }));
      allGallery.reverse();
    }
    renderGallery();
  });
}

window.openLightbox = function(idx) {
  if (!allGallery[idx]) return;
  lightboxIdx = idx;
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  img.src = allGallery[idx].url;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  history.pushState({ modalOpen: true }, "");
};

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
  if (history.state && history.state.modalOpen) {
    history.back();
  }
}

function changeLightbox(dir) {
  lightboxIdx = (lightboxIdx + dir + allGallery.length) % allGallery.length;
  document.getElementById('lightbox-img').src = allGallery[lightboxIdx].url;
}

document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev')?.addEventListener('click', () => changeLightbox(-1));
document.getElementById('lightbox-next')?.addEventListener('click', () => changeLightbox(1));
document.getElementById('lightbox-modal')?.addEventListener('click', (e) => {
  if (e.target === document.getElementById('lightbox-modal')) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') changeLightbox(-1);
  if (e.key === 'ArrowRight') changeLightbox(1);
});

// ============ DUA REQUEST FORM + TELEGRAM BOT ============
document.getElementById('dua-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('dua-name')?.value.trim();
  const messageInput = document.getElementById('dua-text')?.value.trim();
  if (!messageInput) return;

  const submitBtn = document.getElementById('dua-submit-btn');

  // Friday prayer block check (12:40 - 13:00)
  const now = new Date();
  const isFriday = now.getDay() === 5;
  const hours = now.getHours();
  const minutes = now.getMinutes();

  if (isFriday && hours === 12 && minutes >= 40) {
    const blockedEl = document.getElementById('dua-blocked');
    if (blockedEl) {
      blockedEl.classList.remove('hidden');
      setTimeout(() => blockedEl.classList.add('hidden'), 6000);
    }
    return;
  }

  try {
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-70');
    }

    const userName = nameInput || 'Yashirin';

    // 1. Save to Firebase
    if (db) {
      await db.ref('dua_requests').push({
        name: userName,
        message: messageInput,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      });
    }

    // 2. Format Telegram message & date
    const subDay = String(now.getDate()).padStart(2, '0');
    const subMonth = String(now.getMonth() + 1).padStart(2, '0');
    const subYear = now.getFullYear();
    const subHours = String(now.getHours()).padStart(2, '0');
    const subMins = String(now.getMinutes()).padStart(2, '0');
    const submissionTime = `${subDay}.${subMonth}.${subYear} ${subHours}:${subMins}`;

    const nextFriday = new Date(now);
    let daysUntilFriday = (5 - now.getDay() + 7) % 7;
    if (now.getDay() === 5 && (hours > 13 || (hours === 13 && minutes > 0))) {
      daysUntilFriday = 7;
    }
    nextFriday.setDate(now.getDate() + daysUntilFriday);
    const friDay = String(nextFriday.getDate()).padStart(2, '0');
    const friMonth = String(nextFriday.getMonth() + 1).padStart(2, '0');
    const hashtag = `#Juma_${friDay}_${friMonth}_${nextFriday.getFullYear()}`;

    // Telegram bot token & chats
    const botToken = atob('ODk2NTgwMDcyMjpBQUVYOGk2UmdEdndDTWxYWnVPLXZrMFdpNFM2OXZrZTlGWQ==');
    const chatIds = [atob('ODIyMDMzOTY1'), atob('MjkwODAzMzAw'), atob('ODI0NjM4NDk0Ng==')];
    const tgText = `🤲 Yangi duo so'rovi:\n\n👤 Ism: ${userName}\n📝 Matn: ${messageInput}\n\n🕒 Vaqt: ${submissionTime}\n🔖 Xeshteg: ${hashtag}`;

    chatIds.forEach(chatId => {
      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: tgText })
      }).catch(console.error);
    });

    document.getElementById('dua-form').reset();
    const successEl = document.getElementById('dua-success');
    if (successEl) {
      successEl.classList.remove('hidden');
      setTimeout(() => successEl.classList.add('hidden'), 6000);
    }
  } catch (err) {
    console.error('Dua yuborishda xatolik:', err);
    alert("Xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.");
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-70');
    }
  }
});

// ============ STARTUP ============
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  loadFirebasePrayerTimes();
  loadAladhanApiTimes();
  loadNews();
  loadTeam();
  loadSponsors();
  loadCharity();
  loadGallery();
});
