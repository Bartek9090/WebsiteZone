const hamburgerToggle = document.getElementById("hamburger-toggle");
const nav = document.querySelector(".nav");

hamburgerToggle.addEventListener("change", function () {
  if (this.checked) {
    nav.classList.add("open");
  } else {
    nav.classList.remove("open");
  }
});

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerToggle.checked = false;
    nav.classList.remove("open");
  });
});
