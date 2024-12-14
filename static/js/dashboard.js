document.addEventListener("DOMContentLoaded", function () {
  // Initialize charts with more meaningful data
  const trendChart = new Chart(document.getElementById("trendChart"), {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Market Growth (%)",
          data: [12, 19, 15, 25, 22, 30],
          borderColor: "#2563eb",
          tension: 0.4,
          fill: true,
          backgroundColor: "rgba(37, 99, 235, 0.1)",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              return `Growth: ${context.parsed.y}%`;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Growth Percentage",
          },
        },
      },
    },
  });

  const priceChart = new Chart(document.getElementById("priceChart"), {
    type: "bar",
    data: {
      labels: ["Product A", "Product B", "Product C", "Product D"],
      datasets: [
        {
          label: "Price Comparison ($)",
          data: [1200, 1900, 800, 1500],
          backgroundColor: "#93c5fd",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              return `Price: $${context.parsed.y}`;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Price (USD)",
          },
        },
      },
    },
  });

  // Help Modal Functionality
  const helpBtn = document.getElementById("helpBtn");
  const helpModal = document.getElementById("helpModal");
  const closeHelpBtn = document.getElementById("closeHelpBtn");

  helpBtn.addEventListener("click", () => {
    helpModal.classList.remove("hidden");
  });

  closeHelpBtn.addEventListener("click", () => {
    helpModal.classList.add("hidden");
  });

  // Close modal when clicking outside
  helpModal.addEventListener("click", (e) => {
    if (e.target === helpModal) {
      helpModal.classList.add("hidden");
    }
  });

  // Interactive features for logistics tools
  document.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", () => {
      console.log("Selection changed:", select.value);
      // Here you would typically trigger a recalculation of logistics options
    });
  });

  // Add tutorial highlights for new users
  setTimeout(() => {
    document.querySelector(".card").classList.add("tutorial-highlight");
  }, 1000);
});
