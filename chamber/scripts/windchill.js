function calculateWindChill(temp, speed) {
    if (temp <= 50 && speed > 3.0) {
        let windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
        return windChill.toFixed(2); 
    } else {
        return "N/A"; 
    }
}

function updateWindChill() {
    // Get the temperature and wind speed from the page
    let tempElement = document.getElementById('current-temp');
    let speedElement = document.getElementById('wind-speed');
    let chillElement = document.getElementById('wind-chill');

    // Parse the temperature and wind speed values
    let temp = parseFloat(tempElement.textContent);
    let speed = parseFloat(speedElement.textContent);

    // Calculate the wind chill
    let windChill = calculateWindChill(temp, speed);

    // Update the wind chill element on the page
    chillElement.textContent = windChill;
}

window.onload = updateWindChill;
