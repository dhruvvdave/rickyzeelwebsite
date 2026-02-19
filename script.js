const EVENTS = {
  mehndi: { name: "Schedule of Mehndi", date: "August 15 • Evening", venue: "42 Lisson Crescent", notes: "Detailed timing coming shortly." },
  pithi: { name: "Schedule of Pithi & Grah Shanti", date: "August 16 • Daytime", venue: "Venue details to be finalized", notes: "Detailed timing coming shortly." },
  sangeet: { name: "Schedule of Sangeet", date: "August 16 • 6:30 PM", venue: "Chandni Gateway", notes: "Detailed timing coming shortly." },
  wedding: { name: "Schedule of Wedding", date: "August 17 • 3:30 PM onwards", venue: "Terrace on the Green", notes: "Detailed timing coming shortly." },
};

const GUESTS = {
  "patelfamily@example.com": { family: "Patel Family", events: ["mehndi", "pithi", "sangeet", "wedding"], guests: ["Ravi Patel", "Neha Patel"] },
  "shahfamily@example.com": { family: "Shah Family", events: ["sangeet", "wedding"], guests: ["Aman Shah", "Isha Shah"] },
  "4165550123": { family: "Joshi Family", events: ["wedding"], guests: ["Vikram Joshi"] },
};

const RSVP_KEY = "rz_rsvp";
const ACCESS_KEY = "rz_guest";

const normalizeIdentifier = (value) => {
  const cleaned = value.trim().toLowerCase();
  if (/^[\d\s()+-]+$/.test(cleaned)) return cleaned.replace(/\D/g, "");
  return cleaned;
};

const getGuest = () => {
  const raw = localStorage.getItem(ACCESS_KEY);
  return raw ? JSON.parse(raw) : null;
};

function saveGuest(profile) {
  localStorage.setItem(ACCESS_KEY, JSON.stringify(profile));
}

function setGreeting() {
  const guest = getGuest();
  const el = document.querySelector("[data-family-greeting]");
  if (el && guest?.family) el.textContent = `Celebrating with the ${guest.family}`;
  const logout = document.getElementById("logout-btn");
  if (logout) {
    logout.classList.toggle("hidden", !guest);
    logout.onclick = () => {
      localStorage.removeItem(ACCESS_KEY);
      window.location.href = "index.html";
    };
  }
}

function ensureGate() {
  if (getGuest()) return;
  const overlay = document.createElement("div");
  overlay.className = "gate";
  overlay.innerHTML = `<div class="gate-card"><h2>Welcome to Ricky & Zeel's Wedding</h2><p>Enter your email or phone from your invitation to view your personalized website details.</p><input id="gate-input" placeholder="Email or phone number" /><button id="gate-btn">Continue</button><p id="gate-error" class="error"></p></div>`;
  document.body.appendChild(overlay);

  const input = document.getElementById("gate-input");
  const error = document.getElementById("gate-error");
  const submit = () => {
    const key = normalizeIdentifier(input.value || "");
    const profile = GUESTS[key];
    if (!profile) {
      error.textContent = "We couldn't find that invitation. Please try again.";
      return;
    }
    saveGuest(profile);
    overlay.remove();
    setGreeting();
    renderSchedule();
    renderRsvp();
  };
  document.getElementById("gate-btn").addEventListener("click", submit);
  input.addEventListener("keydown", (e) => e.key === "Enter" && submit());
}

function renderSchedule() {
  const selector = document.getElementById("event-selector");
  const detail = document.getElementById("event-detail");
  if (!selector || !detail) return;
  const guest = getGuest();
  if (!guest?.events?.length) {
    detail.innerHTML = "<p>Please log in from the home page.</p>";
    return;
  }

  const showDetail = (key) => {
    const ev = EVENTS[key];
    detail.innerHTML = `<h3>${ev.name}</h3><p><strong>${ev.date}</strong></p><p>${ev.notes}</p><p><strong>Venue:</strong> ${ev.venue}</p>`;
    selector.querySelectorAll(".event-picker").forEach((btn) => btn.classList.toggle("active", btn.dataset.key === key));
  };

  selector.innerHTML = guest.events.map((key) => `<button class="event-picker" data-key="${key}">${EVENTS[key].name}<br><small>${EVENTS[key].date}</small></button>`).join("");
  selector.querySelectorAll(".event-picker").forEach((btn) => btn.addEventListener("click", () => showDetail(btn.dataset.key)));
  showDetail(guest.events[0]);
}

function renderRsvp() {
  const container = document.getElementById("rsvp-container");
  if (!container) return;
  const guest = getGuest();
  if (!guest) {
    container.innerHTML = '<article class="card">Please log in from the home page first.</article>';
    return;
  }

  const responses = JSON.parse(localStorage.getItem(RSVP_KEY) || "{}");
  container.innerHTML = guest.events
    .map((eventKey) => {
      const state = responses[eventKey] || "pending";
      const klass = state === "yes" ? "y" : state === "no" ? "n" : "";
      return `<article class="rsvp-row"><div><strong>${EVENTS[eventKey].name}</strong><p>${EVENTS[eventKey].date}</p></div><div><button class="btn" data-rsvp="yes" data-event="${eventKey}">Accept</button> <button class="btn" data-rsvp="no" data-event="${eventKey}">Decline</button> <span class="pill ${klass}">${state === "pending" ? "No response" : state === "yes" ? "Attending" : "Not attending"}</span></div></article>`;
    })
    .join("");

  container.querySelectorAll("button[data-rsvp]").forEach((btn) => {
    btn.addEventListener("click", () => {
      responses[btn.dataset.event] = btn.dataset.rsvp;
      localStorage.setItem(RSVP_KEY, JSON.stringify(responses));
      renderRsvp();
    });
  });
}

function setupFaq() {
  document.querySelectorAll(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => btn.closest(".faq-item")?.classList.toggle("open"));
  });
}

function setupGallery() {
  const track = document.getElementById("gallery-track");
  if (!track) return;
  const slides = [...track.querySelectorAll("img")];
  let i = 0;
  setInterval(() => {
    i = (i + 1) % slides.length;
    slides[i].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, 2800);
}

function setupNav() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) toggle.addEventListener("click", () => nav.classList.toggle("open"));
}

setupNav();
setGreeting();
ensureGate();
renderSchedule();
renderRsvp();
setupFaq();
setupGallery();
