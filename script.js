// ASRA CSE 2022-2026 — script.js (ES Module, Firebase v10)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, deleteDoc, doc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
// Storage via Cloudinary (free, no credit card needed)

// ── Firebase init ──────────────────────────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyDMpMSNF8n6jWG78q96sgDGIRNGb2iEOrs",
  authDomain: "asra-2226-a99ff.firebaseapp.com",
  projectId: "asra-2226-a99ff",
  storageBucket: "asra-2226-a99ff.firebasestorage.app",
  messagingSenderId: "664481130068",
  appId: "1:664481130068:web:7180c08afc5809d4f1efc1"
};
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

// ── Cloudinary config (free image/video hosting) ───────────────────────────────
const CLOUDINARY_CLOUD = "dqgx7djig";
const CLOUDINARY_PRESET = "asra_upload";

// ── Student data ───────────────────────────────────────────────────────────────
const students = [
  { id: 1,  name: "ABHISHEK AKASH SURAWAR",        hallTicket: "22PT1A0501", phone: "8406184061", tagline: "The one who always had a plan 📋" },
  { id: 2,  name: "AMBALLA VAMSHI",                hallTicket: "22PT1A0502", phone: "9573216722", tagline: "Vibes only, no bad days 🌊" },
  { id: 3,  name: "ANGOTHU MANJULA",               hallTicket: "22PT1A0503", phone: "9391890913", tagline: "Quiet strength, loud heart 💜" },
  { id: 4,  name: "MAHENDAR",                       hallTicket: "22PT1A0504", phone: "9505179496", tagline: "Cool head, warm soul 😎" },
  { id: 5,  name: "ATIKAM YOGESHWAR GOUD",         hallTicket: "22PT1A0505", phone: "7386671925", tagline: "Debugger by day, dreamer by night 🌙" },
  { id: 6,  name: "B ANJANEYULU",                  hallTicket: "22PT1A0506", phone: "8688772983", tagline: "The energy of the room 🔥" },
  { id: 7,  name: "BATTU SRIKANTH",                hallTicket: "22PT1A0507", phone: "7731862470", tagline: "Code, coffee, repeat ☕" },
  { id: 8,  name: "CHATHARABOINA SHRAVAN KUMAR",   hallTicket: "22PT1A0508", phone: "6304762209", tagline: "Always there when it matters 🤝" },
  { id: 9,  name: "EETE KRISHNA",                  hallTicket: "22PT1A0509", phone: "7995202434", tagline: "Calm like the ocean, deep like code 🌊" },
  { id: 10, name: "EROLL AMBIKA",                  hallTicket: "22PT1A0510", phone: "8978315671", tagline: "Sunshine in human form ☀️" },
  { id: 11, name: "ESLAVATH SAIKUMAR",             hallTicket: "22PT1A0511", phone: "7569674146", tagline: "Hard work never looked this good 💪" },
  { id: 12, name: "GOVDA THANMAI SRI",             hallTicket: "22PT1A0512", phone: "9059795459", tagline: "Smart, kind, unstoppable 🚀" },
  { id: 13, name: "GUDURU SRIRAM",                 hallTicket: "22PT1A0513", phone: "9182890017", tagline: "The legend of lab sessions 🏆" },
  { id: 14, name: "JULAKANTI LAXMI SATHVIK REDDY", hallTicket: "22PT1A0514", phone: "7995492103", tagline: "Born to lead, built to inspire ⭐" },
  { id: 15, name: "KAILA POOJITHA RANI",           hallTicket: "22PT1A0515", phone: "6304256940", tagline: "Grace and grit in equal measure 💎" },
  { id: 16, name: "KAMA ABHIGNYA",                 hallTicket: "22PT1A0516", phone: "9381364351", tagline: "Brains + heart = unstoppable 🧠" },
  { id: 17, name: "KANDULA SUMANTH KUMAR RAJA",    hallTicket: "22PT1A0517", phone: "8466925549", tagline: "The one who made it look easy 👑" },
  { id: 18, name: "KATLA MANISH",                  hallTicket: "22PT1A0518", phone: "9492037596", tagline: "Hustle in silence, shine in public ✨" },
  { id: 19, name: "KATTEKOLA LOKESH",              hallTicket: "22PT1A0519", phone: "9440837843", tagline: "Loyal friend, fierce coder 🛡️" },
  { id: 20, name: "KOMATISHETTY PRATHYUSHA",       hallTicket: "22PT1A0520", phone: "8074779082", tagline: "Turning dreams into deployments 🌟" },
  { id: 21, name: "KOMMU MADHU",                   hallTicket: "22PT1A0521", phone: "9676401903", tagline: "Sweet name, sweeter soul 🍯" },
  { id: 22, name: "KOPPISETTY SRI SAI VENKAT",     hallTicket: "22PT1A0522", phone: "9705606344", tagline: "The guy with all the answers 📚" },
  { id: 23, name: "MANUBOLU AKHILA",               hallTicket: "22PT1A0523", phone: "7032343031", tagline: "Creativity wrapped in kindness 🎨" },
  { id: 24, name: "NALLA SAI TEJASHWINI",          hallTicket: "22PT1A0524", phone: "9441151789", tagline: "Shining bright since day one ⭐" },
  { id: 25, name: "NARRA RAMANA REDDY",            hallTicket: "22PT1A0525", phone: "9398359035", tagline: "Steady, reliable, always there 🏔️" },
  { id: 26, name: "NIRUDI BHAVANI",                hallTicket: "22PT1A0527", phone: "9963593137", tagline: "Warmth that fills every room 🌸" },
  { id: 27, name: "PASUPULETI TEJASWINI",          hallTicket: "22PT1A0528", phone: "8978660281", tagline: "Elegance meets excellence 💫" },
  { id: 28, name: "PATNALA BHARATH KUMAR",         hallTicket: "22PT1A0529", phone: "9848837098", tagline: "The backbone of every group project 🔧" },
  { id: 29, name: "PILAGALA KRISHNA KISHORE",      hallTicket: "22PT1A0530", phone: "9346749646", tagline: "Quiet genius, loud results 🎯" },
  { id: 30, name: "PONGURU BHANU PRAKASH REDDY",   hallTicket: "22PT1A0531", phone: "6300501630", tagline: "Big dreams, bigger execution 🚀" },
  { id: 31, name: "RASALA VENU",                   hallTicket: "22PT1A0532", phone: "8008477726", tagline: "The friend everyone needed 🤗" },
  { id: 32, name: "SINGAPURAM JAYASREE",           hallTicket: "22PT1A0533", phone: "9347961207", tagline: "Joy personified, always smiling 😊" },
  { id: 33, name: "SOULE VEENA BAI",               hallTicket: "22PT1A0534", phone: "9989551117", tagline: "Melody in every moment 🎵" },
  { id: 34, name: "THUMU SOWMYA",                  hallTicket: "22PT1A0535", phone: "8985256918", tagline: "Soft spoken, strong willed 💪" },
  { id: 35, name: "VANGALA VISHWAK",               hallTicket: "22PT1A0536", phone: "7671868421", tagline: "The one who never gave up 🏅" },
  { id: 36, name: "YAKALA ANJALI",                 hallTicket: "22PT1A0537", phone: "9966800907", tagline: "Laughter is her superpower 😄" },
  { id: 37, name: "BANTU KAVYA BHAVANI",           hallTicket: "22PT1A0538", phone: "9666744405", tagline: "Fierce, focused, fabulous 💅" },
  { id: 38, name: "BASANI GANESH",                 hallTicket: "22PT1A0539", phone: "7386895943", tagline: "The problem solver of the batch 🔍" },
  { id: 39, name: "DAYAPA PREETHI",                hallTicket: "22PT1A0540", phone: "7386817608", tagline: "Kindness is her coding language 💖" },
  { id: 40, name: "J SNEHA",                       hallTicket: "22PT1A0541", phone: "8639633832", tagline: "Sneha by name, sunshine by nature ☀️" },
  { id: 41, name: "K HARSHAVARDHAN REDDY",         hallTicket: "22PT1A0542", phone: "8520092541", tagline: "Harsh on bugs, soft on friends 🐛" },
  { id: 42, name: "MANKENA YAMINI",                hallTicket: "22PT1A0543", phone: "9347810072", tagline: "Night sky energy — calm and full of stars 🌌" },
  { id: 43, name: "PODUMALA VAMSHI",               hallTicket: "22PT1A0544", phone: "8328461967", tagline: "The one who made every day fun 🎉" },
  { id: 44, name: "SAYYED AFROZ PASHA",            hallTicket: "22PT1A0545", phone: "9392763199", tagline: "Respect, hustle, repeat 🙌" },
  { id: 45, name: "SILIGI REDDY DEEKSHITHA",       hallTicket: "22PT1A0546", phone: "9391553846", tagline: "Determined, dedicated, destined 🌠" },
  { id: 46, name: "BARI GANESH",                   hallTicket: "22PT1A0547", phone: "8374365950", tagline: "Ganesh — the remover of obstacles 🐘" },
  { id: 47, name: "BATTU WAR SURYAN",              hallTicket: "22PT1A0548", phone: "8919549387", tagline: "Rising like the sun, every single day 🌅" },
  { id: 48, name: "BETAMSETTY ESWAR",              hallTicket: "22PT1A0549", phone: "7288955798", tagline: "The calm in every storm 🌊" },
  { id: 49, name: "BIRUDU SOUMYA",                 hallTicket: "22PT1A0550", phone: "7670914669", tagline: "Soumya — gentle, brilliant, unforgettable 🌺" },
  { id: 50, name: "CHINTHAKUNTLA AKHILA",          hallTicket: "22PT1A0551", phone: "9014121928", tagline: "Akhila — complete in every way 💯" },
  { id: 51, name: "DALLI RAMYA",                   hallTicket: "22PT1A0552", phone: "8555843898", tagline: "Ramya — beautiful inside and out 🌷" },
  { id: 52, name: "KADARI MANOJ",                  hallTicket: "22PT1A0553", phone: "6300273067", tagline: "The one who kept the class together 🤝" },
  { id: 53, name: "KONDA BHARATH",                 hallTicket: "22PT1A0554", phone: "9391094600", tagline: "Bharath — pride of the batch 🇮🇳" },
  { id: 54, name: "MUNUKURI VENKATA NARAYANA",     hallTicket: "22PT1A0555", phone: "9392416937", tagline: "Wisdom beyond his years 🦉" },
  { id: 55, name: "PALLAPU AJAY",                  hallTicket: "22PT1A0556", phone: "9951932005", tagline: "Ajay — the undefeated spirit 🏆" },
  { id: 56, name: "PARSAGANI KAVYA",               hallTicket: "22PT1A0557", phone: "7075371157", tagline: "Kavya — poetry in motion 📝" },
  { id: 57, name: "PATHAN SAMEERKHAN IBRAHIM",     hallTicket: "22PT1A0558", phone: "9158243331", tagline: "Sameer — the breeze that lifts everyone 🌬️" },
  { id: 58, name: "REDDYPALLI NIKHIL",             hallTicket: "22PT1A0560", phone: "9398215032", tagline: "Nikhil — flawless, always 💎" },
  { id: 59, name: "SALINA BEHRA",                  hallTicket: "22PT1A0561", phone: "7671290251", tagline: "Salina — the heart of the class 💗" },
  { id: 60, name: "SELVA AKSHITHA",                hallTicket: "22PT1A0562", phone: "9059988271", tagline: "Akshitha — indestructible and brilliant 🔥" },
  { id: 61, name: "SIKKAKOLLA SAIRAHUL",           hallTicket: "22PT1A0563", phone: "9346433895", tagline: "Rahul — the one who made it look cool 😎" },
  { id: 62, name: "ANDOL VARSHITHA",               hallTicket: "23PT5A0501", phone: "8885185767", tagline: "Varshitha — refreshing as the rain 🌧️" },
  { id: 63, name: "JAALA ANAND",                   hallTicket: "23PT5A0502", phone: "9553474071", tagline: "Anand — pure joy, always 😊" },
  { id: 64, name: "GATTU PALLAVI",                 hallTicket: "23PT5A0503", phone: "9949509290", tagline: "Pallavi — the melody of our batch 🎶" }
];

