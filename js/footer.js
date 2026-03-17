function setupFooter() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const registerLink = document.getElementById("registerLink");
  const loginLink = document.getElementById("loginLink");
  const logoutLink = document.createElement("a");

  if (user) {
    registerLink.style.display = "none";
    loginLink.style.display = "none";
    logoutLink.innerText = "Logout";

    logoutLink.onclick = () => {
      localStorage.removeItem("currentUser");
      window.location.href = "index.html";
    };

    document.getElementById("parentLinks").appendChild(logoutLink);
  }
}
