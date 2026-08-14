/* =============================================
   G'oyib Yoronlar Jome Masjidi — main.js v2
   Stitch Design + Firebase Integration
   ============================================= */

'use strict';

// ============ GLOBAL STATE ============
let prayerTimesData = {};
let apiPrayerTimes = {};
let galleryImages = [];
let lightboxIndex = 0;
let countdownInterval = null;

// ============ DARK MODE ============
function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.className = saved;
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
  const current = document.documentElement.className;
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.className = next;
  localStorage.setItem('theme', next);
  updateThemeIcons(next);
}

document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
document.getElementById('theme-toggle-desktop')?.addEventListener('click', toggleTheme);
initTheme();

// ============ CLOCK ============
function updateClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  const timeStr = `${hh}:${mm}:${ss}`;
  const mobileEl = document.getElementById('current-time');
  const desktopEl = document.getElementById('current-time-desktop');
  if (mobileEl) mobileEl.textContent = timeStr;
  if (desktopEl) desktopEl.textContent = timeStr;
}
setInterval(updateClock, 1000);
updateClock();

// ============ DATE ============
function updateDate() {
  const now = new Date();
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
updateDate();

// ============ BOTTOM NAV ACTIVE STATE ============
function initBottomNav() {
  const navItems = document.querySelectorAll('.bottom-nav-item[data-section]');
  const sections = document.querySelectorAll('section[id]');

  // Click handler
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Scroll-based active
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.dataset.section === id) item.classList.add('active');
        });
        // Desktop nav
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));

  // Set home active initially
  navItems[0]?.classList.add('active');
}
initBottomNav();

// ============ PRAYER TIMES — FIREBASE ============
function loadPrayerTimesFromFirebase() {
  try {
    const db = firebase.database();
    db.ref('prayerTimes').on('value', snapshot => {
      const data = snapshot.val();
      if (!data) return;
      prayerTimesData = data;

      const prayers = ['bomdod', 'quyosh', 'peshin', 'asr', 'shom', 'xufton'];
      prayers.forEach(p => {
        const el = document.getElementById(`time-${p}`);
        if (el && data[p]) el.textContent = data[p];
      });

      const lastUpdated = document.getElementById('last-updated');
      if (lastUpdated && data.updatedAt) {
        const d = new Date(data.updatedAt);
        lastUpdated.textContent = `Yangilandi: ${d.toLocaleDateString('uz-UZ')}`;
      }

      startCountdown();
      highlightActivePrayer();
    });
  } catch (e) {
    console.warn('Firebase prayer times:', e);
  }
}

// ============ PRAYER TIMES — API (azan.ma) ============
async function loadApiPrayerTimes() {
  try {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const url = `https://api.aladhan.com/v1/timingsByCity/${dd}-${mm}-${yyyy}?city=Pop&country=UZ&method=3`;
    const res = await fetch(url);
    const json = await res.json();
    if (json.code === 200) {
      const t = json.data.timings;
      apiPrayerTimes = {
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
        if (el && apiPrayerTimes[p]) el.textContent = apiPrayerTimes[p];
      });
      highlightActivePrayer();
      startCountdown();
    }
  } catch (e) {
    console.warn('API prayer times:', e);
  }
}

