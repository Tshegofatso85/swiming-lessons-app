const user = JSON.parse(localStorage.getItem("currentUser"));

if (!user) {
  window.location.href = "login.html";
}

user.bookings = user.bookings || [];

const timeSlots = [
  { time: "9:00 AM", spots: 2 },
  { time: "9:30 AM", spots: 4 },
  { time: "10:00 AM", spots: 1 },
  { time: "10:30 AM", spots: 3 },
  { time: "11:00 AM", spots: 0 },
  { time: "2:00 PM", spots: 4 },
  { time: "2:30 PM", spots: 2 },
  { time: "3:00 PM", spots: 3 },
  { time: "3:30 PM", spots: 1 },
  { time: "4:00 PM", spots: 4 },
];

const childSelect = document.getElementById("childSelect");

const eligibleChildren = (user.children || []).filter((c) => c.intakeCompleted);

if (eligibleChildren.length === 0) {
  document.body.innerHTML = "<h2>Please complete intake form first.</h2>";
}

eligibleChildren.forEach((child) => {
  const option = document.createElement("option");

  option.value = child.id;
  option.textContent = child.name;

  childSelect.appendChild(option);
});

let selectedDate = "";
let selectedTime = "";

function getNextDays() {
  const days = [];

  const today = new Date();

  for (let i = 1; i <= 7; i++) {
    const d = new Date(today);

    d.setDate(today.getDate() + i);

    if (d.getDay() !== 0) {
      days.push(
        d.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })
      );
    }
  }

  return days;
}

const datesDiv = document.getElementById("dates");

getNextDays().forEach((day) => {
  const btn = document.createElement("button");

  btn.innerText = day;

  btn.className = "btn small";

  btn.onclick = () => {
    selectedDate = day;

    updateSummary();
  };

  datesDiv.appendChild(btn);
});

const timesDiv = document.getElementById("times");

timeSlots.forEach((slot) => {
  const btn = document.createElement("button");

  btn.innerText =
    slot.time + " (" + (slot.spots === 0 ? "Full" : slot.spots + "/4") + ")";

  btn.className = "btn small";

  if (slot.spots === 0) {
    btn.disabled = true;
  }

  btn.onclick = () => {
    selectedTime = slot.time;

    updateSummary();
  };

  timesDiv.appendChild(btn);
});

function updateSummary() {
  const childName = eligibleChildren.find(
    (c) => c.id === childSelect.value
  )?.name;

  document.getElementById("summary").innerHTML = `

<p><b>${childName}</b></p>
<p>${selectedDate}</p>
<p>${selectedTime}</p>
<p>Credits remaining: ${user.credits}</p>

`;
}

function confirmBooking() {
  if (!selectedDate || !selectedTime) {
    alert("Select date and time");

    return;
  }

  if (user.credits <= 0) {
    alert("No credits. Buy more.");

    window.location.href = "pricing.html";

    return;
  }

  const child = eligibleChildren.find((c) => c.id === childSelect.value);

  user.credits--;

  user.bookings.push({
    childId: child.id,
    childName: child.name,
    date: selectedDate,
    time: selectedTime,
    status: "upcoming",
  });

  localStorage.setItem("currentUser", JSON.stringify(user));

  alert("Booking confirmed!");

  window.location.href = "dashboard.html";
}
