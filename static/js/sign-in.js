document.getElementById("signInForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const messageDiv = document.getElementById("signInMessage");
    messageDiv.classList.add("hidden");
  
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;
  
    try {
      const response = await fetch("/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Success: Display success message and redirect
        messageDiv.textContent = "Signed in successfully!";
        messageDiv.className =
          "p-4 mb-4 rounded-lg text-green-800 bg-green-100 text-center";
        messageDiv.classList.remove("hidden");
  
        // Redirect to dashboard
        setTimeout(() => (window.location.href = "/dashboard"), 2000);
      } else {
        // Error: Display API error message
        messageDiv.textContent =
          data.message || "Invalid credentials. Please try again.";
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
  