// ── Static gallery photos ──────────────────────────────────────────────────────
const staticPhotos = [
  { src: "https://raw.githubusercontent.com/eswar235/asra-22-26/main/images/WhatsApp%20Image%202026-03-30%20at%208.46.07%20PM.jpeg",       caption: "Avanthi's College — Our Batch ❤️" },
  { src: "https://raw.githubusercontent.com/eswar235/asra-22-26/main/images/WhatsApp%20Image%202026-03-30%20at%208.46.07%20PM%20(1).jpeg", caption: "Trip Vibes 🔥" },
  { src: "https://raw.githubusercontent.com/eswar235/asra-22-26/main/images/WhatsApp%20Image%202026-03-30%20at%208.46.08%20PM.jpeg",       caption: "Night Out 🌙" },
  { src: "https://raw.githubusercontent.com/eswar235/asra-22-26/main/images/WhatsApp%20Image%202026-03-30%20at%208.46.08%20PM%20(1).jpeg", caption: "Campus Days ☀️" }
];

// ── Emoji avatars pool ─────────────────────────────────────────────────────────
const avatarEmojis = ["🧑‍💻","👩‍💻","🎓","🌟","🚀","💡","🔥","🎯","💎","🌈","⚡","🦋","🌺","🏆","🎨","🌙","☀️","🌊","🎵","💫"];

