const container = document.querySelector(".cars-container");
const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");
const modal = document.getElementById("carModal");
const closeBtn = document.querySelector(".close-btn");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

async function getCars() {
  try {
    const response = await fetch("data/cars.json");
    const data = await response.json();
    displayCars(data);
  } catch (error) {
    console.error("Error loading cars:", error);
  }
}

function displayCars(cars) {
  if (!container) return;

  cars.forEach((car) => {
    const card = document.createElement("article");
    card.classList.add("car-card");
    card.innerHTML = `
      <img src="${car.image}" alt="${car.name}" loading="lazy">
      <h3>${car.name}</h3>
      <p>${car.brand}</p>
    `;

    card.addEventListener("click", () => openModal(car));
    container.appendChild(card);
  });
}

function openModal(car) {
  if (!modal) return;

  modal.classList.add("show");
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");

  const modalImage = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalBrand = document.getElementById("modal-brand");
  const modalYear = document.getElementById("modal-year");
  const modalHp = document.getElementById("modal-hp");

  if (modalImage) modalImage.src = car.image;
  if (modalTitle) modalTitle.textContent = car.name;
  if (modalBrand) modalBrand.textContent = `Brand: ${car.brand}`;
  if (modalYear) modalYear.textContent = `Year: ${car.year}`;
  if (modalHp) modalHp.textContent = `HP: ${car.hp}`;
}

function closeModal() {
  if (!modal) return;

  modal.classList.remove("show");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });

  const navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  }
});

getCars();
