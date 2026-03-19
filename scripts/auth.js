// REGISTER
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const existing = users.find((u) => u.email === email);

    if (existing) {
      alert("Account with this email already exists");
      return;
    }

    users.push({ name, email, password });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");

    window.location.href = "dashboard.html";
  });
}

// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));

      alert("Welcome back!");

      window.location.href = "dashboard.html";
    } else {
      alert("Account not found. Please register first.");
    }
  });
}
