/* ============================================================
   G'oyib Yoronlar Jome Masjidi — v2
   Multi-language, Font Scaling, Firebase & Stitch Theme
   ============================================================ */

'use strict';

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
    hero_title: "G'OYIB YORONLAR JOME MASJIDI",
    hero_title_inline: "G'OYIB YORONLAR",
    hero_subtitle: "Namangan viloyati Pop tumani To'da qishlog'i",
    dua_title: "Jamoatdan duo olish",
    news_title: "Yangiliklar",
    text_size: "Matn:",
    dua_warning_note: "Eslatma: Juma kuni soat 12:40 dan 13:00 gacha duo yuborish vaqtincha to'xtatiladi.",
    dua_blocked: "Hozir Juma namozi vaqti (12:40 - 13:00). Duolar qabul qilinmaydi.",
    dua_name_ph: "Ismingiz (ixtiyoriy)",
    dua_msg_ph: "Duo mazmuni (Masalan: Bemorman, shifo so'rab duo qilishlarini so'rayman)",
    dua_submit: "Yuborish",
    dua_success: "Xabaringiz yuborildi. Kelayotgan juma namozida yetkaziladi!",
    masjid_time_label: "MASJIDDA O'QILISH VAQTI",
    api_time_label: "AZON",
    loading: "Yuklanmoqda...",
    next_prayer_in: "Keyingi namozga:",
    about_title: "Biz haqimizda",
    about_text: "G'oyib Yoronlar jome masjidi Namangan viloyati Pop tumani To'da qishlog'ida joylashgan maskandir. Masjid mahalliy aholi uchun nafaqat ibodatxona, balki ma'naviy tarbiya o'chog'i ham hisoblanadi.",
    team_title: "Masjid jamoasi",
    sponsors_title: "Faxriylar va homiylar",
    gallery_title: "Foto galereya",
    contact_title: "Biz bilan aloqa",
    charity_title: "Xayriya va ehson",
    charity_general: "Umumiy ehson",
    charity_utility: "Kommunal to'lovlar",
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
    hero_title: "ҒОЙИБ ЁРОНЛАР ЖОМЕ МАСЖИДИ",
    hero_title_inline: "ҒОЙИБ ЁРОНЛАР",
    hero_subtitle: "Наманган вилояти Поп тумани Тўда қишлоғи",
    dua_title: "Жамоатдан дуо олиш",
    news_title: "Янгиликлар",
    text_size: "Матн:",
    dua_warning_note: "Эслатма: Жума куни соат 12:40 дан 13:00 гача дуо юбориш вақтинча тўхтатилади.",
    dua_blocked: "Ҳозир Жума намози вақти (12:40 - 13:00). Дуолар қабул қилинмайди.",
    dua_name_ph: "Исмингиз (ихтиёрий)",
    dua_msg_ph: "Дуо мазмуни (Масалан: Беморман, шифо сўраб дуо қилишларини сўрайман)",
    dua_submit: "Юбориш",
    dua_success: "Хабарингиз юборилди. Келаётган жума намозида етказилади!",
    masjid_time_label: "МАСЖИДДА ЎҚИЛИШ ВАҚТИ",
    api_time_label: "АЗОН",
    loading: "Юкланмоқда...",
    next_prayer_in: "Кейинги намозга:",
    about_title: "Биз ҳақимизда",
    about_text: "Ғойиб Ёронlar жоме масжиди Наманган вилояти Поп тумани Тўда қишлоғида жойлашган. Масжид маҳаллий аҳоли учун нафақат ибодатхона, балки маънавий тарбия ўчоғи ҳам ҳисобланади.",
    team_title: "Масжид жамоаси",
    sponsors_title: "Фахрийлар ва ҳомийлар",
    gallery_title: "Фото галерея",
    contact_title: "Биз билан алоқа",
    charity_title: "Хайрия ва эҳсон",
    charity_general: "Умумий эҳсон",
    charity_utility: "Коммунал тўловлар",
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
    hero_title: "МЕЧЕТЬ «ГОЙИБ ЁРОНЛАР»",
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
    masjid_time_label: "ВРЕМЯ В МЕЧЕТИ",
    api_time_label: "АЗАН",
    loading: "Загрузка...",
    next_prayer_in: "До следующего намаза:",
    about_title: "О нас",
    about_text: "Соборная мечеть «Гойиб Ёронлар» расположена в селе Туда Папского района Наманганской области.",
    team_title: "Команда мечети",
    sponsors_title: "Почётные лица и спонсоры",
    gallery_title: "Фотогалерея",
    contact_title: "Контакты",
    charity_title: "Благотворительность",
    charity_general: "Общее пожертвование",
    charity_utility: "Коммунальные платежи",
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
    hero_title: "G'OYIB YORONLAR MOSQUE",
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
    masjid_time_label: "MOSQUE PRAYER TIME",
    api_time_label: "ADHAN",
    loading: "Loading...",
    next_prayer_in: "Next prayer in:",
    about_title: "About Us",
    about_text: "G'oyib Yoronlar Mosque is located in Tuda village, Pop district, Namangan region.",
    team_title: "Mosque team",
    sponsors_title: "Honorable sponsors",
    gallery_title: "Photo gallery",
    contact_title: "Contact Us",
    charity_title: "Charity & donation",
    charity_general: "General donation",
    charity_utility: "Utility payments",
    no_news: "No news available...",
    no_sponsors: "No information yet.",
    no_team: "No team members yet...",
    no_gallery: "No images yet..."
  }
};

