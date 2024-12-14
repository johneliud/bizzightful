document.addEventListener("DOMContentLoaded", function () {
  // Modal Control Functions
  function openModal(modalId) {
    document.getElementById(modalId).classList.remove("hidden");
  }

  function closeModal(modalId) {
    document.getElementById(modalId).classList.add("hidden");
  }

  // Button Click Handlers
  document
    .getElementById("signInBtn")
    .addEventListener("click", () => openModal("signInModal"));
  document
    .getElementById("signUpBtn")
    .addEventListener("click", () => openModal("signUpModal"));
  document
    .getElementById("helpBtn")
    .addEventListener("click", () => openModal("helpModal"));
  document
    .getElementById("exploreBtn")
    .addEventListener("click", () => openModal("signUpModal"));

  // Close Modal Buttons
  document.querySelectorAll(".close-modal").forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest('[id$="Modal"]');
      if (modal) closeModal(modal.id);
    });
  });
// Click Outside to Close
document.querySelectorAll('[id$="Modal"]').forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal(modal.id);
    });
  });
 // Handle Sign In
 document
 .getElementById("signInForm")
 .addEventListener("submit", function (e) {
   e.preventDefault();
   const submitButton = this.querySelector('button[type="submit"]');
   submitButton.disabled = true;
   submitButton.innerHTML =
     '<i class="fas fa-spinner fa-spin mr-2"></i>Signing in...';

   // Simulate API call
   setTimeout(() => {
     sessionStorage.setItem("isLoggedIn", "true");
     window.location.href = "/dashboard";
   }, 1500);
 });
// Handle Sign Up
document
.getElementById("signUpForm")
.addEventListener("submit", function (e) {
  e.preventDefault();
  sessionStorage.setItem("isLoggedIn", "true");
  window.location.href = "/dashboard";
});
// Password visibility toggle
document.querySelectorAll(".toggle-password").forEach((button) => {
    button.addEventListener("click", function () {
      const input = this.parentElement.querySelector("input");
      const icon = this.querySelector("i");

      if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
      } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
      }
    });
  });


  document.querySelectorAll(".feature-card").forEach((card) => {
    observer.observe(card);
  });
});
