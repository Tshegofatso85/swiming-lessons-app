function setupNavbar() {
  const toggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const navActions = document.getElementById("navActions");

  const user = JSON.parse(localStorage.getItem("currentUser"));

  console.log(user);
  console.log(navActions);

  if (toggle) {
    toggle.onclick = () => {
      navLinks.classList.toggle("show");
    };
  }

  if (user && navActions) {
    navActions.innerHTML = `
      
      <a href="dashboard.html" class="btn outline">
        ${user.name.split(" ")[0]}
      </a>
  
      <button id="logoutBtn" class="btn primary">
        Logout
      </button>
      
      `;

    document.getElementById("logoutBtn").onclick = () => {
      localStorage.removeItem("currentUser");
      window.location.href = "login.html";
    };
  }
}
