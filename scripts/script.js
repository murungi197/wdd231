// MENU TOGGLE
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// FOOTER DATES
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


// COURSE ARRAY
const courses = [
  { code: "WDD 130", subject: "WDD", credits: 3, completed: true },
  { code: "WDD 131", subject: "WDD", credits: 3, completed: false },
  { code: "WDD 231", subject: "WDD", credits: 3, completed: false },
  { code: "CSE 110", subject: "CSE", credits: 2, completed: true }
];


// DISPLAY COURSES
function displayCourses(courseList) {
  const container = document.getElementById("courses");
  container.innerHTML = "";

  let total = 0;

  courseList.forEach(course => {
    const div = document.createElement("div");
    div.textContent = course.code;
    div.classList.add("course");

    if (course.completed) {
      div.classList.add("completed");
    }

    total += course.credits;
    container.appendChild(div);
  });

  document.getElementById("credits").textContent =
    `Total Credits: ${total}`;
}



// FILTER
function filterCourses(type) {
  if (type === "all") {
    displayCourses(courses);
  } else {
    const filtered = courses.filter(c => c.subject === type);
    displayCourses(filtered);
  }
}


// INITIAL LOAD
displayCourses(courses);