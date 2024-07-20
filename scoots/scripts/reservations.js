document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#reservation-form');

    form.addEventListener('submit', event => {
        event.preventDefault(); // Prevent default form submission
        
        // Perform validation if needed
        // You can also process form data here if needed
        
        // Redirect to the thank you page
        window.location.href = 'thank-you.html'; // Ensure this file exists
    });
});
