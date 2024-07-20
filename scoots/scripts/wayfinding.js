document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links within the .navigation class
    const navLinks = document.querySelectorAll('nav.navigation ul li a');

    // Get the current URL path
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    console.log('Current Path:', currentPath);

    // Loop through each link and add 'active' class to the matching link
    navLinks.forEach(link => {
        console.log('Link Href:', link.getAttribute('href'));
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
