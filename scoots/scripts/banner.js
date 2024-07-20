document.addEventListener('DOMContentLoaded', () => {
    const weatherBanner = document.getElementById('weather-banner');
    const closeBannerButton = document.getElementById('close-banner');
    const tempMaxSpan = document.getElementById('temp-max');
    const apiKey = 'be0a5249ffe06607b565d0f2bc96df80';

    // Fetch weather data
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Cozumel&appid=${apiKey}&units=metric`)
    .then(response => response.json())
        .then(data => {
            const today = new Date().getDate();
            const todayData = data.list.filter(entry => new Date(entry.dt_txt).getDate() === today);

            if (todayData.length > 0) {
                const maxTemp = Math.max(...todayData.map(entry => entry.main.temp_max));
                tempMaxSpan.textContent = maxTemp.toFixed(1);
                weatherBanner.style.display = 'block';
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));

    // Close banner
    closeBannerButton.addEventListener('click', () => {
        weatherBanner.style.display = 'none';
    });
});
