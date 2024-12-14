document.getElementById("signUpForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const messageDiv = document.getElementById("signUpMessage");
    messageDiv.classList.add("hidden");
  
    const fullNameInput = e.target.querySelector('input[type="text"]');
    const emailInput = e.target.querySelector('input[type="email"]');
    const passwordInput = e.target.querySelector('input[type="password"]');
  
    const username = fullNameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
  
    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Success: Display success message and redirect
        messageDiv.textContent = "Account created successfully!";
        messageDiv.className =
          "p-4 mb-4 rounded-lg text-green-800 bg-green-100 text-center";
        messageDiv.classList.remove("hidden");
  
        // Redirect to signin page after a delay
        setTimeout(() => (window.location.href = "/signin"), 2000);
      } else {
        // Error: Display API error message
        messageDiv.textContent =
          data.message || "Failed to create account. Please try again.";
        messageDiv.className =
          "p-4 mb-4 rounded-lg text-red-800 bg-red-100 text-center";
        messageDiv.classList.remove("hidden");
      }
    } catch (error) {
      // Network error
      messageDiv.textContent = "An error occurred. Please try again.";
      messageDiv.className =
        "p-4 mb-4 rounded-lg text-red-800 bg-red-100 text-center";
      messageDiv.classList.remove("hidden");
    }
  });
  