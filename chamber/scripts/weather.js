const currentTemp = document.querySelector('#current-temp');
const currentWeather = document.querySelector('#current-weather');
const day1Name = document.querySelector('#day1-name');
const day1Temp = document.querySelector('#day1-temp');
const day1Desc = document.querySelector('#day1-desc');
const day2Name = document.querySelector('#day2-name');
const day2Temp = document.querySelector('#day2-temp');
const day2Desc = document.querySelector('#day2-desc');
const day3Name = document.querySelector('#day3-name');
const day3Temp = document.querySelector('#day3-temp');
const day3Desc = document.querySelector('#day3-desc');

const apiKey = 'be0a5249ffe06607b565d0f2bc96df80';
const lat = 33.42;
const lon = -111.73;
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

async function fetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
        } else {
            throw Error('Weather data not available');
        }
    } catch (error) {
        console.error(error);
    }
}

async function fetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error('Forecast data not available');
        }
    } catch (error) {
        console.error(error);
    }
}

function displayCurrentWeather(data) {
    currentTemp.textContent = `${data.main.temp.toFixed(0)}°F`;
    currentWeather.textContent = data.weather[0].description;
}

function getDayName(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
}

function displayForecast(data) {
    const forecastData = data.list.filter((item, index) => index % 8 === 0).slice(1, 4);

    forecastData.forEach((item, index) => {
        const dayNameElem = document.querySelector(`#day${index + 1}-name`);
        const dayTempElem = document.querySelector(`#day${index + 1}-temp`);
        const dayDescElem = document.querySelector(`#day${index + 1}-desc`);
        dayNameElem.textContent = getDayName(item.dt_txt);
        dayTempElem.textContent = `${item.main.temp.toFixed(0)}°F`;
        dayDescElem.textContent = item.weather[0].description;
    });
}

fetchWeather();
fetchForecast();
