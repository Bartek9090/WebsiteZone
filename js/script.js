const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const hamburgerToggle = document.getElementById("hamburger-toggle");
    if (hamburgerToggle.checked) {
      hamburgerToggle.checked = false;
    }
  });
});
