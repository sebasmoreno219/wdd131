document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");

        if (navMenu.classList.contains("open")) {
            menuToggle.innerHTML = "&#x2715;";
            menuToggle.setAttribute("aria-expanded", "true");
        } else {
            menuToggle.innerHTML = "&#9776;";
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });

    const currentYearSpan = document.getElementById("currentyear");
    currentYearSpan.textContent = new Date().getFullYear();

    const lastModifiedSpan = document.getElementById("lastModified");
    lastModifiedSpan.textContent = document.lastModified;
});
