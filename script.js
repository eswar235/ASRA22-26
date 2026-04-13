/* ============================================================
   ASRA CSE 2022–2026 — Main Script
   ============================================================ */

'use strict';

// ============================================================
// STUDENT DATA
// ============================================================
const students = [
  { id: 1,  name: "ABHISHEK AKASH SURAWAR",        hallTicket: "22PT1A0501", tagline: "The one who always had a plan 📋" },
  { id: 2,  name: "AMBALLA VAMSHI",                hallTicket: "22PT1A0502", tagline: "Vibes only, no bad days 🌊" },
  { id: 3,  name: "ANGOTHU MANJULA",               hallTicket: "22PT1A0503", tagline: "Quiet strength, loud heart 💜" },
  { id: 4,  name: "MAHENDAR",                       hallTicket: "22PT1A0504", tagline: "Cool head, warm soul 😎" },
  { id: 5,  name: "ATIKAM YOGESHWAR GOUD",         hallTicket: "22PT1A0505", tagline: "Debugger by day, dreamer by night 🌙" },
  { id: 6,  name: "B ANJANEYULU",                  hallTicket: "22PT1A0506", tagline: "The energy of the room 🔥" },
  { id: 7,  name: "BATTU SRIKANTH",                hallTicket: "22PT1A0507", tagline: "Code, coffee, repeat ☕" },
  { id: 8,  name: "CHATHARABOINA SHRAVAN KUMAR",   hallTicket: "22PT1A0508", tagline: "Always there when it matters 🤝" },
  { id: 9,  name: "EETE KRISHNA",                  hallTicket: "22PT1A0509", tagline: "Calm like the ocean, deep like code 🌊" },
  { id: 10, name: "EROLL AMBIKA",                  hallTicket: "22PT1A0510", tagline: "Sunshine in human form ☀️" },
  { id: 11, name: "ESLAVATH SAIKUMAR",             hallTicket: "22PT1A0511", tagline: "Hard work never looked this good 💪" },
  { id: 12, name: "GOVDA THANMAI SRI",             hallTicket: "22PT1A0512", tagline: "Smart, kind, unstoppable 🚀" },
  { id: 13, name: "GUDURU SRIRAM",                 hallTicket: "22PT1A0513", tagline: "The legend of lab sessions 🏆" },
  { id: 14, name: "JULAKANTI LAXMI SATHVIK REDDY", hallTicket: "22PT1A0514", tagline: "Born to lead, built to inspire ⭐" },
  { id: 15, name: "KAILA POOJITHA RANI",           hallTicket: "22PT1A0515", tagline: "Grace and grit in equal measure 💎" },
  { id: 16, name: "KAMA ABHIGNYA",                 hallTicket: "22PT1A0516", tagline: "Brains + heart = unstoppable 🧠" },
  { id: 17, name: "KANDULA SUMANTH KUMAR RAJA",    hallTicket: "22PT1A0517", tagline: "The one who made it look easy 👑" },
  { id: 18, name: "KATLA MANISH",                  hallTicket: "22PT1A0518", tagline: "Hustle in silence, shine in public ✨" },
  { id: 19, name: "KATTEKOLA LOKESH",              hallTicket: "22PT1A0519", tagline: "Loyal friend, fierce coder 🛡️" },
  { id: 20, name: "KOMATISHETTY PRATHYUSHA",       hallTicket: "22PT1A0520", tagline: "Turning dreams into deployments 🌟" },
  { id: 21, name: "KOMMU MADHU",                   hallTicket: "22PT1A0521", tagline: "Sweet name, sweeter soul 🍯" },
  { id: 22, name: "KOPPISETTY SRI SAI VENKAT",     hallTicket: "22PT1A0522", tagline: "The guy with all the answers 📚" },
  { id: 23, name: "MANUBOLU AKHILA",               hallTicket: "22PT1A0523", tagline: "Creativity wrapped in kindness 🎨" },
  { id: 24, name: "NALLA SAI TEJASHWINI",          hallTicket: "22PT1A0524", tagline: "Shining bright since day one ⭐" },
  { id: 25, name: "NARRA RAMANA REDDY",            hallTicket: "22PT1A0525", tagline: "Steady, reliable, always there 🏔️" },
  { id: 26, name: "NIRUDI BHAVANI",                hallTicket: "22PT1A0527", tagline: "Warmth that fills every room 🌸" },
  { id: 27, name: "PASUPULETI TEJASWINI",          hallTicket: "22PT1A0528", tagline: "Elegance meets excellence 💫" },
  { id: 28, name: "PATNALA BHARATH KUMAR",         hallTicket: "22PT1A0529", tagline: "The backbone of every group project 🔧" },
  { id: 29, name: "PILAGALA KRISHNA KISHORE",      hallTicket: "22PT1A0530", tagline: "Quiet genius, loud results 🎯" },
  { id: 30, name: "PONGURU BHANU PRAKASH REDDY",   hallTicket: "22PT1A0531", tagline: "Big dreams, bigger execution 🚀" },
  { id: 31, name: "RASALA VENU",                   hallTicket: "22PT1A0532", tagline: "The friend everyone needed 🤗" },
  { id: 32, name: "SINGAPURAM JAYASREE",           hallTicket: "22PT1A0533", tagline: "Joy personified, always smiling 😊" },
  { id: 33, name: "SOULE VEENA BAI",               hallTicket: "22PT1A0534", tagline: "Melody in every moment 🎵" },
  { id: 34, name: "THUMU SOWMYA",                  hallTicket: "22PT1A0535", tagline: "Soft spoken, strong willed 💪" },
  { id: 35, name: "VANGALA VISHWAK",               hallTicket: "22PT1A0536", tagline: "The one who never gave up 🏅" },
  { id: 36, name: "YAKALA ANJALI",                 hallTicket: "22PT1A0537", tagline: "Laughter is her superpower 😄" },
  { id: 37, name: "BANTU KAVYA BHAVANI",           hallTicket: "22PT1A0538", tagline: "Fierce, focused, fabulous 💅" },
  { id: 38, name: "BASANI GANESH",                 hallTicket: "22PT1A0539", tagline: "The problem solver of the batch 🔍" },
  { id: 39, name: "DAYAPA PREETHI",                hallTicket: "22PT1A0540", tagline: "Kindness is her coding language 💖" },
  { id: 40, name: "J SNEHA",                       hallTicket: "22PT1A0541", tagline: "Sneha by name, sunshine by nature ☀️" },
  { id: 41, name: "K HARSHAVARDHAN REDDY",         hallTicket: "22PT1A0542", tagline: "Harsh on bugs, soft on friends 🐛" },
  { id: 42, name: "MANKENA YAMINI",                hallTicket: "22PT1A0543", tagline: "Night sky energy — calm and full of stars 🌌" },
  { id: 43, name: "PODUMALA VAMSHI",               hallTicket: "22PT1A0544", tagline: "The one who made every day fun 🎉" },
  { id: 44, name: "SAYYED AFROZ PASHA",            hallTicket: "22PT1A0545", tagline: "Respect, hustle, repeat 🙌" },
  { id: 45, name: "SILIGI REDDY DEEKSHITHA",       hallTicket: "22PT1A0546", tagline: "Determined, dedicated, destined 🌠" },
  { id: 46, name: "BARI GANESH",                   hallTicket: "22PT1A0547", tagline: "Ganesh — the remover of obstacles 🐘" },
  { id: 47, name: "BATTU WAR SURYAN",              hallTicket: "22PT1A0548", tagline: "Rising like the sun, every single day 🌅" },
  { id: 48, name: "BETAMSETTY ESWAR",              hallTicket: "22PT1A0549", tagline: "The calm in every storm 🌊" },
  { id: 49, name: "BIRUDU SOUMYA",                 hallTicket: "22PT1A0550", tagline: "Soumya — gentle, brilliant, unforgettable 🌺" },
  { id: 50, name: "CHINTHAKUNTLA AKHILA",          hallTicket: "22PT1A0551", tagline: "Akhila — complete in every way 💯" },
  { id: 51, name: "DALLI RAMYA",                   hallTicket: "22PT1A0552", tagline: "Ramya — beautiful inside and out 🌷" },
  { id: 52, name: "KADARI MANOJ",                  hallTicket: "22PT1A0553", tagline: "The one who kept the class together 🤝" },
  { id: 53, name: "KONDA BHARATH",                 hallTicket: "22PT1A0554", tagline: "Bharath — pride of the batch 🇮🇳" },
  { id: 54, name: "MUNUKURI VENKATA NARAYANA",     hallTicket: "22PT1A0555", tagline: "Wisdom beyond his years 🦉" },
  { id: 55, name: "PALLAPU AJAY",                  hallTicket: "22PT1A0556", tagline: "Ajay — the undefeated spirit 🏆" },
  { id: 56, name: "PARSAGANI KAVYA",               hallTicket: "22PT1A0557", tagline: "Kavya — poetry in motion 📝" },
  { id: 57, name: "PATHAN SAMEERKHAN IBRAHIM",     hallTicket: "22PT1A0558", tagline: "Sameer — the breeze that lifts everyone 🌬️" },
  { id: 58, name: "REDDYPALLI NIKHIL",             hallTicket: "22PT1A0560", tagline: "Nikhil — flawless, always 💎" },
  { id: 59, name: "SALINA BEHRA",                  hallTicket: "22PT1A0561", tagline: "Salina — the heart of the class 💗" },
  { id: 60, name: "SELVA AKSHITHA",                hallTicket: "22PT1A0562", tagline: "Akshitha — indestructible and brilliant 🔥" },
  { id: 61, name: "SIKKAKOLLA SAIRAHUL",           hallTicket: "22PT1A0563", tagline: "Rahul — the one who made it look cool 😎" },
  { id: 62, name: "ANDOL VARSHITHA",               hallTicket: "23PT5A0501", tagline: "Varshitha — refreshing as the rain 🌧️" },
  { id: 63, name: "JAALA ANAND",                   hallTicket: "23PT5A0502", tagline: "Anand — pure joy, always 😊" },
  { id: 64, name: "GATTU PALLAVI",                 hallTicket: "23PT5A0503", tagline: "Pallavi — the melody of our batch 🎶" }
];

