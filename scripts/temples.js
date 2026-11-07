
document.addEventListener("DOMContentLoaded", () => {

    // Hamburger menu functionality
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);

        if (isOpen) {
            menuToggle.textContent = "×";
            menuToggle.setAttribute("aria-label", "Close navigation menu");
        } else {
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        }
    });

    // Dynamic copyright year
    const currentYearSpan = document.getElementById("currentyear");

    currentYearSpan.textContent = new Date().getFullYear();

    // Last modified date
    const lastModifiedSpan = document.getElementById("lastModified");

    lastModifiedSpan.textContent = document.lastModified;

});