// ============ HIGHLIGHT ACTIVE PRAYER ============
function highlightActivePrayer() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const prayers = ['bomdod', 'quyosh', 'peshin', 'asr', 'shom', 'xufton'];
  const times = {};

  prayers.forEach(p => {
    const source = prayerTimesData[p] || apiPrayerTimes[p];
    if (source) {
      const [h, m] = source.split(':').map(Number);
      times[p] = h * 60 + m;
    }
  });

  // Find current prayer
  let activePrayer = null;
  for (let i = prayers.length - 1; i >= 0; i--) {
    if (times[prayers[i]] !== undefined && currentMinutes >= times[prayers[i]]) {
      activePrayer = prayers[i];
      break;
    }
  }

  // Apply active styling
  document.querySelectorAll('.prayer-cell').forEach(cell => {
    const pName = cell.dataset.prayer;
    cell.classList.remove('bg-emerald-deep');
    const icon = cell.querySelector('.material-symbols-outlined');
    const labels = cell.querySelectorAll('.text-on-surface-variant, .text-primary');

    if (pName === activePrayer) {
      cell.classList.add('bg-emerald-deep');
      cell.style.setProperty('--tw-ring-color', '#F59E0B');
      // Change text colors for active
      cell.querySelectorAll('[class*="text-on-surface-variant"]').forEach(el => {
        el.style.color = 'rgba(255,255,255,0.7)';
      });
      cell.querySelectorAll('[class*="text-primary"]').forEach(el => {
        el.style.color = '#ffffff';
      });
      if (icon) icon.style.color = '#F59E0B';
    } else {
      cell.style.cssText = '';
    }
  });
}

// ============ COUNTDOWN ============
function startCountdown() {
  if (countdownInterval) clearInterval(countdownInterval);
  countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
}

function updateCountdown() {
  const prayers = ['bomdod', 'quyosh', 'peshin', 'asr', 'shom', 'xufton'];
  const prayerNames = { bomdod: 'Bomdod', quyosh: 'Quyosh', peshin: 'Peshin', asr: 'Asr', shom: 'Shom', xufton: 'Xufton' };
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;

  let nextPrayer = null;
  let nextMinutes = Infinity;

  prayers.forEach(p => {
    const source = prayerTimesData[p] || apiPrayerTimes[p];
    if (!source) return;
    const [h, m] = source.split(':').map(Number);
    const pMin = h * 60 + m;
    const diff = pMin > currentMinutes ? pMin - currentMinutes : pMin + 1440 - currentMinutes;
    if (diff < nextMinutes) {
      nextMinutes = diff;
      nextPrayer = p;
    }
  });

  const timerEl = document.getElementById('countdown-timer');
  const nameEl = document.getElementById('next-prayer-name');

  if (timerEl && nextPrayer !== null) {
    const totalSec = Math.round(nextMinutes * 60);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    timerEl.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    if (nameEl) nameEl.textContent = `(${prayerNames[nextPrayer]})`;
  }
}

// ============ NEWS — FIREBASE ============
function loadNews() {
  try {
    const db = firebase.database();
    db.ref('news').orderByChild('date').limitToLast(6).on('value', snapshot => {
      const newsGrid = document.getElementById('news-grid');
      if (!newsGrid) return;
      const items = [];
      snapshot.forEach(child => items.unshift({ id: child.key, ...child.val() }));
      if (items.length === 0) { newsGrid.innerHTML = '<p class="text-on-surface-variant text-sm col-span-3 px-4">Yangiliklar topilmadi.</p>'; return; }
      newsGrid.innerHTML = items.map(item => `
        <div class="min-w-[280px] w-[280px] md:w-auto bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-surface-container-high flex flex-col snap-start">
          <div class="h-32 bg-surface-variant relative overflow-hidden">
            ${item.image ? `<img class="w-full h-full object-cover" src="${item.image}" alt="${item.title || ''}" loading="lazy"/>` : `<div class="w-full h-full flex items-center justify-center"><span class="material-symbols-outlined text-[40px] text-outline" style="font-variation-settings:'FILL' 0">article</span></div>`}
            <div class="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-0.5 rounded-full font-label-caps text-[10px] text-primary shadow-sm">${item.date || ''}</div>
          </div>
          <div class="p-4 flex flex-col flex-grow">
            <h3 class="font-body-md text-[15px] font-bold text-primary mb-2 line-clamp-2">${item.title || ''}</h3>
            <p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4">${item.content || item.body || ''}</p>
            <a class="mt-auto text-primary text-[12px] font-semibold flex items-center gap-1" href="#news">
              O'qish <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
        </div>
      `).join('');
    });
  } catch (e) { console.warn('News:', e); }
}

