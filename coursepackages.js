// upper btn shows by grade filters
 const gradeSelect = document.getElementById("course_grade_selection");
  const gradeFilterButtons = document.querySelectorAll(".filter-btn[data-show-on]");

  function updateVisibleButtons(grade) {
    gradeFilterButtons.forEach(button => {
      const showOn = button.getAttribute("data-show-on");
      button.style.display = (showOn === grade) ? "inline-block" : "none";
    });
  }

  gradeSelect.addEventListener("change", function () {
    updateVisibleButtons(this.value);
  });

  // On page load
  window.addEventListener("DOMContentLoaded", () => {
    updateVisibleButtons(gradeSelect.value);
  });



//course-card
document.getElementById("course_grade_selection").addEventListener("change", function () {
  const selectedGrade = this.value;
  const allCourses = document.querySelectorAll(".course-card");

  allCourses.forEach(course => {
    const courseGrade = course.getAttribute("data-grade");

    if (selectedGrade === "all" || courseGrade === selectedGrade) {
      course.closest(".col-lg-4").style.display = "block";
    } else {
      course.closest(".col-lg-4").style.display = "none";
    }
  });
});

// Trigger filtering on page load
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("course_grade_selection").dispatchEvent(new Event("change"));
});

//students cards filter 
const filterButtons = document.querySelectorAll(".filter-btn");

const allSection = document.getElementById("allStudents");
const tenthSection = document.getElementById("tenthStudents");
const twelfthSection = document.getElementById("twelfthStudents");
const iitJeeSection = document.getElementById("IITJEEStudents");
const neetSection = document.getElementById("NEETStudents");
const SATSection = document.getElementById("SATStudents");
const OlympiadSection = document.getElementById("OlympiadStudents");
const RankersSection = document.getElementById("RankersStudents");

// Default section to show
if (allSection) allSection.style.display = "block";
if (tenthSection) tenthSection.style.display = "none";
if (twelfthSection) twelfthSection.style.display = "none";
if (iitJeeSection) iitJeeSection.style.display = "none";
if (neetSection) neetSection.style.display = "none";
if (SATSection) SATSection.style.display = "none";
if (OlympiadSection) OlympiadSection.style.display = "none";
if (RankersSection) RankersSection.style.display = "none";

// Add event listeners to filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    // Hide all sections
    if (allSection) allSection.style.display = "none";
    if (tenthSection) tenthSection.style.display = "none";
    if (twelfthSection) twelfthSection.style.display = "none";
    if (iitJeeSection) iitJeeSection.style.display = "none";
    if (neetSection) neetSection.style.display = "none";
    if (SATSection) SATSection.style.display = "none";
    if (OlympiadSection) OlympiadSection.style.display = "none";
    if (RankersSection) RankersSection.style.display = "none";

    // Show the correct section based on filter
    if (filter === "allStudents" && allSection) {
      allSection.style.display = "block";
    } else if (filter === "tenthStudents" && tenthSection) {
      tenthSection.style.display = "block";
    } else if (filter === "twelfthStudents" && twelfthSection) {
      twelfthSection.style.display = "block";
    } else if (filter === "IITJEEStudents" && iitJeeSection) {
      iitJeeSection.style.display = "block";
    } else if (filter === "NEETStudents" && neetSection) {
      neetSection.style.display = "block";
    } else if (filter === "SATStudents" && SATSection) {
      SATSection.style.display = "block";
    } else if (filter === "OlympiadStudents" && OlympiadSection) {
      OlympiadSection.style.display = "block";
    } else if (filter === "RankersStudents" && RankersSection) {
      RankersSection.style.display = "block";
    }

    // Highlight clicked button
    filterButtons.forEach((btn) => {
      btn.classList.remove("btn-dark");
      btn.classList.add("btn-outline-dark");
    });
    button.classList.remove("btn-outline-dark");
    button.classList.add("btn-dark");
  });
});
