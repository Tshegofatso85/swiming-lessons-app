document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const registerBtn = document.querySelectorAll(".registerBtn");

  if (user) {
    registerBtn.forEach((btn) => {
      btn.textContent = "Go see your Dashboard";
      btn.href = "dashboard.html";
    });
  }
});
