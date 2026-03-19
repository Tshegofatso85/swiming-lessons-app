function saveUser(updatedUser) {
  // Update currentUser
  localStorage.setItem("currentUser", JSON.stringify(updatedUser));

  // Update users array
  let users = JSON.parse(localStorage.getItem("users")) || [];

  users = users.map((u) => (u.email === updatedUser.email ? updatedUser : u));

  localStorage.setItem("users", JSON.stringify(users));
}