// ============ TEAM — FIREBASE ============
function loadTeam() {
  try {
    const db = firebase.database();
    db.ref('team').on('value', snapshot => {
      const grid = document.getElementById('team-grid');
      if (!grid) return;
      const items = [];
      snapshot.forEach(child => items.push({ id: child.key, ...child.val() }));
      if (items.length === 0) { grid.innerHTML = ''; return; }
      grid.innerHTML = items.map(item => `
        <div class="min-w-[140px] w-[140px] md:w-auto bg-surface-container-lowest rounded-xl p-4 flex flex-col items-center shadow-sm border border-surface-container-high cursor-pointer hover:shadow-md transition-shadow"
             onclick="openTeamModal(${JSON.stringify(item).replace(/"/g, '&quot;')})">
          <div class="w-16 h-16 rounded-full overflow-hidden bg-surface-container mb-3 border-2 border-surface-container-high">
            ${item.photo ? `<img src="${item.photo}" alt="${item.name || ''}" class="w-full h-full object-cover"/>` : `<div class="w-full h-full flex items-center justify-center"><span class="material-symbols-outlined text-[28px] text-outline">person</span></div>`}
          </div>
          <div class="font-body-md text-[13px] font-semibold text-on-surface text-center mb-1">${item.name || ''}</div>
          <div class="font-label-caps text-[10px] text-on-surface-variant text-center">${item.role || item.position || ''}</div>
        </div>
      `).join('');
    });
  } catch (e) { console.warn('Team:', e); }
}

// ============ SPONSORS/FAXRIYLAR — FIREBASE ============
function loadSponsors() {
  try {
    const db = firebase.database();
    db.ref('sponsors').on('value', snapshot => {
      const grid = document.getElementById('sponsors-grid');
      if (!grid) return;
      const items = [];
      snapshot.forEach(child => items.push({ id: child.key, ...child.val() }));
      if (items.length === 0) { grid.innerHTML = '<p class="text-on-surface-variant text-sm">Faxriylar topilmadi.</p>'; return; }
      grid.innerHTML = items.map(item => `
        <div class="bg-surface-container-lowest rounded-xl p-4 border-t-4 border-gold-metallic border-x border-b border-surface-container-high shadow-sm flex items-center gap-4">
          <div class="w-12 h-12 rounded-full overflow-hidden bg-surface-container flex-shrink-0 border border-surface-container-high">
            ${item.photo ? `<img src="${item.photo}" alt="${item.name || ''}" class="w-full h-full object-cover"/>` : `<div class="w-full h-full flex items-center justify-center"><span class="material-symbols-outlined text-[22px] text-gold-metallic">star</span></div>`}
          </div>
          <div>
            <div class="font-body-md text-[15px] font-bold text-primary">${item.name || ''}</div>
            <div class="font-label-caps text-[10px] text-on-surface-variant">${item.contribution || item.role || ''}</div>
          </div>
        </div>
      `).join('');
    });
  } catch (e) { console.warn('Sponsors:', e); }
}

