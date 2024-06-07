document.addEventListener("DOMContentLoaded", function() {
    const visitMessage = document.getElementById("visitMessage");

    const msToDays = 1000 * 60 * 60 * 24;
    const today = Date.now();

    // Retrieve the last visit date from localStorage
    const lastVisit = localStorage.getItem("lastVisit");

    if (!lastVisit) {
        // First visit
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = parseInt(lastVisit, 10);
        const daysBetween = Math.floor((today - lastVisitDate) / msToDays);

        if (daysBetween < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysBetween === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysBetween} days ago.`;
        }
    }

    // Store the current visit date in localStorage
    localStorage.setItem("lastVisit", today.toString());
});
