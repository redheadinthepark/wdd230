// scripts/weather.js

document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'YOUR_API_KEY';
    const location = 'Cozumel';

    // Fetch current weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherWidget = document.getElementById('weather-widget');

            // Get current weather data
            const temp = data.main.temp;
            const humidity = data.main.humidity;
            const main = data.weather[0].main;
            const description = data.weather[0].description;
            const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

            // Fetch forecast data
            return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`)
                .then(response => response.json())
                .then(forecastData => {
                    // Find forecast data for the next day's 3 PM (1500 hours)
                    const nextDayForecast = forecastData.list.find(forecast => {
                        const forecastDate = new Date(forecast.dt_txt);
                        const now = new Date();
                        return forecastDate.getDate() === now.getDate() + 1 && forecastDate.getHours() === 15;
                    });

                    const forecastTemp = nextDayForecast.main.temp;

                    // Populate weather widget
                    weatherWidget.innerHTML = `
                        <div>
                            <h3>${main}</h3>
                            <p>${description}</p>
                            <img src="${icon}" alt="Weather icon">
                        </div>
                        <div>
                            <p>Current Temperature: ${temp}°C</p>
                            <p>Current Humidity: ${humidity}%</p>
                            <p>Tomorrow's Temperature at 3 PM: ${forecastTemp}°C</p>
                        </div>
                    `;
                });
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
