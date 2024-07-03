const hamburgerToggle = document.getElementById("hamburger-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");

hamburgerToggle.addEventListener("change", function () {
  if (this.checked) {
    openNav();
  } else {
    closeNav();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    closeNav();
  });
});

function openNav() {
  if (window.innerWidth <= 767) {
    nav.style.display = "flex";
  }
}

function closeNav() {
  if (window.innerWidth <= 767) {
    nav.style.display = "none";
  }
}
