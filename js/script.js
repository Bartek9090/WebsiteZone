const hamburgerToggle = document.getElementById("hamburger-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");
const hamburgerLabel = document.querySelector(".hamburger");

function toggleNav() {
  if (window.innerWidth <= 767) {
    nav.classList.toggle("open");
    hamburgerToggle.checked = nav.classList.contains("open");
  }
}

hamburgerLabel.addEventListener("click", function () {
  toggleNav();
});

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
    hamburgerToggle.checked = false;
  });
});
