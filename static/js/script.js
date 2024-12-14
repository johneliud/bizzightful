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



  document.querySelectorAll(".feature-card").forEach((card) => {
    observer.observe(card);
  });
});
