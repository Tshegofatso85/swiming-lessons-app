let selectedPlan = null;

const user = JSON.parse(localStorage.getItem("currentUser"));

function selectPlan(id, price, credits) {
  selectedPlan = { id, price, credits };

  document.getElementById("checkout").style.display = "block";

  document.getElementById(
    "checkoutText"
  ).innerText = `Plan price: R${price} • ${credits} credits`;
}

function purchase() {
  if (!user) {
    alert("Please register first");

    window.location.href = "register.html";

    return;
  }

  setTimeout(() => {
    user.credits = (user.credits || 0) + selectedPlan.credits;

    localStorage.setItem("currentUser", JSON.stringify(user));

    alert(selectedPlan.credits + " credits added!");

    window.location.href = "booking.html";
  }, 1000);
}
