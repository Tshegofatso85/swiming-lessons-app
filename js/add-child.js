const user = JSON.parse(localStorage.getItem("currentUser"));

if (!user) {
  window.location.href = "login.html";
}

user.children = user.children || [];

document.getElementById("childForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;

  if (!name || !dob) {
    alert("Please fill required fields");

    return;
  }

  const child = {
    id: Date.now().toString(),

    name,
    dateOfBirth: dob,
    intakeCompleted: false,
  };

  user.children.push(child);

  localStorage.setItem("currentUser", JSON.stringify(user));

  alert(name + " added successfully!");

  window.location.href = "dashboard.html";
});
