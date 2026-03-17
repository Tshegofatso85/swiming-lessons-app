function setupNavbar() {
  const toggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  const user = JSON.parse(localStorage.getItem("currentUser"));

  // TOGGLE MENU
  if (toggle) {
    toggle.onclick = () => {
      mobileMenu.classList.toggle("show");
      document.body.classList.toggle("menu-open");

      toggle.textContent = mobileMenu.classList.contains("show") ? "✖" : "☰";
    };
  }

  // HANDLE LOGIN STATE
  if (user && navActions) {
    navActions.innerHTML = `
      <a href="dashboard.html" class="btn outline">
        ${user.name.split(" ")[0]}
      </a>

      <button id="logoutBtn" class="btn primary">
        Logout
      </button>
    `;

    setTimeout(() => {
      const logoutBtn = document.getElementById("logoutBtn");
      if (logoutBtn) {
        logoutBtn.onclick = () => {
          localStorage.removeItem("currentUser");
          window.location.href = "index.html";
        };
      }
    }, 0);
  }
}