// ── Navbar scroll ──────────────────────────────────────────────────────────────
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

// ── Mobile nav toggle ──────────────────────────────────────────────────────────
const navToggle = document.getElementById("navToggle");
const navLinks  = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

// ── Hero slideshow ─────────────────────────────────────────────────────────────
(function initSlideshow() {
  const slides = document.querySelectorAll(".hero-slide");
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 4000);
})();

// ── Typing animation ───────────────────────────────────────────────────────────
(function initTyping() {
  const phrases = [
    "Four years. One family. Forever. 💜",
    "From strangers to siblings. 🤝",
    "We didn't just earn a degree — we built each other. 🎓",
    "ASRA CSE 2022–2026 — Always in our hearts. ❤️",
    "The journey ends. The memories never do. 🌟"
  ];
  const el = document.getElementById("typingText");
  let pi = 0, ci = 0, deleting = false;
  function tick() {
    const phrase = phrases[pi];
    if (!deleting) {
      el.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) { deleting = true; setTimeout(tick, 2200); return; }
    } else {
      el.textContent = phrase.slice(0, --ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
    }
    setTimeout(tick, deleting ? 40 : 80);
  }
  tick();
})();

// ── Music toggle ───────────────────────────────────────────────────────────────
(function initMusic() {
  const btn   = document.getElementById("musicBtn");
  const audio = document.getElementById("bgMusic");
  btn.addEventListener("click", () => {
    if (audio.paused) { audio.play(); btn.classList.add("playing"); btn.textContent = "🎶"; }
    else              { audio.pause(); btn.classList.remove("playing"); btn.textContent = "🎵"; }
  });
})();

