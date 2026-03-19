let user = JSON.parse(localStorage.getItem("currentUser"));

if (!user) {
  window.location.href = "login.html";
}

user.children = user.children || [];

// 🔵 CHECK IF EDITING
const editChildId = localStorage.getItem("editChildId");
let editingChild = null;

if (editChildId) {
  editingChild = user.children.find((c) => c.id === editChildId);
  const childTitle = document.getElementById("childTitle");
  childTitle.innerText = "Edit Child";

  if (editingChild) {
    document.getElementById("name").value = editingChild.name;
    document.getElementById("dob").value = editingChild.dateOfBirth;
  }
}

// 🟢 FORM SUBMIT
document.getElementById("childForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;

  if (!name || !dob) {
    alert("Please fill required fields");
    return;
  }

  if (editingChild) {
    // ✏️ UPDATE EXISTING CHILD
    editingChild.name = name;
    editingChild.dateOfBirth = dob;
    editingChild.intakeCompleted = false;
  } else {
    // ➕ CREATE NEW CHILD
    const child = {
      id: Date.now().toString(),
      name,
      dateOfBirth: dob,
      intakeCompleted: false,
    };

    user.children.push(child);
  }

  // 💾 SAVE PROPERLY
  saveUser(user);

  // 🧹 CLEAR EDIT MODE
  localStorage.removeItem("editChildId");

  alert(name + (editingChild ? " updated!" : " added successfully!"));

  window.location.href = "dashboard.html";
});
