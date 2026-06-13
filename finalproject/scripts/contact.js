const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // SAVE TO LOCAL STORAGE
  localStorage.setItem("username", name);
  localStorage.setItem("userEmail", email);

  // SHOW SUCCESS MESSAGE
  successMessage.style.display = "block";

  // RESET FORM
  form.reset();

  // HIDE MESSAGE AFTER 3s
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 3000);
});