const emojis = ['👨‍💻','👩‍💻','🧑‍💻','👨‍🎓','👩‍🎓','🧑‍🎓','🧑‍🏫','👨‍🔬','👩‍🔬','🧑‍🎨'];
const getEmoji = id => emojis[id % emojis.length];

// ============================================================
// NAVBAR
// ============================================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ============================================================
// HERO SLIDESHOW
// ============================================================
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 4000);

// ============================================================
// TYPING ANIMATION
// ============================================================
const phrases = [
  "Four years. One family. Infinite memories.",
  "We came as strangers, we leave as legends.",
  "Late nights, shared dreams, lifelong bonds.",
  "Not just a batch — a brotherhood & sisterhood.",
  "The journey ends. The story never does."
];
let phraseIdx = 0, charIdx = 0, deleting = false;
const typingEl = document.getElementById('typingText');

function type() {
  const phrase = phrases[phraseIdx];
  if (!deleting) {
    typingEl.textContent = phrase.slice(0, ++charIdx);
    if (charIdx === phrase.length) { deleting = true; setTimeout(type, 2200); return; }
  } else {
    typingEl.textContent = phrase.slice(0, --charIdx);
    if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; }
  }
  setTimeout(type, deleting ? 40 : 70);
}
type();

// ============================================================
// MUSIC
// ============================================================
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
let playing = false;
musicBtn.addEventListener('click', () => {
  if (playing) { music.pause(); musicBtn.classList.remove('playing'); }
  else { music.play().catch(() => {}); musicBtn.classList.add('playing'); }
  playing = !playing;
});

