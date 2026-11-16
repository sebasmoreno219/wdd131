document.getElementById("currentyear").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;


const temperature = 9;
const windSpeed = 12;


function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}


const windChillElement = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent =
        `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChillElement.textContent = "N/A";
}
