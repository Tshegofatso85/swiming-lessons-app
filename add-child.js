const user = JSON.parse(localStorage.getItem("currentUser"));

if (!user) {
  window.location.href = "login.html";
}

user.children = user.children || [];

let napTimes = [];

const napContainer = document.getElementById("napContainer");
const addNapBtn = document.getElementById("addNap");

addNapBtn.onclick = () => {
  if (napTimes.length >= 3) return;

  napTimes.push("12:00");

  renderNaps();
};

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

document.getElementById("childForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;
  const level = document.getElementById("level").value;
  const medical = document.getElementById("medical").value;
  const safety = document.getElementById("safety").value;

  if (!name || !dob) {
    alert("Please fill required fields");

    return;
  }

  const child = {
    id: Date.now().toString(),

    name,
    dateOfBirth: dob,
    experienceLevel: level,
    medicalNotes: medical,
    safetyNotes: safety,
    napTimes,
    intakeCompleted: false,
  };

  user.children.push(child);

  localStorage.setItem("currentUser", JSON.stringify(user));

  alert(name + " added successfully!");

  window.location.href = "dashboard.html";
});