// ============================================================
// SCROLL REVEAL
// ============================================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('revealed'); revealObserver.unobserve(e.target); }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => revealObserver.observe(el));

// ============================================================
// BATCH MEMBERS
// ============================================================
const membersGrid = document.getElementById('membersGrid');
const memberSearch = document.getElementById('memberSearch');
const memberCount = document.getElementById('memberCount');
const noResults = document.getElementById('noResults');

function renderMembers(list) {
  membersGrid.innerHTML = '';
  noResults.style.display = list.length === 0 ? 'block' : 'none';
  memberCount.textContent = `${list.length} student${list.length !== 1 ? 's' : ''}`;
  list.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'member-card';
    card.style.animationDelay = `${i * 0.04}s`;
    card.innerHTML = `
      <div class="member-avatar">${getEmoji(s.id)}</div>
      <div class="member-name">${s.name}</div>
      <div class="member-ht">${s.hallTicket}</div>
      <div class="member-tagline">${s.tagline}</div>
    `;
    card.addEventListener('click', () => openMemberModal(s));
    membersGrid.appendChild(card);
  });
}

renderMembers(students);

memberSearch.addEventListener('input', () => {
  const q = memberSearch.value.toLowerCase().trim();
  renderMembers(q ? students.filter(s => s.name.toLowerCase().includes(q)) : students);
});

// ============================================================
// MEMBER MODAL
// ============================================================
const studentModal = document.getElementById('studentModal');
const modalBox = document.getElementById('modalBox');
const modalBackdrop = document.getElementById('modalBackdrop');

function openMemberModal(s) {
  modalBox.innerHTML = `
    <button class="modal-close" id="modalClose">✕</button>
    <div class="modal-avatar">${getEmoji(s.id)}</div>
    <div class="modal-name">${s.name}</div>
    <div class="modal-ht">${s.hallTicket}</div>
    <div class="modal-divider"></div>
    <div class="modal-field">
      <div class="modal-field-label">Batch</div>
      <div class="modal-field-value">ASRA CSE 2022–2026</div>
    </div>
    <div class="modal-field">
      <div class="modal-field-label">Tagline</div>
      <div class="modal-field-value" style="font-style:italic;color:var(--muted)">${s.tagline}</div>
    </div>
  `;
  studentModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  document.getElementById('modalClose').addEventListener('click', closeMemberModal);
}

