// Toggle Menu
var toggleCollapse = document.getElementById("NavbarCollapse");
var toggleButton = document.getElementById("NavbarToggle");
var menuIcon = document.getElementById("menuIcon");
var closeIcon = document.getElementById("closeIcon");
const mediaQuerySmall = window.matchMedia('(max-width: 768px)');
const mediaQueryLarge = window.matchMedia('(min-width: 768px)');

if (mediaQuerySmall.matches) {
    toggleCollapse.style.display = "none";
}

// if (mediaQueryLarge.matches) {
//     toggleCollapse.style.display = "block";
// }

toggleButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (toggleCollapse.style.display === "none") {
        toggleCollapse.style.display = "block";
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    } else {
        toggleCollapse.style.display = "none";
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
}

// Dynamic CSS Variables

// Image Resizing