let currentLang = localStorage.getItem('selected_language') || 'uz_lt';

function setLanguage(lang) {
  if (!translations[lang]) lang = 'uz_lt';
  currentLang = lang;
  localStorage.setItem('selected_language', lang);

  const langSelect = document.getElementById('lang-select');
  if (langSelect) langSelect.value = lang;

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

document.getElementById('lang-select')?.addEventListener('change', (e) => {
  setLanguage(e.target.value);
});

// ============ FONT SIZE SCALING ============
function setFontSize(size) {
  document.documentElement.classList.remove('font-scale-lg', 'font-scale-xl');
  if (size === 'lg') document.documentElement.classList.add('font-scale-lg');
  if (size === 'xl') document.documentElement.classList.add('font-scale-xl');
  localStorage.setItem('selected_font_size', size);
}

document.querySelectorAll('.font-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    setFontSize(btn.dataset.size);
  });
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

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        bottomItems.forEach(item => {
          item.classList.toggle('active', item.dataset.section === id);
        });
        desktopLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));
}
initNavSync();

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

  // Cached read for instant display
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

      // Quyosh vaqti API dan olinadi
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

// ============ ACTIVE PRAYER HIGHLIGHT (EXACT STITCH LOOK) ============
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

  // Agar barcha vaqtlardan oldin bo'lsa (yarim tundagi vaqt), Xufton active
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
      // Active styling — Rich Emerald Deep with Gold shimmer
      cell.className = 'prayer-cell bg-emerald-deep p-4 md:p-5 text-center flex flex-col items-center justify-between min-h-[145px] transition-all shadow-md';
      if (nameEl) nameEl.className = 'font-caps font-bold text-[12px] text-white tracking-wider mb-2 prayer-name';
      if (pillEl) pillEl.className = 'w-full bg-white/20 backdrop-blur-sm rounded-xl py-2 px-1 mb-2.5 prayer-pill';
      if (pillLabel) pillLabel.className = 'text-[10px] text-white/80 uppercase font-bold tracking-wider mb-0.5 prayer-pill-label';
      if (masjidTimeEl) masjidTimeEl.className = 'text-[26px] md:text-[28px] font-bold text-white tabular-nums leading-tight prayer-masjid';
      if (azonLabel) azonLabel.className = 'font-bold uppercase tracking-wider text-[11px] text-white/80 prayer-azon-label';
      if (apiTimeEl) apiTimeEl.className = 'font-bold tabular-nums text-[13px] text-white prayer-api';
    } else {
      // Normal styling — Clean surface with primary emerald accents
      cell.className = 'prayer-cell bg-surface-container-lowest p-4 md:p-5 text-center flex flex-col items-center justify-between min-h-[145px] transition-all';
      if (nameEl) nameEl.className = 'font-caps font-bold text-[12px] text-on-surface tracking-wider mb-2 prayer-name';
      if (pillEl) pillEl.className = 'w-full bg-surface-container-low rounded-xl py-2 px-1 mb-2.5 prayer-pill';
      if (pillLabel) pillLabel.className = 'text-[10px] text-on-surface-variant uppercase font-bold tracking-wider mb-0.5 prayer-pill-label';
      if (masjidTimeEl) masjidTimeEl.className = 'text-[26px] md:text-[28px] font-bold text-primary tabular-nums leading-tight prayer-masjid';
      if (azonLabel) azonLabel.className = 'font-bold uppercase tracking-wider text-[11px] text-on-surface-variant prayer-azon-label';
      if (apiTimeEl) apiTimeEl.className = 'font-bold tabular-nums text-[13px] text-on-surface prayer-api';
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
    container.innerHTML = `<p class="text-on-surface-variant text-sm col-span-full py-4 text-center">${translations[currentLang]?.no_news || "Hozircha yangiliklar yo'q..."}</p>`;
    return;
  }

  allNews.slice(0, 6).forEach((item) => {
    const card = document.createElement('div');
    card.className = 'bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container-high shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col group';
    card.onclick = () => openNewsModal(item.title, item.desc || item.content, item.imgUrl, item.date);

    card.innerHTML = `
      <div class="h-44 bg-surface-container relative overflow-hidden">
        ${item.imgUrl ? `<img src="${item.imgUrl}" alt="${item.title || ''}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/>` : `<div class="w-full h-full flex items-center justify-center text-on-surface-variant"><span class="material-symbols-outlined text-[48px] opacity-40">article</span></div>`}
        <div class="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md text-white font-caps text-[10px] px-2.5 py-0.5 rounded-full">${item.date ? item.date.split(' ')[0] : ''}</div>
      </div>
      <div class="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 class="font-headline text-[16px] font-bold text-primary group-hover:text-gold-metallic transition-colors line-clamp-2 mb-1.5">${item.title || ''}</h3>
          <p class="text-xs text-on-surface-variant line-clamp-3 leading-relaxed">${item.desc || item.content || ''}</p>
        </div>
        <div class="mt-3 flex items-center gap-1 text-xs text-primary font-bold">
          <span>Batafsil</span>
          <span class="material-symbols-outlined text-[15px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
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
  document.getElementById('news-modal-desc').textContent = desc || '';
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
};

window.closeNewsModal = function() {
  const modal = document.getElementById('news-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
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
    card.className = 'bg-surface-container-lowest rounded-2xl p-4 flex flex-col items-center text-center border border-surface-container-high shadow-sm hover:shadow-md transition-all cursor-pointer group';
    card.onclick = () => openTeamModal(member);

    card.innerHTML = `
      <div class="w-20 h-20 rounded-full overflow-hidden bg-surface-container mb-3 border-2 border-surface-container-high group-hover:border-gold-shimmer transition-colors">
        ${member.imgUrl ? `<img src="${member.imgUrl}" alt="${member.name || ''}" class="w-full h-full object-cover"/>` : `<div class="w-full h-full flex items-center justify-center text-on-surface-variant"><span class="material-symbols-outlined text-[36px]">person</span></div>`}
      </div>
      <h3 class="font-headline text-[15px] font-bold text-primary mb-0.5 group-hover:text-gold-metallic transition-colors">${member.name || ''}</h3>
      <p class="font-caps text-[10px] text-on-surface-variant">${member.role || ''}</p>
    `;
    container.appendChild(card);
  });
}

