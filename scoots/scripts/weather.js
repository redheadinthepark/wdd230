// scripts/weather.js

document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'be0a5249ffe06607b565d0f2bc96df80';
    const lat = 20.423344711951717;
    const lon = -86.92334224240388;

    // Fetch current weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const weatherWidget = document.getElementById('weather-widget');

            // Get current weather data
            const temp = data.main.temp;
            const humidity = data.main.humidity;
            const main = data.weather[0].main;
            const description = data.weather[0].description;
            const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`; // Use HTTPS for the icon

            // Populate current weather data
            weatherWidget.innerHTML = `
                <div>
                    <h3>${main}</h3>
                    <p>${description}</p>
                    <img src="${icon}" alt="Weather icon">
                </div>
                <div>
                    <p>Current Temperature: ${temp}°C</p>
                    <p>Current Humidity: ${humidity}%</p>
                </div>
            `;

            // Fetch forecast data
            return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(forecastData => {
            // Find forecast data for the next day's 3 PM (1500 hours)
            const nextDayForecast = forecastData.list.find(forecast => {
                const forecastDate = new Date(forecast.dt_txt);
                const now = new Date();
                return forecastDate.getDate() === now.getDate() + 1 && forecastDate.getHours() === 15;
            });

            // Check if forecast data is available
            if (nextDayForecast) {
                const forecastTemp = nextDayForecast.main.temp;

                // Append forecast data to weather widget
                const weatherWidget = document.getElementById('weather-widget');
                weatherWidget.innerHTML += `
                    <div>
                        <p>Tomorrow's Temperature at 3 PM: ${forecastTemp}°C</p>
                    </div>
                `;
            } else {
                console.error('No forecast data available for tomorrow at 3 PM.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherWidget = document.getElementById('weather-widget');
            weatherWidget.innerHTML = `<p>Unable to fetch weather data. Please try again later.</p>`;
        });
});