// ============ CHARITY — FIREBASE ============
function loadCharity() {
  try {
    const db = firebase.database();
    db.ref('charity').on('value', snapshot => {
      const grid = document.getElementById('charity-grid');
      if (!grid) return;
      const data = snapshot.val() || {};

      // Karta raqamlari (static yoki Firebase dan)
      const cards = data.cards || [];
      const utilities = data.utilities || {};

      let html = '';

      // Umumiy ehson kartasi
      html += `
        <div class="bg-surface-container-lowest border-t-4 border-gold-metallic rounded-xl shadow-sm border-x border-b border-surface-container-high p-4">
          <h3 class="font-headline-md text-[18px] font-bold text-primary mb-3 flex items-center gap-2">
            <span class="material-symbols-outlined text-emerald-deep text-[20px]">account_balance</span>Umumiy ehson
          </h3>
          ${(cards.length > 0 ? cards : [{ label: 'Uzcard/Humo', number: data.cardNumber || '8600 0000 0000 0000' }]).map(card => `
            <div class="bg-surface-container-low p-3 rounded-lg mb-3 border border-surface-variant flex justify-between items-center">
              <div>
                <div class="font-label-caps text-[10px] text-on-surface-variant mb-1">${card.label || 'Uzcard/Humo'}</div>
                <div class="text-[16px] text-primary font-bold tracking-widest tabular-nums">${card.number || data.cardNumber || ''}</div>
              </div>
              <button class="w-8 h-8 rounded-full bg-white border border-surface-variant flex items-center justify-center text-on-surface-variant copy-btn" data-copy="${card.number || data.cardNumber || ''}" title="Nusxa olish">
                <span class="material-symbols-outlined text-[16px]">content_copy</span>
              </button>
            </div>
          `).join('')}
          ${data.domoUrl ? `
            <a class="w-full bg-emerald-deep hover:bg-emerald-light text-white font-label-caps text-[12px] py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors" href="${data.domoUrl}" target="_blank">
              <span class="material-symbols-outlined text-[18px]">payment</span>domo.uz orqali ehson
            </a>
          ` : ''}
        </div>
      `;

      // Kommunal to'lovlar
      if (utilities.elektr || utilities.suv || utilities.gaz) {
        html += `
          <div class="bg-surface-container-lowest border-t-4 border-emerald-deep rounded-xl shadow-sm border-x border-b border-surface-container-high p-4">
            <h3 class="font-headline-md text-[18px] font-bold text-primary mb-3 flex items-center gap-2">
              <span class="material-symbols-outlined text-emerald-deep text-[20px]">receipt_long</span>Kommunal to'lovlar
            </h3>
            <div class="space-y-2">
              ${utilities.elektr ? `<div class="bg-surface-container-low p-2 rounded-lg border border-surface-variant flex justify-between items-center">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-gold-metallic"><span class="material-symbols-outlined text-[16px]">bolt</span></div>
                  <div><div class="font-label-caps text-[9px] text-on-surface-variant">Elektr</div><div class="text-[14px] font-bold text-primary tabular-nums">${utilities.elektr}</div></div>
                </div>
                <button class="w-6 h-6 rounded-full bg-white border border-surface-variant flex items-center justify-center text-on-surface-variant copy-btn" data-copy="${utilities.elektr}"><span class="material-symbols-outlined text-[12px]">content_copy</span></button>
              </div>` : ''}
              ${utilities.suv ? `<div class="bg-surface-container-low p-2 rounded-lg border border-surface-variant flex justify-between items-center">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-blue-500"><span class="material-symbols-outlined text-[16px]">water_drop</span></div>
                  <div><div class="font-label-caps text-[9px] text-on-surface-variant">Suv</div><div class="text-[14px] font-bold text-primary tabular-nums">${utilities.suv}</div></div>
                </div>
                <button class="w-6 h-6 rounded-full bg-white border border-surface-variant flex items-center justify-center text-on-surface-variant copy-btn" data-copy="${utilities.suv}"><span class="material-symbols-outlined text-[12px]">content_copy</span></button>
              </div>` : ''}
              ${utilities.gaz ? `<div class="bg-surface-container-low p-2 rounded-lg border border-surface-variant flex justify-between items-center">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-orange-500"><span class="material-symbols-outlined text-[16px]">local_fire_department</span></div>
                  <div><div class="font-label-caps text-[9px] text-on-surface-variant">Gaz</div><div class="text-[14px] font-bold text-primary tabular-nums">${utilities.gaz}</div></div>
                </div>
                <button class="w-6 h-6 rounded-full bg-white border border-surface-variant flex items-center justify-center text-on-surface-variant copy-btn" data-copy="${utilities.gaz}"><span class="material-symbols-outlined text-[12px]">content_copy</span></button>
              </div>` : ''}
            </div>
          </div>
        `;
      }

      grid.innerHTML = html;

      // Copy buttons
      document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          navigator.clipboard.writeText(btn.dataset.copy).then(() => {
            const icon = btn.querySelector('.material-symbols-outlined');
            if (icon) { icon.textContent = 'check'; setTimeout(() => icon.textContent = 'content_copy', 2000); }
          });
        });
      });
    });
  } catch (e) { console.warn('Charity:', e); }
}

