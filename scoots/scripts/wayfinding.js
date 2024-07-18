document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    // Get the current URL path
    const currentPath = window.location.pathname.split('/').pop();

    // Loop through each link and add 'active' class to the matching link
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
