const currentyear = document.querySelector("#currentyear");
const year = new Date().getFullYear();
const tempSpot = document.querySelector('#temperature');
const condiSpot = document.querySelector('#conditions');
const windSpot = document.querySelector('#wind');
const windChillSpot = document.querySelector('#wind-chill');
const conditions = 'Partly Cloudy';
const temperature = 40.0;
const wind = 5;

function calculateWindChill(temp, windSpeed) {
    // Formula: 35.74 + 0.6215T - 35.75(V^0.16) + 0.4275T(V^0.16)
    const vPow = Math.pow(windSpeed, 0.16);
    const windChill = 35.74 + (0.6215 * temp) - (35.75 * vPow) + (0.4275 * temp * vPow);

    return Math.round(windChill * 10) / 10; // Returns rounded to 2 decimal places
}

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;
currentyear.innerHTML = `${year}`;

tempSpot.textContent = `${temperature} F°`;
condiSpot.textContent = `${conditions}`;
windSpot.textContent = `${wind} mph`;
if (wind > 3 && temperature <= 50) {
    const windChill = calculateWindChill(temperature, wind);
    windChillSpot.textContent = `${windChill} F°`;
}
else {
    windChillSpot.textContent = 'N/A';
};