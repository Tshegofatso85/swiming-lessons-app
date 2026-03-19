const params = new URLSearchParams(window.location.search);

const childId = params.get("id");

const user = JSON.parse(localStorage.getItem("currentUser"));

if (!childId) {
  alert("No child selected for intake");
  window.location.href = "dashboard.html";
}

if (!user) {
  window.location.href = "login.html";
}

const child = user.children.find((c) => c.id === childId);

document.getElementById("childInfo").innerText = "For " + child.name;

let napTimes = child.napTimes || [];

const napContainer = document.getElementById("napContainer");

function renderNaps() {
  napContainer.innerHTML = "";

  napTimes.forEach((nap, i) => {
    napContainer.innerHTML += `

<div class="nap-row">

<input type="time"
value="${nap}"
onchange="updateNap(${i},this.value)">

<button onclick="removeNap(${i})" class="btn small">
X
</button>

</div>

`;
  });
}

function updateNap(index, val) {
  napTimes[index] = val;
}

function removeNap(index) {
  napTimes.splice(index, 1);

  renderNaps();
}

document.getElementById("addNap").onclick = () => {
  if (napTimes.length >= 3) return;

  napTimes.push("12:00");

  renderNaps();
};

renderNaps();

document.getElementById("intakeForm").addEventListener("submit", (e) => {
  e.preventDefault();

  child.experienceLevel = document.getElementById("level").value;

  child.medicalNotes = document.getElementById("medical").value;

  child.safetyNotes = document.getElementById("safety").value;

  child.napTimes = napTimes;

  child.intakeCompleted = true;

  localStorage.setItem("currentUser", JSON.stringify(user));

  saveUser(user);

  alert("Intake completed!");

  window.location.href = "dashboard.html";
});
