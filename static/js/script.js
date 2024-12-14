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



  document.querySelectorAll(".feature-card").forEach((card) => {
    observer.observe(card);
  });
});
