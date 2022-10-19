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

// Tabs
function openContent(event, areaContent) {
    var k, tabContent, tabItem;
    
    tabContent = document.getElementsByClassName("tab-content");
    for (k = 0; k < tabContent.length; k++) {
        tabContent[k].style.display = "none";
    }

    tabItem = document.getElementsByClassName("tab-item");
    for (k = 0; k < tabItem.length; k++) {
      tabItem[k].className = tabItem[k].className.replace(" active", "");
    }

    document.getElementById(areaContent).style.display = "block";
    event.currentTarget.className += " active";
}