function closeMemberModal() {
  studentModal.classList.remove('active');
  document.body.style.overflow = '';
}

modalBackdrop.addEventListener('click', closeMemberModal);

// ============================================================
// GALLERY LIGHTBOX
// ============================================================
const galleryPhotos = [
  { src: "https://raw.githubusercontent.com/eswar235/asra-22-26/main/images/WhatsApp%20Image%202026-03-30%20at%208.46.07%20PM.jpeg", caption: "Avanthi's College — Our Batch ❤️" },
  { src: "https://raw.githubusercontent.com/eswar235/asra-22-26/main/images/WhatsApp%20Image%202026-03-30%20at%208.46.07%20PM%20(1).jpeg", caption: "Trip Vibes 🔥" },
  { src: "https://raw.githubusercontent.com/eswar235/asra-22-26/main/images/WhatsApp%20Image%202026-03-30%20at%208.46.08%20PM.jpeg", caption: "Night Out 🌙" },
  { src: "https://raw.githubusercontent.com/eswar235/asra-22-26/main/images/WhatsApp%20Image%202026-03-30%20at%208.46.08%20PM%20(1).jpeg", caption: "Campus Days ☀️" }
];

const lightbox = document.getElementById('lightbox');
const lbContent = document.getElementById('lbContent');
const lbCaption = document.getElementById('lbCaption');
const lbBackdrop = document.getElementById('lbBackdrop');
let lbCurrent = 0;

function openLightbox(idx) {
  lbCurrent = idx;
  showLbPhoto();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function showLbPhoto() {
  const p = galleryPhotos[lbCurrent];
  lbContent.innerHTML = `<img src="${p.src}" alt="${p.caption}" />`;
  lbCaption.textContent = p.caption;
}

document.getElementById('lbClose').addEventListener('click', () => {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
});
lbBackdrop.addEventListener('click', () => {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
});
document.getElementById('lbPrev').addEventListener('click', () => {
  lbCurrent = (lbCurrent - 1 + galleryPhotos.length) % galleryPhotos.length;
  showLbPhoto();
});
document.getElementById('lbNext').addEventListener('click', () => {
  lbCurrent = (lbCurrent + 1) % galleryPhotos.length;
  showLbPhoto();
});

// expose for inline onclick
window.openLightbox = openLightbox;

// ============================================================
// GRADUATION POPUP + CONFETTI
// ============================================================
const gradModal = document.getElementById('gradModal');
const gradBackdrop = document.getElementById('gradBackdrop');
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
let confettiParticles = [], confettiRunning = false;

document.getElementById('graduationBtn').addEventListener('click', () => {
  gradModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  launchConfetti();
});

document.getElementById('gradClose').addEventListener('click', () => {
  gradModal.classList.remove('active');
  document.body.style.overflow = '';
  stopConfetti();
});

gradBackdrop.addEventListener('click', () => {
  gradModal.classList.remove('active');
  document.body.style.overflow = '';
  stopConfetti();
});

function launchConfetti() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  confettiParticles = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    w: Math.random() * 12 + 6,
    h: Math.random() * 6 + 4,
    color: ['#8b5cf6','#3b82f6','#ec4899','#f59e0b','#10b981','#f97316'][Math.floor(Math.random() * 6)],
    speed: Math.random() * 3 + 2,
    angle: Math.random() * 360,
    spin: (Math.random() - 0.5) * 6,
    drift: (Math.random() - 0.5) * 2
  }));
  confettiRunning = true;
  animateConfetti();
}

function animateConfetti() {
  if (!confettiRunning) { ctx.clearRect(0, 0, canvas.width, canvas.height); return; }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiParticles.forEach(p => {
    p.y += p.speed;
    p.x += p.drift;
    p.angle += p.spin;
    if (p.y > canvas.height) { p.y = -20; p.x = Math.random() * canvas.width; }
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle * Math.PI / 180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    ctx.restore();
  });
  requestAnimationFrame(animateConfetti);
}

function stopConfetti() {
  confettiRunning = false;
  setTimeout(() => ctx.clearRect(0, 0, canvas.width, canvas.height), 100);
}

window.addEventListener('resize', () => {
  if (confettiRunning) { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
});

// ============================================================
// KEYBOARD NAVIGATION
// ============================================================
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeMemberModal();
    lightbox.classList.remove('active');
    gradModal.classList.remove('active');
    document.body.style.overflow = '';
    stopConfetti();
  }
  if (lightbox.classList.contains('active')) {
    if (e.key === 'ArrowLeft') { lbCurrent = (lbCurrent - 1 + galleryPhotos.length) % galleryPhotos.length; showLbPhoto(); }
    if (e.key === 'ArrowRight') { lbCurrent = (lbCurrent + 1) % galleryPhotos.length; showLbPhoto(); }
  }
});
