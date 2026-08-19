/* ============================================================
   G'oyib Yoronlar Jome Masjidi — v2
   Multi-language (100% Complete Cyrillic, Latin, Russian, English),
   Custom Floating Dropdowns (Language & Font Size Select),
   History Back Navigation, Telegram Bot, Markdown & Stitch Theme
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

// ============ TRANSLATIONS (100% PURE & COMPLETE) ============
const translations = {
  "uz_lt": {
    "bomdod": "BOMDOD",
    "quyosh": "QUYOSH",
    "peshin": "PESHIN",
    "asr": "ASR",
    "shom": "SHOM",
    "xufton": "XUFTON",
    "official_site_tag": "G'oyib Yoronlar Jome Masjidi Rasmiy Sayti",
    "site_subheading": "Jome Masjidi",
    "hero_mosque_tag": "Jome Masjidi",
    "nav_home": "Bosh sahifa",
    "nav_prayers": "Namoz",
    "nav_about": "Namoz",
    "nav_team": "Jamoa",
    "nav_news": "Yangiliklar",
    "nav_sponsors": "Faxriylar",
    "nav_gallery": "Galereya",
    "nav_dua": "Duo",
    "nav_contact": "Aloqa",
    "nav_donate": "Ehson",
    "hero_title": "Xush kelibsiz",
    "hero_title_inline": "G'OYIB YORONLAR",
    "hero_subtitle": "Namangan viloyati, Pop tumani, To'da qishlog'i",
    "next_prayer_in": "Keyingi namozga:",
    "prayers_heading": "Namoz Vaqtlari",
    "masjid_time_label": "Masjidda o'qilish vaqti",
    "api_time_label": "Azon",
    "sunrise_label": "Chiqishi",
    "location_name": "To'da",
    "about_title": "Biz haqimizda",
    "about_text": "G'oyib Yoronlar jome masjidi Namangan viloyati Pop tumani To'da qishlog'ida joylashgan maskandir. Masjid mahalliy aholi uchun nafaqat ibodatxona, balki ma'naviy tarbiya o'chog'i ham hisoblanadi.",
    "team_title": "Masjid Jamoasi",
    "team_subtitle": "Barcha xodimlar va imom-xatiblar (batafsil ko'rish uchun bosing)",
    "sponsors_title": "Faxriylar va homiylar",
    "sponsor_role": "Faxriy / Homiy",
    "news_title": "Yangiliklar",
    "charity_title": "Xayriya va ehson",
    "charity_general": "Umumiy ehson",
    "charity_general_desc": "Masjid ta'mirlash, tozalik va umumiy ehtiyojlari uchun ehson qiling.",
    "charity_card_info": "Karta raqamidan nusxa olib, Payme yoki Click ilovalari orqali to'lashingiz mumkin.",
    "charity_utility": "Kommunal to'lovlar",
    "charity_utility_desc": "Masjidning oylik kommunal to'lovlarini to'lashda ishtirok eting.",
    "util_elec_label": "Elektr (yuridik)",
    "util_water_label": "Suv",
    "util_wifi_label": "Wi-Fi (Internet)",
    "util_gas_label": "Gaz",
    "domo_btn": "domo.uz orqali kommunal to'lash",
    "electric_note_title": "Qanday to'lash kerak?",
    "electric_note_desc": "Bu — <strong>yuridik hisob raqam</strong>. Payme yoki Click ilovasidan to'lash uchun:<br/><strong>Kommunal to'lovlar</strong> → <strong>Elektr energiyasi (yuridik)</strong> → hisob raqamni kiriting.",
    "gallery_title": "Foto galereya",
    "gallery_subtitle": "Masjidimizning go'zal me'moriy ko'rinishlari va jamoat tadbirlaridan olingan yorqin lahzalar bilan tanishing.",
    "dua_title": "Jamoatdan duo olish",
    "dua_warning_note": "Eslatma: Juma kuni soat 12:40 dan 13:00 gacha duo yuborish vaqtincha to'xtatiladi.",
    "dua_blocked": "Hozir Juma namozi vaqti (12:40 - 13:00). Duolar qabul qilinmaydi.",
    "dua_name_ph": "Ismingiz (ixtiyoriy)",
    "dua_msg_ph": "Duo mazmuni (Masalan: Bemorman, shifo so'rab duo qilishlarini so'rayman)",
    "dua_submit": "Yuborish",
    "dua_success": "Xabaringiz yuborildi. Kelayotgan juma namozida yetkaziladi!",
    "contact_title": "Biz bilan aloqa",
    "contact_address_label": "Manzil",
    "contact_address_val": "Namangan viloyati, Pop tumani, To'da qishlog'i",
    "contact_tg_label": "Telegram kanal",
    "read_more": "O'qish",
    "card_profile_btn": "Profil",
    "font_norm": "Odatiy (100%)",
    "font_lg": "Katta (115%)",
    "font_xl": "Juda katta (130%)",
    "bottom_nav_home": "BOSH",
    "bottom_nav_prayers": "NAMOZ",
    "bottom_nav_charity": "XAYRIYA",
    "bottom_nav_gallery": "GALEREYA",
    "bottom_nav_dua": "DUO",
    "no_news": "Hozircha yangiliklar yo'q...",
    "no_sponsors": "Hozircha ma'lumot kiritilmagan.",
    "no_team": "Hozircha jamoa a'zolari kiritilmagan...",
    "no_gallery": "Hozircha rasmlar kiritilmagan...",
    "updated_prefix": "YANGILANDI:",
    "prev_page": "‹ Oldingi",
    "next_page": "Keyingi ›",
    "monthly_calendar_btn": "Oylik taqvim",
    "monthly_calendar_title": "Oylik namoz taqvimi",
    "monthly_calendar_sub": "G'oyib Yoronlar Jome Masjidi (To'da qishlog'i, Pop tumani)",
    "th_day": "Kun",
    "th_weekday": "Hafta kuni",
    "th_hijri": "Hijriy",
    "th_shom_iftor": "Shom (Iftor)",
    "print_btn": "Chop etish",
    "calendar_coords_note": "Pop tumani, To'da qishlog'i (40.8642° N, 71.2271° E) hisobi bo'yicha.",
    "hanafi_method": "Hanafiy mazhabi bo'yicha",
    "today_badge": "Bugun"
  },
  "uz_cy": {
    "bomdod": "БОМДОД",
    "quyosh": "ҚУЁШ",
    "peshin": "ПЕШИН",
    "asr": "АСР",
    "shom": "ШОМ",
    "xufton": "ХУФТОН",
    "official_site_tag": "Ғойиб Ёронлар Жоме Масжиди Расмий Сайти",
    "site_subheading": "Жоме Масжиди",
    "hero_mosque_tag": "Жоме Масжиди",
    "nav_home": "Бош саҳифа",
    "nav_prayers": "Намоз",
    "nav_about": "Намоз",
    "nav_team": "Жамоа",
    "nav_news": "Янгиликлар",
    "nav_sponsors": "Фахрийлар",
    "nav_gallery": "Галерея",
    "nav_dua": "Дуо",
    "nav_contact": "Алоқа",
    "nav_donate": "Эҳсон",
    "hero_title": "Хуш келибсиз",
    "hero_title_inline": "ҒОЙИБ ЁРОНЛАР",
    "hero_subtitle": "Наманган вилояти, Поп тумани, Тўда қишлоғи",
    "next_prayer_in": "Кейинги намозга:",
    "prayers_heading": "Намоз Вақтлари",
    "masjid_time_label": "Масжидда ўқилиш вақти",
    "api_time_label": "Азон",
    "sunrise_label": "Чиқиши",
    "location_name": "Тўда",
    "about_title": "Биз ҳақимизда",
    "about_text": "Ғойиб Ёронлар жоме масжиди Наманган вилояти Поп тумани Тўда қишлоғида жойлашган маскандир. Масжид маҳаллий аҳоли учун нафақат ибодатхона, балки маънавий тарбия ўчоғи ҳам ҳисобланади.",
    "team_title": "Масжид Жамоаси",
    "team_subtitle": "Барча ходимлар ва имом-хатиблар (батафсил кўриш учун босинг)",
    "sponsors_title": "Фахрийлар ва ҳомийлар",
    "sponsor_role": "Фахрий / Ҳомий",
    "news_title": "Янгиликлар",
    "charity_title": "Хайрия ва эҳсон",
    "charity_general": "Умумий эҳсон",
    "charity_general_desc": "Масжид таъмирлаш, тозалик ва умумий эҳтиёжлари учун эҳсон қилинг.",
    "charity_card_info": "Карта рақамидан нусха олиб, Payme ёки Click иловалари орқали тўлашингиз мумкин.",
    "charity_utility": "Коммунал тўловлар",
    "charity_utility_desc": "Масжиднинг ойлик коммунал тўловларини тўлашда иштирок этинг.",
    "util_elec_label": "Электр (юридик)",
    "util_water_label": "Сув",
    "util_wifi_label": "Wi-Fi (Интернет)",
    "util_gas_label": "Газ",
    "domo_btn": "domo.uz орқали коммунал тўлаш",
    "electric_note_title": "Қандай тўлаш керак?",
    "electric_note_desc": "Бу — <strong>юридик ҳисоб рақам</strong>. Payme ёки Click иловасидан тўлаш учун:<br/><strong>Коммунал тўловлар</strong> → <strong>Электр энергияси (юридик)</strong> → ҳисоб рақамни киритинг.",
    "gallery_title": "Фото галерея",
    "gallery_subtitle": "Масжидимизнинг гўзал меъморий кўринишлари ва жамоат тадбирларидан олинган ёрқин лаҳзалар билан танишинг.",
    "dua_title": "Жамоатдан дуо олиш",
    "dua_warning_note": "Эслатма: Жума куни соат 12:40 дан 13:00 гача дуо юбориш вақтинча тўхтатилади.",
    "dua_blocked": "Ҳозир Жума намози вақти (12:40 - 13:00). Дуолар қабул қилинмайди.",
    "dua_name_ph": "Исмингиз (ихтиёрий)",
    "dua_msg_ph": "Дуо мазмуни (Масалан: Беморман, шифо сўраб дуо қилишларини сўрайман)",
    "dua_submit": "Юбориш",
    "dua_success": "Хабарингиз юборилди. Келаётган жума намозида етказилади!",
    "contact_title": "Биз билан алоқа",
    "contact_address_label": "Манзил",
    "contact_address_val": "Наманган вилояти, Поп тумани, Тўда қишлоғи",
    "contact_tg_label": "Телеграм канал",
    "read_more": "Ўқиш",
    "card_profile_btn": "Профиль",
    "font_norm": "Одатий (100%)",
    "font_lg": "Катта (115%)",
    "font_xl": "Жуда катта (130%)",
    "bottom_nav_home": "БОШ",
    "bottom_nav_prayers": "НАМОЗ",
    "bottom_nav_charity": "ХАЙРИЯ",
    "bottom_nav_gallery": "ГАЛЕРЕЯ",
    "bottom_nav_dua": "ДУО",
    "no_news": "Ҳозирча янгиликлар йўқ...",
    "no_sponsors": "Ҳозирча маълумот киритилмаган.",
    "no_team": "Ҳозирча жамоа аъзолари киритилмаган...",
    "no_gallery": "Ҳозирча расмлар киритилмаган...",
    "updated_prefix": "ЯНГИЛАНДИ:",
    "prev_page": "‹ Олдинги",
    "next_page": "Кейинги ›",
    "monthly_calendar_btn": "Ойлик тақвим",
    "monthly_calendar_title": "Ойлик намоз тақвими",
    "monthly_calendar_sub": "Ғойиб Ёронлар Жоме Масжиди (Тўда қишлоғи, Поп тумани)",
    "th_day": "Кун",
    "th_weekday": "Ҳафта куни",
    "th_hijri": "Ҳижрий",
    "th_shom_iftor": "Шом (Ифтор)",
    "print_btn": "Чоп этиш",
    "calendar_coords_note": "Поп тумани, Тўда қишлоғи (40.8642° N, 71.2271° E) ҳисоби бўйича.",
    "hanafi_method": "Ҳанафий мазҳаби бўйича",
    "today_badge": "Бугун"
  },
  "ru": {
    "bomdod": "ФАДЖР",
    "quyosh": "ВОСХОД",
    "peshin": "ЗУХР",
    "asr": "АСР",
    "shom": "МАГРИБ",
    "xufton": "ИША",
    "official_site_tag": "Официальный сайт соборной мечети «Гойиб Ёронлар»",
    "site_subheading": "Соборная Мечеть",
    "hero_mosque_tag": "Соборная Мечеть",
    "nav_home": "Главная",
    "nav_prayers": "Намаз",
    "nav_about": "Намаз",
    "nav_team": "Команда",
    "nav_news": "Новости",
    "nav_sponsors": "Ветераны",
    "nav_gallery": "Галерея",
    "nav_dua": "Молитва",
    "nav_contact": "Контакты",
    "nav_donate": "Пожертвовать",
    "hero_title": "Добро пожаловать",
    "hero_title_inline": "ГОЙИБ ЁРОНЛАР",
    "hero_subtitle": "Наманганская область, Папский район, село Туда",
    "next_prayer_in": "До следующего намаза:",
    "prayers_heading": "Время Намаза",
    "masjid_time_label": "Время в мечети",
    "api_time_label": "Азан",
    "sunrise_label": "Восход",
    "location_name": "Туда",
    "about_title": "О нас",
    "about_text": "Соборная мечеть «Гойиб Ёронлар» расположена в селе Туда Папского района Наманганской области. Мечеть является для местных жителей местом поклонения и духовного воспитания.",
    "team_title": "Команда мечети",
    "team_subtitle": "Все сотрудники и имамы (нажмите для подробностей)",
    "sponsors_title": "Почётные лица и спонсоры",
    "sponsor_role": "Почётный спонсор",
    "news_title": "Новости",
    "charity_title": "Благотворительность",
    "charity_general": "Общее пожертвование",
    "charity_general_desc": "Пожертвуйте на ремонт, чистоту и общие нужды мечети.",
    "charity_card_info": "Скопируйте номер карты и совершите платёж через Payme или Click.",
    "charity_utility": "Коммунальные платежи",
    "charity_utility_desc": "Примите участие в оплате ежемесячных коммунальных услуг мечети.",
    "util_elec_label": "Электроэнергия (юрид.)",
    "util_water_label": "Вода",
    "util_wifi_label": "Wi-Fi (Интернет)",
    "util_gas_label": "Газ",
    "domo_btn": "Оплата коммунальных через domo.uz",
    "electric_note_title": "Как оплатить?",
    "electric_note_desc": "Это — <strong>юридический счёт</strong>. Для оплаты через Payme или Click:<br/><strong>Коммунальные платежи</strong> → <strong>Электроэнергия (юридический)</strong> → введите номер счёта.",
    "gallery_title": "Фотогалерея",
    "gallery_subtitle": "Фотохроника жизни и красоты мечети",
    "dua_title": "Получить молитву от джамаата",
    "dua_warning_note": "Примечание: По пятницам с 12:40 до 13:00 приём молитв приостанавливается.",
    "dua_blocked": "Сейчас время Пятничного намаза (12:40 - 13:00). Молитвы не принимаются.",
    "dua_name_ph": "Ваше имя (необязательно)",
    "dua_msg_ph": "Текст молитвы (Например: Прошу помолиться о моём выздоровлении)",
    "dua_submit": "Отправить",
    "dua_success": "Ваше сообщение отправлено. Оно будет передано на пятничном намазе!",
    "contact_title": "Контакты",
    "contact_address_label": "Адрес",
    "contact_address_val": "Наманганская область, Папский район, село Туда",
    "contact_tg_label": "Телеграм канал",
    "read_more": "Читать",
    "card_profile_btn": "Профиль",
    "font_norm": "Обычный (100%)",
    "font_lg": "Крупный (115%)",
    "font_xl": "Очень крупный (130%)",
    "bottom_nav_home": "ГЛАВНАЯ",
    "bottom_nav_prayers": "НАМАЗ",
    "bottom_nav_charity": "ПОЖЕРТВОВАНИЕ",
    "bottom_nav_gallery": "ГАЛЕРЕЯ",
    "bottom_nav_dua": "МОЛИТВА",
    "no_news": "Новостей пока нет...",
    "no_sponsors": "Данных пока нет.",
    "no_team": "Данных пока нет...",
    "no_gallery": "Фотографий пока нет...",
    "updated_prefix": "ОБНОВЛЕНО:",
    "prev_page": "‹ Назад",
    "next_page": "Вперед ›",
    "monthly_calendar_btn": "Месячный календарь",
    "monthly_calendar_title": "Месячное расписание намаза",
    "monthly_calendar_sub": "Соборная мечеть «Гойиб Ёронлар» (село Туда, Папский район)",
    "th_day": "День",
    "th_weekday": "День недели",
    "th_hijri": "Хиджра",
    "th_shom_iftor": "Магриб (Ифтар)",
    "print_btn": "Печать",
    "calendar_coords_note": "По координатам Папского района, с. Туда (40.8642° N, 71.2271° E).",
    "hanafi_method": "По ханафитскому мазхабу",
    "today_badge": "Сегодня"
  },
  "en": {
    "bomdod": "FAJR",
    "quyosh": "SUNRISE",
    "peshin": "DHUHR",
    "asr": "ASR",
    "shom": "MAGHRIB",
    "xufton": "ISHA",
    "official_site_tag": "Official Website of G'oyib Yoronlar Mosque",
    "site_subheading": "Jome Mosque",
    "hero_mosque_tag": "Jome Mosque",
    "nav_home": "Home",
    "nav_prayers": "Prayers",
    "nav_about": "Prayers",
    "nav_team": "Team",
    "nav_news": "News",
    "nav_sponsors": "Sponsors",
    "nav_gallery": "Gallery",
    "nav_dua": "Dua",
    "nav_contact": "Contact",
    "nav_donate": "Donate",
    "hero_title": "Welcome",
    "hero_title_inline": "G'OYIB YORONLAR",
    "hero_subtitle": "Tuda village, Pop district, Namangan region",
    "next_prayer_in": "Next prayer in:",
    "prayers_heading": "Prayer Times",
    "masjid_time_label": "Mosque prayer time",
    "api_time_label": "Adhan",
    "sunrise_label": "Sunrise",
    "location_name": "Tuda",
    "about_title": "About Us",
    "about_text": "G'oyib Yoronlar Mosque is located in Tuda village, Pop district, Namangan region. It serves the local community as both a place of worship and a spiritual center.",
    "team_title": "Mosque Team",
    "team_subtitle": "All staff and imams (click to view details)",
    "sponsors_title": "Honorable sponsors",
    "sponsor_role": "Honorable sponsor",
    "news_title": "News",
    "charity_title": "Charity & donation",
    "charity_general": "General donation",
    "charity_general_desc": "Donate for maintenance, cleanliness and general needs of the mosque.",
    "charity_card_info": "Copy the card number to make a donation via Payme or Click.",
    "charity_utility": "Utility payments",
    "charity_utility_desc": "Participate in paying the monthly utility bills of the mosque.",
    "util_elec_label": "Electricity (legal)",
    "util_water_label": "Water",
    "util_wifi_label": "Wi-Fi (Internet)",
    "util_gas_label": "Gas",
    "domo_btn": "Pay utilities via domo.uz",
    "electric_note_title": "How to pay?",
    "electric_note_desc": "This is a <strong>legal account number</strong>. To pay via Payme or Click:<br/><strong>Utility payments</strong> → <strong>Electricity (legal)</strong> → enter the account number.",
    "gallery_title": "Photo gallery",
    "gallery_subtitle": "Photographic chronicle of mosque life and beauty",
    "dua_title": "Prayer request",
    "dua_warning_note": "Note: On Fridays from 12:40 to 13:00, prayer requests are temporarily suspended.",
    "dua_blocked": "It is currently Friday prayer time (12:40 - 13:00). Requests not accepted.",
    "dua_name_ph": "Your name (optional)",
    "dua_msg_ph": "Prayer details (E.g. Please pray for my health and recovery)",
    "dua_submit": "Submit",
    "dua_success": "Your message has been sent successfully!",
    "contact_title": "Contact Us",
    "contact_address_label": "Address",
    "contact_address_val": "Tuda village, Pop district, Namangan region",
    "contact_tg_label": "Telegram channel",
    "read_more": "Read",
    "card_profile_btn": "Profile",
    "font_norm": "Standard (100%)",
    "font_lg": "Large (115%)",
    "font_xl": "Extra Large (130%)",
    "bottom_nav_home": "HOME",
    "bottom_nav_prayers": "PRAYERS",
    "bottom_nav_charity": "CHARITY",
    "bottom_nav_gallery": "GALLERY",
    "bottom_nav_dua": "DUA",
    "no_news": "No news available...",
    "no_sponsors": "No information yet.",
    "no_team": "No team members yet...",
    "no_gallery": "No images yet...",
    "updated_prefix": "UPDATED:",
    "prev_page": "‹ Previous",
    "next_page": "Next ›",
    "monthly_calendar_btn": "Monthly Calendar",
    "monthly_calendar_title": "Monthly Prayer Timetable",
    "monthly_calendar_sub": "G'oyib Yoronlar Mosque (Tuda village, Pop district)",
    "th_day": "Day",
    "th_weekday": "Weekday",
    "th_hijri": "Hijri",
    "th_shom_iftor": "Maghrib (Iftar)",
    "print_btn": "Print",
    "calendar_coords_note": "Calculated for Pop district, Tuda village (40.8642° N, 71.2271° E).",
    "hanafi_method": "Hanafi school",
    "today_badge": "Today"
  }
};

const langMeta = {
  uz_lt: { flag: "🇺🇿", name: "O'zbekcha", code: "O'z" },
  uz_cy: { flag: "🇺🇿", name: "Ўзбекча", code: "Ўз" },
  ru: { flag: "🇷🇺", name: "Русский", code: "Ру" },
  en: { flag: "🇺🇸", name: "English", code: "En" }
};

let currentLang = localStorage.getItem('selected_language') || 'uz_cy';

function setLanguage(lang) {
  if (!translations[lang]) lang = 'uz_cy';
  currentLang = lang;
  localStorage.setItem('selected_language', lang);

  // Update language dropdown labels
  document.querySelectorAll('.lang-current-flag').forEach(el => el.textContent = langMeta[lang].flag);
  document.querySelectorAll('.lang-current-name').forEach(el => el.textContent = langMeta[lang].name);
  document.querySelectorAll('.lang-current-code').forEach(el => el.textContent = langMeta[lang].code);

  // Update checkmarks in language menu
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
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Placeholders
  const nameInput = document.getElementById('dua-name');
  if (nameInput && translations[lang].dua_name_ph) nameInput.placeholder = translations[lang].dua_name_ph;
  const textInput = document.getElementById('dua-text');
  if (textInput && translations[lang].dua_msg_ph) textInput.placeholder = translations[lang].dua_msg_ph;

  // Re-render dynamic components with new translations
  renderNews();
  renderTeam();
  renderSponsors();
  renderGallery();
  if (window.lastCharityData) renderCharity(window.lastCharityData);
  updateLastUpdatedText();
  updateClock();
  highlightActivePrayer();
}

function updateLastUpdatedText() {
  const lastUpdated = document.getElementById('last-updated');
  if (!lastUpdated) return;
  const prefix = translations[currentLang]?.updated_prefix || (currentLang === 'uz_cy' ? "ЯНГИЛАНДИ:" : "YANGILANDI:");
  const timeVal = lastUpdated.dataset.timestamp || "2026-08-07 08:14";
  lastUpdated.textContent = `${prefix} ${timeVal}`;
}

// Custom Language & Font Dropdown Handlers
function initCustomDropdowns() {
  // Language dropdowns
  document.querySelectorAll('.custom-lang-dropdown').forEach(dropdown => {
    const trigger = dropdown.querySelector('.lang-dropdown-trigger');
    const menu = dropdown.querySelector('.lang-menu');

    trigger?.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !menu.classList.contains('hidden');
      closeAllDropdowns();
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

  // Font Size dropdowns (Select kabi)
  document.querySelectorAll('.custom-font-dropdown').forEach(dropdown => {
    const trigger = dropdown.querySelector('.font-dropdown-trigger');
    const menu = dropdown.querySelector('.font-menu');

    trigger?.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !menu.classList.contains('hidden');
      closeAllDropdowns();
      if (!isOpen) menu.classList.remove('hidden');
    });

    menu?.querySelectorAll('button[data-size]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        setFontSize(btn.dataset.size);
        menu.classList.add('hidden');
      });
    });
  });

  // Close when clicked outside
  document.addEventListener('click', closeAllDropdowns);
}

function closeAllDropdowns() {
  document.querySelectorAll('.lang-menu, .font-menu').forEach(m => m.classList.add('hidden'));
}
initCustomDropdowns();

// ============ FONT SIZE SCALING (SELECT FORMAT) ============
const fontLabels = {
  norm: '100%',
  lg: '115%',
  xl: '130%'
};

function setFontSize(size) {
  if (!['norm', 'lg', 'xl'].includes(size)) size = 'norm';
  document.documentElement.classList.remove('font-scale-lg', 'font-scale-xl');
  if (size === 'lg') document.documentElement.classList.add('font-scale-lg');
  if (size === 'xl') document.documentElement.classList.add('font-scale-xl');
  localStorage.setItem('selected_font_size', size);

  // Update label on triggers
  document.querySelectorAll('.font-current-label').forEach(el => {
    el.textContent = fontLabels[size];
  });

  // Update checkmarks in font menu
  document.querySelectorAll('.font-menu button[data-size]').forEach(btn => {
    const isCur = btn.dataset.size === size;
    const check = btn.querySelector('.font-check');
    if (check) check.classList.toggle('hidden', !isCur);
    btn.classList.toggle('bg-surface-container', isCur);
    btn.classList.toggle('font-bold', isCur);
  });
}

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
    const localeMap = { uz_lt: 'uz-UZ', uz_cy: 'uz-Cyrl-UZ', ru: 'ru-RU', en: 'en-US' };
    const loc = localeMap[currentLang] || 'uz-UZ';
    dateEl.textContent = now.toLocaleDateString(loc, {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  // Hijri date
  try {
    const hijriEl = document.getElementById('hijri-date');
    if (hijriEl) {
      const loc = currentLang === 'uz_cy' ? 'uz-Cyrl-UZ-u-ca-islamic' : (currentLang === 'ru' ? 'ru-RU-u-ca-islamic' : (currentLang === 'en' ? 'en-US-u-ca-islamic' : 'uz-UZ-u-ca-islamic'));
      const hijri = new Intl.DateTimeFormat(loc, {
        day: 'numeric', month: 'long', year: 'numeric'
      }).format(now);
      hijriEl.textContent = hijri.toUpperCase();
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
// Firebase Konfiguratsiyasi (Asosiy + Zaxira)
const defaultFirebaseConfig = {
  apiKey: "AIzaSyDjU4_Bt8gzbYTwYvdFz37LSOJ6rAnYxhA",
  authDomain: "goyib-yoronlar-masjidi.firebaseapp.com",
  databaseURL: "https://goyib-yoronlar-masjidi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "goyib-yoronlar-masjidi",
  storageBucket: "goyib-yoronlar-masjidi.firebasestorage.app",
  messagingSenderId: "607943091616",
  appId: "1:607943091616:web:1aa14cb0c530cd78b270c5",
  measurementId: "G-S4HY09VZSJ"
};

let db = null;

function initFirebaseClient(retries = 20) {
  try {
    if (typeof firebase === 'undefined') {
      if (retries > 0) return setTimeout(() => initFirebaseClient(retries - 1), 100);
      console.warn('Firebase SDK yuklanmadi');
      return;
    }
    const cfg = (typeof firebaseConfig !== 'undefined' && firebaseConfig.apiKey) ? firebaseConfig : defaultFirebaseConfig;
    if (!firebase.apps.length) {
      firebase.initializeApp(cfg);
    }
    db = firebase.database();
    console.log('✅ Firebase muvaffaqiyatli ulandi va ma\x27lumotlar yuklanmoqda...');
    
    // Barcha ma'lumotlarni yuklash
    loadFirebasePrayerTimes();
    loadNews();
    loadTeam();
    loadSponsors();
    loadCharity();
    loadGallery();
  } catch (e) {
    console.warn('Firebase init xatosi:', e);
  }
}

// Dastlabki ishga tushirish
initFirebaseClient();

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
    let timeStr = data.updated_at || (data.last_update ? data.last_update.replace('T', ' ').substring(0, 16) : '');
    if (!timeStr) {
      const now = new Date();
      const yr = now.getFullYear();
      const mo = String(now.getMonth() + 1).padStart(2, '0');
      const da = String(now.getDate()).padStart(2, '0');
      const ho = String(now.getHours()).padStart(2, '0');
      const mi = String(now.getMinutes()).padStart(2, '0');
      timeStr = `${yr}-${mo}-${da} ${ho}:${mi}`;
    }
    lastUpdated.dataset.timestamp = timeStr;
    const prefix = translations[currentLang]?.updated_prefix || (currentLang === 'uz_cy' ? "ЯНГИЛАНДИ:" : "YANGILANDI:");
    lastUpdated.textContent = `${prefix} ${timeStr}`;
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
    uz_lt: { bomdod: 'Bomdod', quyosh: 'Quyosh', peshin: 'Peshin', asr: 'Asr', shom: 'Shom', xufton: 'Xufton' },
    uz_cy: { bomdod: 'Бомдод', quyosh: 'Қуёш', peshin: 'Пешин', asr: 'Аср', shom: 'Шом', xufton: 'Хуфтон' },
    ru: { bomdod: 'Фаджр', quyosh: 'Восход', peshin: 'Зухр', asr: 'Аср', shom: 'Магриб', xufton: 'Иша' },
    en: { bomdod: 'Fajr', quyosh: 'Sunrise', peshin: 'Dhuhr', asr: 'Asr', shom: 'Maghrib', xufton: 'Isha' }
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
    const pName = names[currentLang] ? names[currentLang][nextP] : names.uz_lt[nextP];
    if (nameEl) nameEl.textContent = `(${pName})`;
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
          ${item.date ? item.date.split(' ')[0] : (currentLang === 'uz_cy' ? 'Янги' : (currentLang === 'ru' ? 'Новое' : 'Yangi'))}
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

  const profileBtnText = translations[currentLang]?.card_profile_btn || "Profil";

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
        <span>${profileBtnText}</span>
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
  const sRole = translations[currentLang]?.sponsor_role || "Faxriy / Homiy";
  openTeamModal({
    name: sponsor.name,
    role: sRole,
    desc: sponsor.desc,
    imgUrl: sponsor.imgUrl
  });
};

// ============ CHARITY & UTILITIES ============
window.lastCharityData = null;

function renderCharity(data) {
  window.lastCharityData = data;
  const container = document.getElementById('charity-grid');
  if (!container) return;

  const cardNum = data.general_card || '8600 0000 0000 0000';
  const cardOwner = data.general_owner || (currentLang === 'uz_cy' ? "Ғойиб Ёронлар Жоме Масжиди" : (currentLang === 'ru' ? "Соборная Мечеть Гойиб Ёронлар" : "G'oyib Yoronlar Jome Masjidi"));

  const t = translations[currentLang] || translations.uz_lt;

  container.innerHTML = `
    <!-- Umumiy ehson kartasi -->
    <div class="bg-surface-container-lowest border-t-4 border-gold-metallic rounded-2xl shadow-sm border-x border-b border-surface-container-high p-5 flex flex-col justify-between">
      <div>
        <h3 class="font-headline-md text-[18px] font-bold text-primary mb-2 flex items-center gap-2">
          <span class="material-symbols-outlined text-emerald-deep text-[22px]">account_balance</span>
          <span>${t.charity_general}</span>
        </h3>
        <p class="text-xs text-on-surface-variant mb-4 leading-relaxed">${t.charity_general_desc}</p>
        
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
        <span>${t.charity_card_info}</span>
      </div>
    </div>

    <!-- Kommunal to'lovlar -->
    <div class="bg-surface-container-lowest border-t-4 border-emerald-deep rounded-2xl shadow-sm border-x border-b border-surface-container-high p-5 flex flex-col justify-between">
      <div>
        <h3 class="font-headline-md text-[18px] font-bold text-primary mb-2 flex items-center gap-2">
          <span class="material-symbols-outlined text-emerald-deep text-[22px]">receipt_long</span>
          <span>${t.charity_utility}</span>
        </h3>
        <p class="text-xs text-on-surface-variant mb-3 leading-relaxed">${t.charity_utility_desc}</p>

        <div class="space-y-2.5 mb-3">
          <!-- Elektr -->
          <div class="bg-surface-container-low p-2.5 rounded-xl border border-surface-variant flex justify-between items-center">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-sm shadow-sm">⚡</div>
              <div>
                <div class="font-label-caps text-[9px] text-on-surface-variant font-bold">${t.util_elec_label}</div>
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
                <div class="font-label-caps text-[9px] text-on-surface-variant font-bold">${t.util_water_label}</div>
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
                <div class="font-label-caps text-[9px] text-on-surface-variant font-bold">${t.util_wifi_label}</div>
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
                  <div class="font-label-caps text-[9px] text-on-surface-variant font-bold">${t.util_gas_label}</div>
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
            <span>${t.electric_note_title}</span>
          </div>
          <p>${t.electric_note_desc}</p>
        </div>
      </div>

      <!-- Domo button under utilities -->
      <a class="w-full bg-emerald-deep hover:bg-emerald-light text-white font-label-caps text-[12px] py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm font-bold mt-1" href="https://domo.uz/donation/goyib-yoronlar" target="_blank">
        <span class="material-symbols-outlined text-[18px]">payment</span>
        <span>${t.domo_btn}</span>
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

// ============ GALLERY WITH BENTO/PAGINATION (STITCH DESIGN) ============
let allGallery = [];
let galleryCurrentPage = 1;
const galleryItemsPerPage = 8;
let lightboxIdx = 0;

function renderGallery() {
  const container = document.getElementById('gallery-grid');
  const paginationContainer = document.getElementById('gallery-pagination');
  const countBadge = document.getElementById('gallery-count-badge');
  if (!container) return;
  container.innerHTML = '';

  const total = allGallery.length;
  if (countBadge) {
    if (currentLang === 'uz_cy') countBadge.textContent = `${total} та фотосурат`;
    else if (currentLang === 'ru') countBadge.textContent = `${total} фото`;
    else if (currentLang === 'en') countBadge.textContent = `${total} photos`;
    else countBadge.textContent = `${total} ta fotosurat`;
  }

  if (total === 0) {
    container.innerHTML = `<p class="text-on-surface-variant text-sm col-span-full py-8 text-center bg-surface-container-low rounded-2xl border border-surface-container-high">${translations[currentLang]?.no_gallery || "Hozircha rasmlar kiritilmagan..."}</p>`;
    if (paginationContainer) paginationContainer.classList.add('hidden');
    return;
  }

  const totalPages = Math.ceil(total / galleryItemsPerPage);
  if (galleryCurrentPage > totalPages) galleryCurrentPage = totalPages;
  if (galleryCurrentPage < 1) galleryCurrentPage = 1;

  const startIndex = (galleryCurrentPage - 1) * galleryItemsPerPage;
  const endIndex = Math.min(startIndex + galleryItemsPerPage, total);
  const currentImages = allGallery.slice(startIndex, endIndex);

  currentImages.forEach((img, indexInPage) => {
    const globalIdx = startIndex + indexInPage;
    const imgUrl = img.url || img.imgUrl || img.image || img.src || '';
    if (!imgUrl) return;

    const item = document.createElement('div');
    item.className = 'aspect-square rounded-2xl overflow-hidden shadow-xs hover:shadow-md relative group cursor-pointer border border-surface-container-high hover:border-gold-shimmer transition-all duration-300 bg-surface-container-low';
    item.onclick = () => openLightbox(globalIdx);
    
    item.innerHTML = `
      <img src="${imgUrl}" alt="Masjid fotosurati" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
        <span class="text-white font-bold text-xs flex items-center gap-1 drop-shadow-sm">
          <span class="material-symbols-outlined text-sm text-gold-shimmer">zoom_in</span>
          <span>${translations[currentLang]?.gallery_title || 'Galereya'}</span>
        </span>
      </div>
    `;
    container.appendChild(item);
  });

  // Render pagination controls
  if (paginationContainer) {
    if (totalPages > 1) {
      paginationContainer.classList.remove('hidden');
      paginationContainer.innerHTML = '';

      // Prev Button
      const prevBtn = document.createElement('button');
      prevBtn.className = `px-3.5 py-1.5 rounded-xl border border-surface-variant text-xs font-bold transition-all ${galleryCurrentPage === 1 ? 'opacity-40 cursor-not-allowed bg-surface-container-low text-on-surface-variant' : 'bg-surface-container hover:bg-surface-container-high text-primary active:scale-95 shadow-xs'}`;
      prevBtn.innerHTML = translations[currentLang]?.prev_page || '‹ Oldingi';
      prevBtn.disabled = galleryCurrentPage === 1;
      prevBtn.onclick = () => {
        if (galleryCurrentPage > 1) {
          galleryCurrentPage--;
          renderGallery();
          document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
        }
      };
      paginationContainer.appendChild(prevBtn);

      // Page numbers
      for (let p = 1; p <= totalPages; p++) {
        const pageBtn = document.createElement('button');
        const isCur = p === galleryCurrentPage;
        pageBtn.className = `w-8 h-8 rounded-xl font-label-caps text-xs font-bold transition-all ${isCur ? 'bg-primary text-white shadow-sm' : 'bg-surface-container hover:bg-surface-container-high text-on-surface border border-surface-variant'}`;
        pageBtn.textContent = p;
        pageBtn.onclick = () => {
          galleryCurrentPage = p;
          renderGallery();
          document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
        };
        paginationContainer.appendChild(pageBtn);
      }

      // Next Button
      const nextBtn = document.createElement('button');
      nextBtn.className = `px-3.5 py-1.5 rounded-xl border border-surface-variant text-xs font-bold transition-all ${galleryCurrentPage === totalPages ? 'opacity-40 cursor-not-allowed bg-surface-container-low text-on-surface-variant' : 'bg-surface-container hover:bg-surface-container-high text-primary active:scale-95 shadow-xs'}`;
      nextBtn.innerHTML = translations[currentLang]?.next_page || 'Keyingi ›';
      nextBtn.disabled = galleryCurrentPage === totalPages;
      nextBtn.onclick = () => {
        if (galleryCurrentPage < totalPages) {
          galleryCurrentPage++;
          renderGallery();
          document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
        }
      };
      paginationContainer.appendChild(nextBtn);
    } else {
      paginationContainer.classList.add('hidden');
    }
  }
}

function loadGallery() {
  if (!db) {
    console.warn('loadGallery: db ulanmagan, 200ms kutib qayta urinilmoqda...');
    return setTimeout(loadGallery, 200);
  }
  db.ref('gallery').on('value', snap => {
    allGallery = [];
    if (snap.exists()) {
      snap.forEach(child => {
        const val = child.val();
        if (val) {
          allGallery.push({ id: child.key, ...val });
        }
      });
      allGallery.reverse();
    }
    console.log('📸 Firebase-dan yuklangan jami galereya rasmlari:', allGallery.length, allGallery);
    renderGallery();
  });
}

window.openLightbox = function(idx) {
  if (!allGallery[idx]) return;
  lightboxIdx = idx;
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const counter = document.getElementById('lightbox-counter');
  
  const currentItem = allGallery[idx];
  img.src = currentItem.url || currentItem.imgUrl || currentItem.image || currentItem.src || '';
  if (counter) counter.textContent = `${lightboxIdx + 1} / ${allGallery.length}`;
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
  const currentItem = allGallery[lightboxIdx];
  document.getElementById('lightbox-img').src = currentItem.url || currentItem.imgUrl || currentItem.image || currentItem.src || '';
  const counter = document.getElementById('lightbox-counter');
  if (counter) counter.textContent = `${lightboxIdx + 1} / ${allGallery.length}`;
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

// Touch Swipe navigation for Lightbox
let touchStartX = 0;
let touchEndX = 0;
const lightboxModal = document.getElementById('lightbox-modal');
lightboxModal?.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });
lightboxModal?.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchEndX < touchStartX - 50) changeLightbox(1);
  if (touchEndX > touchStartX + 50) changeLightbox(-1);
}, { passive: true });


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

    const userName = nameInput || (currentLang === 'uz_cy' ? 'Яширин' : (currentLang === 'ru' ? 'Анонимно' : 'Yashirin'));

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
    alert(currentLang === 'uz_cy' ? "Хатолик юз берди. Илтимос, кейинроқ қайта уриниб кўринг." : "Xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.");
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


// ============ MONTHLY PRAYER CALENDAR (LOCALIZED & SINGLE-PAGE PRINT) ============
let calYear = new Date().getFullYear();
let calMonth = new Date().getMonth() + 1; // 1-12
let calDataCache = {};

const calMonthNames = {
  uz_cy: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
  uz_lt: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
  ru: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};

const calWeekdayNames = {
  uz_cy: ["Якшанба", "Душанба", "Сешанба", "Чоршанба", "Пайшанба", "Жума", "Шанба"],
  uz_lt: ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"],
  ru: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
  en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};

const calHijriMonthNames = {
  uz_cy: ["Муҳаррам", "Сафар", "Рабиул-аввал", "Рабиус-соний", "Жамодиул-аввал", "Жамодиус-соний", "Ражаб", "Шаъбон", "Рамазон", "Шаввол", "Зулқаъда", "Зулҳижжа"],
  uz_lt: ["Muharram", "Safar", "Rabiul-avval", "Rabius-soniy", "Jamodiul-avval", "Jamodius-soniy", "Rajab", "Sha'bon", "Ramazon", "Shavvol", "Zulqa'da", "Zulhijja"],
  ru: ["Мухаррам", "Сафар", "Раби аль-авваль", "Раби ас-сани", "Джумада аль-уля", "Джумада ас-сания", "Раджаб", "Шаабан", "Рамадан", "Шавваль", "Зуль-каада", "Зуль-хиджа"],
  en: ["Muharram", "Safar", "Rabi al-Awwal", "Rabi al-Thani", "Jumada al-Awwal", "Jumada al-Thani", "Rajab", "Sha'ban", "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah"]
};

function cleanTime(tStr) {
  if (!tStr) return '--:--';
  return tStr.split(' ')[0];
}

async function fetchAndRenderMonthlyCalendar(year, month) {
  const displayEl = document.getElementById('cal-current-month-display');
  const tbody = document.getElementById('monthly-calendar-tbody');
  if (!tbody) return;

  const mNames = calMonthNames[currentLang] || calMonthNames.uz_cy;
  if (displayEl) {
    displayEl.textContent = `${mNames[month - 1]} ${year}`;
  }

  tbody.innerHTML = '<tr><td colspan="9" class="py-8 text-center text-sm text-on-surface-variant"><span class="spinner inline-block mr-2"></span> ' + (translations[currentLang]?.loading || 'Маълумотлар юкланмоқда...') + '</td></tr>';

  const cacheKey = `cal_${year}_${month}`;
  let days = calDataCache[cacheKey];

  if (!days) {
    try {
      const stored = localStorage.getItem(cacheKey);
      if (stored) {
        days = JSON.parse(stored);
        calDataCache[cacheKey] = days;
      }
    } catch (e) {}
  }

  if (!days) {
    try {
      const res = await fetch(`https://api.aladhan.com/v1/calendar/${year}/${month}?latitude=40.8642127&longitude=71.22714&method=3&school=1`);
      const json = await res.json();
      if (json && json.data) {
        days = json.data;
        calDataCache[cacheKey] = days;
        try { localStorage.setItem(cacheKey, JSON.stringify(days)); } catch (e) {}
      }
    } catch (err) {
      console.error("Monthly calendar fetch error:", err);
      tbody.innerHTML = '<tr><td colspan="9" class="py-6 text-center text-sm text-red-500">Хатолик: Интернет алоқасини текширинг.</td></tr>';
      return;
    }
  }

  if (!days || days.length === 0) {
    tbody.innerHTML = '<tr><td colspan="9" class="py-6 text-center text-sm text-on-surface-variant">Маълумот мавжуд эмас.</td></tr>';
    return;
  }

  const now = new Date();
  const curY = now.getFullYear();
  const curM = now.getMonth() + 1;
  const curD = now.getDate();

  const wNames = calWeekdayNames[currentLang] || calWeekdayNames.uz_cy;
  const hNames = calHijriMonthNames[currentLang] || calHijriMonthNames.uz_cy;
  const todayBadgeText = translations[currentLang]?.today_badge || "Бугун";

  tbody.innerHTML = '';
  let todayRowEl = null;

  days.forEach((d) => {
    const dayNum = parseInt(d.date.gregorian.day, 10);
    const dateObj = new Date(year, month - 1, dayNum);
    const weekdayIdx = dateObj.getDay();
    const isFriday = weekdayIdx === 5; // Juma
    const isToday = (year === curY && month === curM && dayNum === curD);

    let hijriStr = '-';
    if (d.date.hijri) {
      const hMonthNum = parseInt(d.date.hijri.month.number, 10) || 1;
      const hMonthName = hNames[hMonthNum - 1] || d.date.hijri.month.en;
      hijriStr = `${d.date.hijri.day} ${hMonthName}`;
    }

    const tr = document.createElement('tr');
    tr.className = isToday 
      ? 'bg-emerald-deep/15 dark:bg-emerald-deep/40 font-bold border-l-4 border-gold-shimmer text-primary shadow-xs transition-colors' 
      : (isFriday ? 'bg-primary/5 hover:bg-surface-container-high transition-colors font-semibold' : 'hover:bg-surface-container transition-colors');

    if (isToday) todayRowEl = tr;

    const timings = d.timings;
    tr.innerHTML = `
      <td class="py-2 px-2 text-center font-bold">
        <span class="inline-flex items-center gap-1">
          <span>${dayNum}</span>
          ${isToday ? `<span class="text-[9px] bg-gold-shimmer text-black px-1.5 py-0.5 rounded-full font-bold uppercase no-print">${todayBadgeText}</span>` : ''}
        </span>
      </td>
      <td class="py-2 px-2.5 ${isFriday ? 'text-emerald-deep dark:text-emerald-light font-bold flex items-center gap-1' : ''}">
        ${isFriday ? '<span class="material-symbols-outlined text-[13px] no-print">verified</span>' : ''}
        <span>${wNames[weekdayIdx]}</span>
      </td>
      <td class="py-2 px-2 text-on-surface-variant font-medium text-[11px]">${hijriStr}</td>
      <td class="py-2 px-2 text-center font-bold bg-primary/5 tabular-nums">${cleanTime(timings.Fajr)}</td>
      <td class="py-2 px-2 text-center text-on-surface-variant tabular-nums">${cleanTime(timings.Sunrise)}</td>
      <td class="py-2 px-2 text-center font-bold bg-primary/5 tabular-nums">${cleanTime(timings.Dhuhr)}</td>
      <td class="py-2 px-2 text-center font-bold tabular-nums">${cleanTime(timings.Asr)}</td>
      <td class="py-2 px-2 text-center font-bold bg-primary/5 text-gold-metallic dark:text-gold-shimmer tabular-nums">${cleanTime(timings.Maghrib)}</td>
      <td class="py-2 px-2 text-center font-bold tabular-nums">${cleanTime(timings.Isha)}</td>
    `;

    tbody.appendChild(tr);
  });

  if (todayRowEl) {
    setTimeout(() => {
      todayRowEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);
  }
}

function openMonthlyCalendarModal() {
  const modal = document.getElementById('monthly-calendar-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  history.pushState({ modalOpen: true }, "");
  fetchAndRenderMonthlyCalendar(calYear, calMonth);
}

function closeMonthlyCalendarModal() {
  const modal = document.getElementById('monthly-calendar-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
  if (history.state && history.state.modalOpen) {
    history.back();
  }
}

// Calendar Navigation Events
document.getElementById('btn-open-monthly')?.addEventListener('click', openMonthlyCalendarModal);
document.getElementById('cal-close-btn')?.addEventListener('click', closeMonthlyCalendarModal);
document.getElementById('monthly-calendar-modal')?.addEventListener('click', (e) => {
  if (e.target === document.getElementById('monthly-calendar-modal')) closeMonthlyCalendarModal();
});

document.getElementById('cal-prev-month')?.addEventListener('click', () => {
  calMonth--;
  if (calMonth < 1) {
    calMonth = 12;
    calYear--;
  }
  fetchAndRenderMonthlyCalendar(calYear, calMonth);
});

document.getElementById('cal-next-month')?.addEventListener('click', () => {
  calMonth++;
  if (calMonth > 12) {
    calMonth = 1;
    calYear++;
  }
  fetchAndRenderMonthlyCalendar(calYear, calMonth);
});

document.getElementById('cal-print-btn')?.addEventListener('click', () => {
  window.print();
});
