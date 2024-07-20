// form-handler.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.reservation-form');

    form.addEventListener('submit', (event) => {
        // Prevent the default form submission
        event.preventDefault();

        // Redirect to the thank-you page
        window.location.href = 'thank-you.html';
    });
});