// ── Scroll reveal ──────────────────────────────────────────────────────────────
(function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal-up,.reveal-left,.reveal-right").forEach(el => io.observe(el));
})();

// ── Batch members grid ─────────────────────────────────────────────────────────
(function initMembers() {
  const grid    = document.getElementById("membersGrid");
  const search  = document.getElementById("memberSearch");
  const counter = document.getElementById("memberCount");
  const noRes   = document.getElementById("noResults");

  function render(list) {
    grid.innerHTML = "";
    list.forEach((s, i) => {
      const emoji = avatarEmojis[s.id % avatarEmojis.length];
      const card  = document.createElement("div");
      card.className = "member-card";
      card.style.animationDelay = `${(i % 12) * 0.04}s`;
      card.innerHTML = `
        <div class="member-avatar">${emoji}</div>
        <div class="member-name">${s.name}</div>
        <div class="member-ht">${s.hallTicket}</div>
        <div class="member-tagline">${s.tagline}</div>`;
      card.addEventListener("click", () => openMemberModal(s, emoji));
      grid.appendChild(card);
    });
    counter.textContent = `${list.length} student${list.length !== 1 ? "s" : ""}`;
    noRes.style.display = list.length ? "none" : "block";
  }

  render(students);

  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    render(q ? students.filter(s => s.name.toLowerCase().includes(q) || s.hallTicket.toLowerCase().includes(q)) : students);
  });
})();

// ── Member modal ───────────────────────────────────────────────────────────────
function openMemberModal(s, emoji) {
  const modal = document.getElementById("memberModal");
  const box   = document.getElementById("memberModalBox");
  box.innerHTML = `
    <button class="modal-close-btn" id="memberModalClose">✕</button>
    <div class="modal-avatar">${emoji}</div>
    <div class="modal-name">${s.name}</div>
    <div class="modal-ht">${s.hallTicket}</div>
    <div class="modal-divider"></div>
    <div class="modal-field"><div class="modal-field-label">📞 Phone</div><div class="modal-field-value"><a href="tel:${s.phone}" style="color:var(--purple);font-weight:600">${s.phone}</a></div></div>
    <div class="modal-field"><div class="modal-field-label">🏷️ Tagline</div><div class="modal-field-value" style="font-style:italic;color:var(--muted)">${s.tagline}</div></div>
    <div class="modal-field"><div class="modal-field-label">🎓 Batch</div><div class="modal-field-value">ASRA CSE 2022–2026</div></div>`;
  modal.classList.add("active");
  document.getElementById("memberModalClose").addEventListener("click", () => modal.classList.remove("active"));
  document.getElementById("memberModalBackdrop").addEventListener("click", () => modal.classList.remove("active"));
}

