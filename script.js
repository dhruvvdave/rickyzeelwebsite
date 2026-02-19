const ACCESS_KEY = "rz_guest_profile";
const RSVP_KEY = "rz_rsvp_answers";

const guestDirectory = {
  "patelfamily@example.com": {
    familyName: "Patel Family",
    events: ["mehndi", "pithi", "sangeet", "wedding"],
  },
  "shahfamily@example.com": {
    familyName: "Shah Family",
    events: ["sangeet", "wedding"],
  },
  "4165550123": {
    familyName: "Joshi Family",
    events: ["wedding"],
  },
};

const eventDetails = {
  mehndi: {
    title: "Schedule of Mehndi",
    date: "August 15 • Evening",
    venue: "42 Lisson Crescent",
    note: "Detailed schedule to be shared shortly.",
  },
  pithi: {
    title: "Schedule of Pithi & Grah Shanti",
    date: "August 16 • Daytime",
    venue: "Details coming soon",
    note: "Detailed schedule to be shared shortly.",
  },
  sangeet: {
    title: "Schedule of Sangeet",
    date: "August 16 • 6:30 PM onwards",
    venue: "Chandni Gateway",
    note: "Detailed schedule to be shared shortly.",
  },
  wedding: {
    title: "Schedule of Wedding",
    date: "August 17 • 3:30 PM onwards",
    venue: "Terrace on the Green",
    note: "Detailed schedule to be shared shortly.",
  },
};

const normalizeIdentifier = (raw) => {
  const value = raw.trim().toLowerCase();
  if (/^[\d\s()+-]+$/.test(value)) return value.replace(/\D/g, "");
  return value;
};

const getGuestProfile = () => {
  const stored = localStorage.getItem(ACCESS_KEY);
  return stored ? JSON.parse(stored) : null;
};

const setGuestProfile = (profile) => {
  localStorage.setItem(ACCESS_KEY, JSON.stringify(profile));
};

function setupMenu() {
  const menuButton = document.getElementById("mobile-menu");
  const nav = document.getElementById("site-nav");
  if (!menuButton || !nav) return;
  menuButton.addEventListener("click", () => nav.classList.toggle("open"));
}

function setupLogout() {
  const btn = document.getElementById("logout-btn");
  if (!btn) return;
  const hasProfile = Boolean(getGuestProfile());
  btn.classList.toggle("hidden", !hasProfile);
  btn.addEventListener("click", () => {
    localStorage.removeItem(ACCESS_KEY);
    window.location.href = "index.html";
  });
}

function updateHeaderGreeting() {
  const greeting = document.querySelector("[data-family-greeting]");
  const profile = getGuestProfile();
  if (!greeting || !profile) return;
  greeting.textContent = `Celebrating with the ${profile.familyName}`;
}

function setupLoginOverlay() {
  const overlay = document.getElementById("login-overlay");
  if (!overlay) return;

  if (getGuestProfile()) {
    overlay.classList.add("hidden");
    return;
  }

  overlay.classList.remove("hidden");

  const input = document.getElementById("invite-input");
  const button = document.getElementById("invite-submit");
  const error = document.getElementById("invite-error");

  const attemptLogin = () => {
    const normalized = normalizeIdentifier(input.value || "");
    const profile = guestDirectory[normalized];

    if (!profile) {
      error.textContent = "We couldn't find that invitation. Please try again.";
      return;
    }

    setGuestProfile(profile);
    overlay.classList.add("hidden");
    updateHeaderGreeting();
    setupLogout();
    renderTimeline();
    renderRsvp();
  };

  button?.addEventListener("click", attemptLogin);
  input?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") attemptLogin();
  });
}

function renderTimeline() {
  const timeline = document.getElementById("timeline-list");
  if (!timeline) return;

  const profile = getGuestProfile();
  if (!profile?.events?.length) {
    timeline.innerHTML = `<article class="timeline-item"><h3>Please start from Home</h3><p class="timeline-meta">Log in on the Home page to view your invitation schedule.</p></article>`;
    return;
  }

  timeline.innerHTML = profile.events
    .map((key) => {
      const event = eventDetails[key];
      if (!event) return "";
      return `<article class="timeline-item"><h3>${event.title}</h3><p class="timeline-meta">${event.date}</p><p>${event.note}</p><p><strong>Venue:</strong> ${event.venue}</p></article>`;
    })
    .join("");
}

function renderRsvp() {
  const container = document.getElementById("rsvp-list");
  if (!container) return;

  const profile = getGuestProfile();
  if (!profile?.events?.length) {
    container.innerHTML = `<article class="soft-card">Please log in from the Home page first.</article>`;
    return;
  }

  const answers = JSON.parse(localStorage.getItem(RSVP_KEY) || "{}");

  container.innerHTML = profile.events
    .map((key) => {
      const event = eventDetails[key];
      const answer = answers[key] || "pending";
      const label =
        answer === "yes" ? "Attending" : answer === "no" ? "Not attending" : "No response";

      return `<article class="rsvp-card"><div><h3>${event.title}</h3><p class="timeline-meta">${event.date}</p></div><div class="rsvp-actions"><button class="action-btn" data-event="${key}" data-answer="yes">Accept</button><button class="action-btn" data-event="${key}" data-answer="no">Decline</button><span class="status-pill">${label}</span></div></article>`;
    })
    .join("");

  container.querySelectorAll(".action-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      answers[btn.dataset.event] = btn.dataset.answer;
      localStorage.setItem(RSVP_KEY, JSON.stringify(answers));
      renderRsvp();
    });
  });
}

function setupFaqAccordion() {
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".faq-item")?.classList.toggle("open");
    });
  });
}

function setupGalleryAutoscroll() {
  const track = document.getElementById("gallery-track");
  if (!track) return;

  const slides = Array.from(track.querySelectorAll("img"));
  let index = 0;
  setInterval(() => {
    index = (index + 1) % slides.length;
    slides[index].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, 3200);
}

setupMenu();
setupLogout();
updateHeaderGreeting();
setupLoginOverlay();
renderTimeline();
renderRsvp();
setupFaqAccordion();
setupGalleryAutoscroll();
