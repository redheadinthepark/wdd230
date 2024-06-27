const currentTemp = document.querySelector('#current-temp');
const weatherIconContainer = document.querySelector('#weather-icons');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.63&lon=-112.30&appid=be0a5249ffe06607b565d0f2bc96df80";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();  
            console.log(data); // testing only
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function capitalizeDescription(description) {
    return description.split(' ')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' ');
}

function displayResults(data) {
    const tempFahrenheit = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(0);
    currentTemp.innerHTML = `${tempFahrenheit}&deg;F`;

    weatherIconContainer.innerHTML = '';
    captionDesc.textContent = '';

    data.weather.forEach(event => {
        const iconsrc = `https://openweathermap.org/img/wn/${event.icon}@2x.png`;
        let desc = capitalizeDescription(event.description);

        const weatherIcon = document.createElement('img');
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);

        weatherIconContainer.appendChild(weatherIcon);


        const descSpan = document.createElement('span');
        descSpan.textContent = `${desc}`;
        captionDesc.appendChild(descSpan);
    });
}

apiFetch();
