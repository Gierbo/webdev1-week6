// =======================
// Mobile Menu Toggle
// =======================
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


// =======================
// Dark Mode Toggle
// =======================
const darkButton = document.getElementById("darkModeBtn");

darkButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


// =======================
// Current Year in Footer
// =======================
document.getElementById("year").textContent = new Date().getFullYear();
