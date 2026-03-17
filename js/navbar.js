// function setupNavbar() {
//   const toggle = document.getElementById("menuToggle");
//   const navLinks = document.getElementById("navLinks");
//   const navActions = document.getElementById("navActions");

//   const user = JSON.parse(localStorage.getItem("currentUser"));

//   if (toggle) {
//     toggle.onclick = () => {
//       console.log(navActions.classList);
//       console.log(navLinks.classList);
//       navActions.classList.toggle("show");
//       navLinks.classList.toggle("show");
//     };
//   }

//   if (user && navActions) {
//     navActions.innerHTML = `

//       <a href="dashboard.html" class="btn outline">
//         ${user.name.split(" ")[0]}
//       </a>

//       <button id="logoutBtn" class="btn primary">
//         Logout
//       </button>

//       `;

//     document.getElementById("logoutBtn").onclick = () => {
//       localStorage.removeItem("currentUser");
//       window.location.href = "login.html";
//     };
//   }
// }
function setupNavbar() {
  const toggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const navActions = document.getElementById("navActions");

  const user = JSON.parse(localStorage.getItem("currentUser"));

  // TOGGLE MENU
  if (toggle) {
    toggle.onclick = () => {
      navLinks.classList.toggle("show");
      navActions.classList.toggle("show");
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
          window.location.href = "login.html";
        };
      }
    }, 0);
  }
}
