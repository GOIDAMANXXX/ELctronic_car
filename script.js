// Load translations from embedded JSON
const i18n = JSON.parse(document.getElementById('i18n-json').textContent);
const langSwitcher = document.getElementById('language-switcher');
const themeToggle = document.getElementById('theme-toggle');

// Initialize page from localStorage or defaults
const savedLang = localStorage.getItem('carlab_lang') || 'en';
const savedTheme = localStorage.getItem('carlab_theme') || 'light';

function applyTranslations(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
  });
  // also update hidden lang for forms
  const langHidden = document.getElementById('lang-hidden');
  if(langHidden) langHidden.value = lang;

  // Update map popup if map exists
  if(window.marker && i18n[lang] && i18n[lang].map_popup){
    window.marker.bindPopup(i18n[lang].map_popup);
  }
}

function applyTheme(theme){
  if(theme === 'dark') document.body.classList.add('dark-theme');
  else document.body.classList.remove('dark-theme');
  localStorage.setItem('carlab_theme', theme);
}
// Setup initial UI
langSwitcher.value = savedLang;
applyTranslations(savedLang);
applyTheme(savedTheme);
document.getElementById('year').textContent = new Date().getFullYear();

// Event listeners
langSwitcher.addEventListener('change', (e)=>{
  const lang = e.target.value;
  applyTranslations(lang);
  localStorage.setItem('carlab_lang', lang);
});

themeToggle.addEventListener('click', ()=>{
  const isDark = document.body.classList.toggle('dark-theme');
  localStorage.setItem('carlab_theme', isDark ? 'dark' : 'light');
});

// Simple smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    const el = document.querySelector(href);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// Initialize Leaflet map
function initMap(){
  const mapEl = document.getElementById('map');
  if(!mapEl) return;
  // Coordinates: Tengiz Sheshelidze St 19A
  const lat = 41.787451, lon = 44.804292;
  const map = L.map('map').setView([lat, lon], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  window.marker = L.marker([lat, lon]).addTo(map);
  // bind popup in current language
  const lang = localStorage.getItem('carlab_lang') || 'en';
  const popupText = (i18n[lang] && i18n[lang].map_popup) ? i18n[lang].map_popup : 'CARLAB — Tbilisi';
  window.marker.bindPopup(popupText).openPopup();
}

document.addEventListener('DOMContentLoaded', ()=>{
  initMap();
  // small entrance animation for cards
  document.querySelectorAll('.card').forEach((el,i)=>{
    el.style.opacity = 0;
    setTimeout(()=> el.style.transition = 'opacity .45s ease, transform .45s ease', 120*i);
    setTimeout(()=> el.style.opacity = 1, 150 + 120*i);
  });
});