// ── Unified lightbox ───────────────────────────────────────────────────────────
// mode: "static" | "firebase"
let lbMode  = "static";
let lbIndex = 0;
let fbLbIndexStatic = 0;
let lbAutoInterval = null;

function openLightbox(index) {
  lbMode  = "static";
  lbIndex = index;
  renderLightbox();
  stopAutoSlide();
  document.getElementById("lightbox").classList.add("active");
}

function renderLightbox() {
  if (lbMode === "static") {
    const photo = staticPhotos[lbIndex];
    document.getElementById("lbContent").innerHTML = `<img src="${photo.src}" alt="${photo.caption}" />`;
    document.getElementById("lbCaption").textContent = photo.caption;
    document.getElementById("lbDownload").onclick = () => downloadFile(photo.src, `batch-photo-${lbIndex + 1}.jpg`);
  } else {
    const item = fbImageItems[fbLbIndexStatic];
    document.getElementById("lbContent").innerHTML = `<img src="${item.url}" alt="${item.caption}" />`;
    document.getElementById("lbCaption").textContent = item.caption;
    document.getElementById("lbDownload").onclick = () => downloadFile(item.url, item.caption || "image");
  }
}

function lbPrevHandler() {
  if (lbMode === "static") {
    lbIndex = (lbIndex - 1 + staticPhotos.length) % staticPhotos.length;
  } else {
    fbLbIndexStatic = (fbLbIndexStatic - 1 + fbImageItems.length) % fbImageItems.length;
  }
  renderLightbox();
}

function lbNextHandler() {
  if (lbMode === "static") {
    lbIndex = (lbIndex + 1) % staticPhotos.length;
  } else {
    fbLbIndexStatic = (fbLbIndexStatic + 1) % fbImageItems.length;
  }
  renderLightbox();
}

function startAutoSlide() {
  if (lbAutoInterval) return;
  const btn = document.getElementById("lbAutoBtn");
  btn.textContent = "⏸ Stop Slide";
  btn.classList.add("active");
  lbAutoInterval = setInterval(() => lbNextHandler(), 3000);
}

function stopAutoSlide() {
  if (lbAutoInterval) { clearInterval(lbAutoInterval); lbAutoInterval = null; }
  const btn = document.getElementById("lbAutoBtn");
  if (btn) { btn.textContent = "▶ Auto Slide"; btn.classList.remove("active"); }
}

(function initLightbox() {
  document.getElementById("lbClose").addEventListener("click", () => {
    document.getElementById("lightbox").classList.remove("active");
    stopAutoSlide();
  });
  document.getElementById("lbBackdrop").addEventListener("click", () => {
    document.getElementById("lightbox").classList.remove("active");
    stopAutoSlide();
  });
  document.getElementById("lbPrev").addEventListener("click", () => { stopAutoSlide(); lbPrevHandler(); });
  document.getElementById("lbNext").addEventListener("click", () => { stopAutoSlide(); lbNextHandler(); });
  document.getElementById("lbAutoBtn").addEventListener("click", () => {
    lbAutoInterval ? stopAutoSlide() : startAutoSlide();
  });
})();

// ── Video modal ────────────────────────────────────────────────────────────────
function openVideoModal(url, caption) {
  const modal = document.getElementById("videoModal");
  document.getElementById("videoModalContent").innerHTML = `<video src="${url}" controls autoplay></video>`;
  document.getElementById("videoModalCaption").textContent = caption || "";
  modal.classList.add("active");
}

(function initVideoModal() {
  document.getElementById("videoModalClose").addEventListener("click",    () => closeVideoModal());
  document.getElementById("videoModalBackdrop").addEventListener("click", () => closeVideoModal());
})();

function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  modal.classList.remove("active");
  document.getElementById("videoModalContent").innerHTML = "";
}

