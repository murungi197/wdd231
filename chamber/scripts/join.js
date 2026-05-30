/* MENU */
document.getElementById("menu").onclick = () => {
  document.getElementById("nav-links").classList.toggle("open");
};

document.querySelectorAll(".open-btn").forEach(btn => {
  btn.addEventListener("click", openModal);
});

// timestamp
const timestampElement = document.getElementById("timestamp");
if (timestampElement) {
  timestampElement.value = new Date().toISOString();
}

// last modified footer
const lastModified = document.getElementById("lastModified");
if (lastModified) {
  lastModified.textContent = document.lastModified;
}

// modal
function openModal(event) {
  const type = event.currentTarget?.dataset?.type || "";
  const modal = document.getElementById("modal");
  const text = document.getElementById("modal-text");

  const data = {
    np: "Free for non-profits.",
    bronze: "Basic advertising benefits.",
    silver: "More exposure and discounts.",
    gold: "Premium benefits and spotlight ads."
  };

  text.textContent = data[type] || "Membership benefit details are not available.";
  if (modal) {
    modal.style.display = "block";
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) {
    modal.style.display = "none";
  }
}

const closeModalButton = document.getElementById("close-modal");
if (closeModalButton) {
  closeModalButton.addEventListener("click", closeModal);
}