// ============ GALLERY — FIREBASE ============
function loadGallery() {
  try {
    const db = firebase.database();
    db.ref('gallery').on('value', snapshot => {
      const grid = document.getElementById('gallery-grid');
      if (!grid) return;
      galleryImages = [];
      snapshot.forEach(child => galleryImages.push({ id: child.key, ...child.val() }));
      if (galleryImages.length === 0) { grid.innerHTML = '<p class="text-on-surface-variant text-sm col-span-3">Rasmlar topilmadi.</p>'; return; }
      grid.innerHTML = galleryImages.map((img, i) => `
        <div class="aspect-square rounded-lg overflow-hidden cursor-pointer group border border-surface-container-high hover:border-gold-shimmer transition-colors" onclick="openLightbox(${i})">
          <img src="${img.url || img.image || ''}" alt="${img.caption || 'Galereya'}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/>
        </div>
      `).join('');
    });
  } catch (e) { console.warn('Gallery:', e); }
}

// ============ LIGHTBOX ============
window.openLightbox = function(index) {
  lightboxIndex = index;
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  if (modal && img && galleryImages[index]) {
    img.src = galleryImages[index].url || galleryImages[index].image || '';
    img.alt = galleryImages[index].caption || '';
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
};

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) { modal.classList.add('hidden'); modal.classList.remove('flex'); }
  document.body.style.overflow = '';
}

function lightboxNav(dir) {
  lightboxIndex = (lightboxIndex + dir + galleryImages.length) % galleryImages.length;
  const img = document.getElementById('lightbox-img');
  if (img && galleryImages[lightboxIndex]) {
    img.src = galleryImages[lightboxIndex].url || galleryImages[lightboxIndex].image || '';
    img.alt = galleryImages[lightboxIndex].caption || '';
  }
}

document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev')?.addEventListener('click', () => lightboxNav(-1));
document.getElementById('lightbox-next')?.addEventListener('click', () => lightboxNav(1));
document.getElementById('lightbox-modal')?.addEventListener('click', e => {
  if (e.target === document.getElementById('lightbox-modal')) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lightboxNav(-1);
  if (e.key === 'ArrowRight') lightboxNav(1);
});

// ============ DUA FORM ============
document.getElementById('dua-form')?.addEventListener('submit', async e => {
  e.preventDefault();
  const name = document.getElementById('dua-name')?.value.trim();
  const text = document.getElementById('dua-text')?.value.trim();
  if (!name || !text) return;
  try {
    const db = firebase.database();
    await db.ref('duaRequests').push({
      name, text, timestamp: Date.now(), status: 'pending'
    });
    document.getElementById('dua-form').reset();
    const success = document.getElementById('dua-success');
    if (success) { success.classList.remove('hidden'); setTimeout(() => success.classList.add('hidden'), 4000); }
  } catch (err) {
    console.warn('Dua form:', err);
  }
});

// ============ TEAM MODAL (simple) ============
window.openTeamModal = function(member) {
  // Simple alert fallback — modal qo'shilishi mumkin
  console.log('Team member:', member);
};

// ============ INIT — FIREBASE ============
document.addEventListener('DOMContentLoaded', () => {
  try {
    if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
      loadPrayerTimesFromFirebase();
      loadNews();
      loadTeam();
      loadSponsors();
      loadCharity();
      loadGallery();
    } else {
      console.warn('Firebase yuklanmadi');
    }
  } catch (e) {
    console.warn('Firebase init:', e);
  }

  // API prayer times (backup)
  loadApiPrayerTimes();

  // Active prayer highlight har minutda yangilash
  setInterval(() => {
    highlightActivePrayer();
    updateDate();
  }, 60000);
});
