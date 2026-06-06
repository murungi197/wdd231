import { places } from "../data/places.mjs";

/* MENU */
document.getElementById("menu").onclick = () => {
  document.getElementById("nav-links").classList.toggle("open");
};

const container = document.querySelector(".cards");

places.forEach(place => {
  const card = document.createElement("div");

  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="${place.image}" alt="${place.name}" loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
  `;

  container.appendChild(card);
});


// 🔁 LAST VISIT LOGIC
const message = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  message.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const diff = now - lastVisit;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days < 1) {
    message.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    message.textContent = "You last visited 1 day ago.";
  } else {
    message.textContent = `You last visited ${days} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);

// last modified footer
const lastModified = document.getElementById("lastModified");
if (lastModified) {
  lastModified.textContent = document.lastModified;
}