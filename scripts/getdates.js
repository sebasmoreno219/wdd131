document.addEventListener("DOMContentLoaded", () => {

    // 1. Dynamically obtain the current year for the copyright
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        const currentYear = new Date().getFullYear();
        currentYearSpan.textContent = currentYear;
    }

    // 2. Dynamically obtain the document's last modification date
    const lastModifiedParagraph = document.getElementById("lastModified");
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
    }
});
