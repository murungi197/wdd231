/* MENU */
document.getElementById("menu").onclick = () => {
  document.getElementById("nav-links").classList.toggle("open");
};

// timestamp
document.getElementById("timestamp").value = new Date().toISOString();

// modal
function openModal(type) {
  const modal = document.getElementById("modal");
  const text = document.getElementById("modal-text");

  const data = {
    np: "Free for non-profits.",
    bronze: "Basic advertising benefits.",
    silver: "More exposure and discounts.",
    gold: "Premium benefits and spotlight ads."
  };

  text.textContent = data[type];
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}



