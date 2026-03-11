// Get logged in user
const user = JSON.parse(localStorage.getItem("currentUser"));

if (!user) {
  window.location.href = "login.html";
}

// DEFAULT STRUCTURE
user.credits = user.credits || 0;
user.children = user.children || [];
user.bookings = user.bookings || [];

document.getElementById("welcomeText").innerText =
  "Welcome, " + user.name.split(" ")[0] + "! 👋";

// BOOKINGS
const upcoming = user.bookings.filter((b) => b.status === "upcoming");
const past = user.bookings.filter((b) => b.status === "completed");

// STATS
document.getElementById("creditCount").innerText = user.credits;
document.getElementById("upcomingCount").innerText = upcoming.length;
document.getElementById("childrenCount").innerText = user.children.length;

// CHILDREN
const childrenList = document.getElementById("childrenList");

if (user.children.length === 0) {
  childrenList.innerHTML = `
<div class="card center">
<i class="fa-solid fa-baby big-icon"></i>
<p>No children added yet</p>
<a href="add-child.html" class="btn small">Add Your First Child</a>
</div>
`;
} else {
  user.children.forEach((child) => {
    childrenList.innerHTML += `
        <div class="card">
        
        <h3>${child.name}</h3>
        
        <p>DOB: ${child.dateOfBirth}</p>
        
        <p>Level: ${child.experienceLevel}</p>
        
        <span class="badge ${child.intakeCompleted ? "ready" : "pending"}">
        ${child.intakeCompleted ? "Ready to book" : "Intake needed"}
        </span>
        
        <div class="actions">
        
        ${
          !child.intakeCompleted
            ? `<a href="intake.html?id=${child.id}" class="btn small primary">
                  Complete Intake
                </a>`
            : `<a href="booking.html" class="btn small outline">
                  Book Lesson
                </a>`
        }
        
        </div>
        
        </div>
        `;
  });
}

// UPCOMING BOOKINGS
const bookingList = document.getElementById("bookingList");

if (upcoming.length === 0) {
  bookingList.innerHTML = `
<div class="card center">
<i class="fa-solid fa-calendar big-icon"></i>
<p>No upcoming bookings</p>
<a href="booking.html" class="btn small">Book a Class</a>
</div>
`;
} else {
  upcoming.forEach((b) => {
    bookingList.innerHTML += `
<div class="card booking">

<div>
<strong>${b.childName}</strong>
<p>${b.date} at ${b.time}</p>
</div>

<span class="badge confirmed">Confirmed</span>

</div>
`;
  });
}

// BOOKING HISTORY
if (past.length > 0) {
  document.getElementById("historyTitle").style.display = "block";

  past.forEach((b) => {
    document.getElementById("historyList").innerHTML += `
<div class="card booking past">

<div>
<strong>${b.childName}</strong>
<p>${b.date} at ${b.time}</p>
</div>

<span class="badge complete">Completed</span>

</div>
`;
  });
}

function startIntake(childId) {
  localStorage.setItem("intakeChildId", childId);

  window.location.href = "intake.html";
}
