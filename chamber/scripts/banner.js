document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('banner');
    const closeBannerButton = document.getElementById('close-banner');

    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3) {
        banner.style.display = 'block';
    }

    closeBannerButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });
});