// ── Download helper ────────────────────────────────────────────────────────────
async function downloadFile(url, filename) {
  try {
    const res  = await fetch(url);
    const blob = await res.blob();
    const a    = document.createElement("a");
    a.href     = URL.createObjectURL(blob);
    a.download = filename || "download";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(a.href);
  } catch (err) {
    // Fallback: open in new tab
    window.open(url, "_blank");
  }
}

// ── Upload system ──────────────────────────────────────────────────────────────
(function initUpload() {
  const dropZone    = document.getElementById("dropZone");
  const fileInput   = document.getElementById("fileInput");
  const browseBtn   = document.getElementById("browseBtn");
  const preview     = document.getElementById("uploadPreview");
  const fields      = document.getElementById("uploadFields");
  const uploadBtn   = document.getElementById("uploadBtn");
  const cancelBtn   = document.getElementById("cancelUploadBtn");
  const progressWrap= document.getElementById("uploadProgressWrap");
  const progressBar = document.getElementById("uploadProgressBar");
  const progressTxt = document.getElementById("uploadProgressText");
  const statusEl    = document.getElementById("uploadStatus");

  let selectedFiles = [];

  function setStatus(msg, type) {
    statusEl.textContent = msg;
    statusEl.className   = "upload-status " + (type || "");
  }

  function validateFile(file) {
    if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) return false;
    if (file.size > 50 * 1024 * 1024) return false;
    return true;
  }

  function showPreviews(files) {
    selectedFiles = files;
    preview.style.display = "flex";
    preview.style.flexWrap = "wrap";
    preview.style.gap = "8px";
    fields.style.display  = "flex";
    preview.innerHTML = "";

    files.forEach(file => {
      const wrap = document.createElement("div");
      wrap.style.cssText = "position:relative;border-radius:8px;overflow:hidden;width:100px;height:100px;flex-shrink:0;background:var(--surface2)";
      if (file.type.startsWith("image/")) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        img.style.cssText = "width:100%;height:100%;object-fit:cover";
        wrap.appendChild(img);
      } else {
        const vid = document.createElement("video");
        vid.src = URL.createObjectURL(file);
        vid.style.cssText = "width:100%;height:100%;object-fit:cover";
        wrap.appendChild(vid);
        const badge = document.createElement("div");
        badge.textContent = "▶";
        badge.style.cssText = "position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;background:rgba(0,0,0,.3)";
        wrap.appendChild(badge);
      }
      preview.appendChild(wrap);
    });

    // Show count badge
    const badge = document.createElement("div");
    badge.style.cssText = "width:100%;text-align:center;font-size:13px;color:var(--muted);margin-top:4px";
    badge.textContent = `${files.length} file${files.length > 1 ? "s" : ""} selected`;
    preview.appendChild(badge);

    dropZone.style.display = "none";
    setStatus("");
  }

  function resetUpload() {
    selectedFiles = [];
    preview.style.display = "none";
    fields.style.display  = "none";
    progressWrap.style.display = "none";
    dropZone.style.display = "block";
    fileInput.value = "";
    document.getElementById("uploaderName").value  = "";
    document.getElementById("uploadCaption").value = "";
    progressBar.style.width = "0%";
    setStatus("");
  }

  function processFiles(fileList) {
    const valid = Array.from(fileList).filter(f => validateFile(f));
    const invalid = fileList.length - valid.length;
    if (valid.length === 0) { setStatus("❌ Only images/videos under 50MB allowed.", "error"); return; }
    if (invalid > 0) setStatus(`⚠️ ${invalid} file(s) skipped (wrong type or too large).`, "error");
    showPreviews(valid);
  }

  browseBtn.addEventListener("click", () => fileInput.click());
  dropZone.addEventListener("click", (e) => { if (e.target !== browseBtn) fileInput.click(); });

  fileInput.addEventListener("change", () => {
    if (fileInput.files.length) processFiles(fileInput.files);
  });

  dropZone.addEventListener("dragover",  (e) => { e.preventDefault(); dropZone.classList.add("drag-over"); });
  dropZone.addEventListener("dragleave", ()  => dropZone.classList.remove("drag-over"));
  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("drag-over");
    if (e.dataTransfer.files.length) processFiles(e.dataTransfer.files);
  });

  cancelBtn.addEventListener("click", resetUpload);

  uploadBtn.addEventListener("click", async () => {
    if (!selectedFiles.length) return;
    const name    = document.getElementById("uploaderName").value.trim()  || "Anonymous";
    const caption = document.getElementById("uploadCaption").value.trim() || "";

    uploadBtn.disabled = true;
    cancelBtn.disabled = true;
    progressWrap.style.display = "block";
    setStatus("");

    let done = 0;
    const total = selectedFiles.length;

    for (const file of selectedFiles) {
      const isVideo   = file.type.startsWith("video/");
      const uploadUrl = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/${isVideo ? "video" : "image"}/upload`;
      const formData  = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_PRESET);

      try {
        await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open("POST", uploadUrl);
          xhr.upload.onprogress = (e) => {
            if (e.lengthComputable) {
              const filePct  = (e.loaded / e.total);
              const totalPct = Math.round(((done + filePct) / total) * 100);
              progressBar.style.width = totalPct + "%";
              progressTxt.textContent = `Uploading ${done + 1} of ${total}... ${totalPct}%`;
            }
          };
          xhr.onload = async () => {
            if (xhr.status === 200) {
              const res = JSON.parse(xhr.responseText);
              await addDoc(collection(db, "gallery"), {
                url: res.secure_url,
                type: isVideo ? "video" : "image",
                name: file.name,
                caption,
                uploaderName: name,
                timestamp: serverTimestamp()
              });
              done++;
              resolve();
            } else { reject(new Error("Upload failed")); }
          };
          xhr.onerror = () => reject(new Error("Network error"));
          xhr.send(formData);
        });
      } catch (err) {
        setStatus(`❌ Failed: ${file.name} — ${err.message}`, "error");
      }
    }

    progressBar.style.width = "100%";
    progressTxt.textContent = `Done! ${done} of ${total} uploaded.`;
    setStatus(`✅ ${done} memory${done > 1 ? "ies" : "y"} uploaded successfully! 🎉`, "success");
    uploadBtn.disabled = false;
    cancelBtn.disabled = false;
    setTimeout(resetUpload, 3000);
  });
})();

// ── Firebase gallery items store (for lightbox navigation) ────────────────────
let fbImageItems = []; // { url, caption }

// ── Firebase gallery real-time listener ───────────────────────────────────────
(function initFirebaseGallery() {
  const grid    = document.getElementById("firebaseGallery");
  const empty   = document.getElementById("galleryEmpty");
  const loading = document.getElementById("galleryLoading");

  const q = query(collection(db, "gallery"), orderBy("timestamp", "desc"));

  onSnapshot(q, (snapshot) => {
    loading.style.display = "none";
    grid.innerHTML = "";
    fbImageItems = [];

    if (snapshot.empty) {
      empty.style.display = "block";
      return;
    }
    empty.style.display = "none";

    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const item = document.createElement("div");
      item.className = "gallery-item";
      item.dataset.type = data.type;

      if (data.type === "image") {
        const imgIndex = fbImageItems.length;
        fbImageItems.push({ url: data.url, caption: data.caption || data.name || "" });

        item.innerHTML = `
          <img src="${data.url}" alt="${data.caption || data.name}" loading="lazy" />
          <div class="gallery-overlay">
            ${data.uploaderName ? `<span class="gallery-uploader">📤 ${data.uploaderName}</span>` : ""}
            <span class="gallery-caption">${data.caption || data.name}</span>
            <div class="gallery-actions">
              <button class="gallery-action-btn" data-action="download">⬇ Download</button>
              <button class="gallery-delete-btn" data-action="delete">🗑 Delete</button>
            </div>
          </div>`;
        item.addEventListener("click", (e) => {
          if (e.target.dataset.action) return;
          openFirebaseImageLightbox(imgIndex);
        });
      } else {
        item.innerHTML = `
          <video src="${data.url}" muted preload="metadata"></video>
          <div class="video-play-badge">▶</div>
          <div class="gallery-overlay">
            ${data.uploaderName ? `<span class="gallery-uploader">📤 ${data.uploaderName}</span>` : ""}
            <span class="gallery-caption">${data.caption || data.name}</span>
            <div class="gallery-actions">
              <button class="gallery-action-btn" data-action="download">⬇ Download</button>
              <button class="gallery-delete-btn" data-action="delete">🗑 Delete</button>
            </div>
          </div>`;
        item.addEventListener("click", (e) => {
          if (e.target.dataset.action) return;
          openVideoModal(data.url, data.caption || data.name);
        });
      }

      item.querySelector("[data-action='download']").addEventListener("click", (e) => {
        e.stopPropagation();
        downloadFile(data.url, data.name || "download");
      });

      item.querySelector("[data-action='delete']").addEventListener("click", async (e) => {
        e.stopPropagation();
        if (!confirm("Delete this memory? This cannot be undone.")) return;
        try {
          await deleteDoc(doc(db, "gallery", docSnap.id));
        } catch (err) {
          alert("Delete failed: " + err.message);
        }
      });

      grid.appendChild(item);
    });

    applyGalleryFilter(currentFilter);
  });
})();

// ── Gallery filter tabs ────────────────────────────────────────────────────────
let currentFilter = "all";

function applyGalleryFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll("#firebaseGallery .gallery-item").forEach(item => {
    item.style.display = (filter === "all" || item.dataset.type === filter) ? "" : "none";
  });
  document.querySelectorAll("#staticGallery .gallery-item").forEach(item => {
    item.style.display = (filter === "all" || filter === "image") ? "" : "none";
  });
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    applyGalleryFilter(btn.dataset.filter);
  });
});

// ── Firebase image lightbox (with prev/next navigation) ───────────────────────
let fbLbIndex = 0;

function openFirebaseImageLightbox(index) {
  lbMode = "firebase";
  fbLbIndexStatic = index;
  renderLightbox();
  stopAutoSlide();
  document.getElementById("lightbox").classList.add("active");
}

// expose globals
window.openLightbox = openLightbox;
window.downloadFile = downloadFile;

// ── Graduation popup + confetti ────────────────────────────────────────────────
(function initGraduation() {
  const btn     = document.getElementById("graduationBtn");
  const modal   = document.getElementById("gradModal");
  const closeBtn= document.getElementById("gradClose");
  const backdrop= document.getElementById("gradBackdrop");

  btn.addEventListener("click", () => {
    modal.classList.add("active");
    startConfetti();
  });
  closeBtn.addEventListener("click",  () => { modal.classList.remove("active"); stopConfetti(); });
  backdrop.addEventListener("click",  () => { modal.classList.remove("active"); stopConfetti(); });
})();

// ── Confetti ───────────────────────────────────────────────────────────────────
let confettiRAF = null;
const confettiCanvas = document.getElementById("confettiCanvas");
const ctx = confettiCanvas.getContext("2d");
let particles = [];

function resizeConfetti() {
  confettiCanvas.width  = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeConfetti);
resizeConfetti();

function randomColor() {
  const colors = ["#8b5cf6","#3b82f6","#ec4899","#f59e0b","#10b981","#f97316","#06b6d4"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function startConfetti() {
  particles = [];
  for (let i = 0; i < 160; i++) {
    particles.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      w: Math.random() * 10 + 5,
      h: Math.random() * 6 + 3,
      color: randomColor(),
      vx: (Math.random() - 0.5) * 3,
      vy: Math.random() * 3 + 2,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.2
    });
  }
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  particles.forEach(p => {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    ctx.restore();
    p.x     += p.vx;
    p.y     += p.vy;
    p.angle += p.spin;
    if (p.y > confettiCanvas.height) {
      p.y  = -10;
      p.x  = Math.random() * confettiCanvas.width;
    }
  });
  confettiRAF = requestAnimationFrame(animateConfetti);
}

function stopConfetti() {
  if (confettiRAF) { cancelAnimationFrame(confettiRAF); confettiRAF = null; }
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
}

// ── Keyboard navigation ────────────────────────────────────────────────────────
document.addEventListener("keydown", (e) => {
  const lightbox   = document.getElementById("lightbox");
  const memberModal= document.getElementById("memberModal");
  const videoModal = document.getElementById("videoModal");
  const gradModal  = document.getElementById("gradModal");

  if (e.key === "Escape") {
    if (lightbox.classList.contains("active"))    { lightbox.classList.remove("active"); stopAutoSlide(); }
    if (memberModal.classList.contains("active")) { memberModal.classList.remove("active"); }
    if (videoModal.classList.contains("active"))  { closeVideoModal(); }
    if (gradModal.classList.contains("active"))   { gradModal.classList.remove("active"); stopConfetti(); }
  }
  if (lightbox.classList.contains("active")) {
    if (e.key === "ArrowLeft")  lbPrevHandler();
    if (e.key === "ArrowRight") lbNextHandler();
  }
});

// ── Expose globals ─────────────────────────────────────────────────────────────
window.openLightbox  = openLightbox;
window.downloadFile  = downloadFile;