function loadTeam() {
  if (!db) return;
  db.ref('team').on('value', snap => {
    allTeam = [];
    if (snap.exists()) {
      snap.forEach(child => allTeam.push({ id: child.key, ...child.val() }));
    }
    renderTeam();
  });
}

window.openTeamModal = function(member) {
  document.getElementById('modal-name').textContent = member.name || '';
  document.getElementById('modal-role').textContent = member.role || '';
  document.getElementById('modal-desc').textContent = member.desc || '';

  const avatar = document.getElementById('modal-avatar');
  if (member.imgUrl) {
    avatar.innerHTML = `<img src="${member.imgUrl}" alt="" class="w-full h-full object-cover"/>`;
  } else {
    avatar.innerHTML = `<span class="material-symbols-outlined text-[40px]">person</span>`;
  }

  const phoneEl = document.getElementById('modal-phone');
  if (member.phone) {
    phoneEl.textContent = `📞 ${member.phone}`;
    phoneEl.href = `tel:${member.phone.replace(/[^0-9+]/g, '')}`;
    phoneEl.classList.remove('hidden');
  } else {
    phoneEl.classList.add('hidden');
  }

  const tgEl = document.getElementById('modal-tg');
  if (member.tg) {
    const cleanTg = member.tg.replace('@', '');
    tgEl.textContent = `✈️ @${cleanTg}`;
    tgEl.href = `https://t.me/${cleanTg}`;
    tgEl.classList.remove('hidden');
  } else {
    tgEl.classList.add('hidden');
  }

  const modal = document.getElementById('team-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
};

window.closeTeamModal = function() {
  const modal = document.getElementById('team-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
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
        ${sponsor.imgUrl ? `<img src="${sponsor.imgUrl}" alt="${sponsor.name || ''}" class="w-full h-full object-cover"/>` : `<div class="w-full h-full flex items-center justify-center text-gold-metallic"><span class="material-symbols-outlined text-[26px]">star</span></div>`}
      </div>
      <div>
        <h3 class="font-headline text-[15px] font-bold text-primary">${sponsor.name || ''}</h3>
        <p class="text-xs text-on-surface-variant mt-0.5 line-clamp-2">${sponsor.desc || ''}</p>
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

// ============ CHARITY ============
function renderCharity(data) {
  const container = document.getElementById('charity-grid');
  if (!container) return;

  const cardNum = data.general_card || '8600 0000 0000 0000';
  const cardOwner = data.general_owner || 'G\'oyib Yoronlar Masjidi';

  container.innerHTML = `
    <!-- Umumiy ehson kartasi -->
    <div class="bg-surface-container-lowest border-t-4 border-gold-metallic rounded-2xl shadow-sm border-x border-b border-surface-container-high p-5 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 mb-3">
          <span class="material-symbols-outlined text-emerald-deep text-[24px]">account_balance</span>
          <h3 class="font-headline text-lg font-bold text-primary" data-i18n="charity_general">Umumiy ehson</h3>
        </div>
        <p class="text-xs text-on-surface-variant mb-3 leading-relaxed">Masjid ta'mirlash, tozalik va umumiy ehtiyojlari uchun ehson qiling.</p>
        
        <div class="bg-surface-container-low p-3.5 rounded-xl mb-3 border border-surface-variant flex justify-between items-center">
          <div>
            <div class="font-caps text-[9px] text-on-surface-variant">Uzcard / Humo</div>
            <div class="text-[17px] font-bold text-primary tracking-widest tabular-nums font-mono">${cardNum}</div>
            <div class="text-xs text-on-surface-variant mt-0.5">${cardOwner}</div>
          </div>
          <button class="w-9 h-9 rounded-full bg-white dark:bg-surface-container border border-surface-variant flex items-center justify-center text-on-surface-variant hover:text-emerald-deep active:scale-90 transition-all copy-btn" data-copy="${cardNum}" title="Nusxa olish">
            <span class="material-symbols-outlined text-[18px]">content_copy</span>
          </button>
        </div>
      </div>

      <a class="w-full bg-emerald-deep hover:bg-emerald-light text-white font-caps text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm mt-2" href="https://domo.uz/donation/goyib-yoronlar" target="_blank">
        <span class="material-symbols-outlined text-[18px]">payment</span>
        <span>domo.uz orqali ehson</span>
      </a>
    </div>

    <!-- Kommunal to'lovlar -->
    <div class="bg-surface-container-lowest border-t-4 border-emerald-deep rounded-2xl shadow-sm border-x border-b border-surface-container-high p-5">
      <div class="flex items-center gap-2 mb-3">
        <span class="material-symbols-outlined text-emerald-deep text-[24px]">receipt_long</span>
        <h3 class="font-headline text-lg font-bold text-primary" data-i18n="charity_utility">Kommunal to'lovlar</h3>
      </div>
      <p class="text-xs text-on-surface-variant mb-3 leading-relaxed">Masjidning oylik kommunal to'lovlarini to'lashda ishtirok eting.</p>

      <div class="space-y-2">
        ${data.util_elec ? `
          <div class="bg-surface-container-low p-2.5 rounded-xl border border-surface-variant flex justify-between items-center">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-sm">⚡</div>
              <div>
                <div class="font-caps text-[9px] text-on-surface-variant">Elektr (yuridik)</div>
                <div class="text-[13px] font-bold text-primary tabular-nums font-mono">${data.util_elec}</div>
              </div>
            </div>
            <button class="w-7 h-7 rounded-full bg-white dark:bg-surface-container border border-surface-variant flex items-center justify-center text-on-surface-variant copy-btn" data-copy="${data.util_elec}"><span class="material-symbols-outlined text-[14px]">content_copy</span></button>
          </div>
        ` : ''}
        ${data.util_water ? `
          <div class="bg-surface-container-low p-2.5 rounded-xl border border-surface-variant flex justify-between items-center">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-sm">💧</div>
              <div>
                <div class="font-caps text-[9px] text-on-surface-variant">Suv</div>
                <div class="text-[13px] font-bold text-primary tabular-nums font-mono">${data.util_water}</div>
              </div>
            </div>
            <button class="w-7 h-7 rounded-full bg-white dark:bg-surface-container border border-surface-variant flex items-center justify-center text-on-surface-variant copy-btn" data-copy="${data.util_water}"><span class="material-symbols-outlined text-[14px]">content_copy</span></button>
          </div>
        ` : ''}
        ${data.util_gas ? `
          <div class="bg-surface-container-low p-2.5 rounded-xl border border-surface-variant flex justify-between items-center">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-sm">🔥</div>
              <div>
                <div class="font-caps text-[9px] text-on-surface-variant">Gaz</div>
                <div class="text-[13px] font-bold text-primary tabular-nums font-mono">${data.util_gas}</div>
              </div>
            </div>
            <button class="w-7 h-7 rounded-full bg-white dark:bg-surface-container border border-surface-variant flex items-center justify-center text-on-surface-variant copy-btn" data-copy="${data.util_gas}"><span class="material-symbols-outlined text-[14px]">content_copy</span></button>
          </div>
        ` : ''}
      </div>
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
    item.className = 'aspect-square rounded-xl overflow-hidden cursor-pointer border border-surface-container-high shadow-sm hover:border-gold-shimmer transition-all group';
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
};

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
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

// ============ DUA REQUEST FORM ============
document.getElementById('dua-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('dua-name')?.value.trim() || 'Anonim';
  const text = document.getElementById('dua-text')?.value.trim();
  if (!text) return;

  // Friday prayer block check (12:40 - 13:00)
  const now = new Date();
  const isFriday = now.getDay() === 5;
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  if (isFriday && currentMinutes >= 760 && currentMinutes <= 780) {
    const blockedEl = document.getElementById('dua-blocked');
    if (blockedEl) {
      blockedEl.classList.remove('hidden');
      setTimeout(() => blockedEl.classList.add('hidden'), 5000);
    }
    return;
  }

  try {
    if (db) {
      await db.ref('dua_requests').push({
        name,
        message: text,
        timestamp: Date.now(),
        date: now.toLocaleString('uz-UZ')
      });
    }
    document.getElementById('dua-form').reset();
    const successEl = document.getElementById('dua-success');
    if (successEl) {
      successEl.classList.remove('hidden');
      setTimeout(() => successEl.classList.add('hidden'), 5000);
    }
  } catch (err) {
    console.warn('Dua yuborish xatosi:', err);
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
