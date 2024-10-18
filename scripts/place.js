const currentYear = new Date().getFullYear();
console.log(currentYear);
document.getElementById("currentyear").innerText = currentYear;
document.getElementById('lastModified').innerText = document.lastModified;

const temperature = document.querySelector("#temperature");
const temperatureUnit= document.querySelector("#temperatureUnit");

const wind = document.querySelector("#wind");
const windChillFactor = document.querySelector("#windChillFactor");

if (temperature <= 10 && wind > 4.8) {
    windChillFactor.innerHTML = calculateWindChill(temperature, wind);
}else{
    windChillFactor.innerHTML="N/A";
}


function calculateWindChill(temperature, windSpeed) {
    // Check if temperature is in Celsius; if not, convert it


    // Calculate wind chill index
    let windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) 
    + (0.3965 * temperature * Math.pow(windSpeed, 0.16));

    // Round wind chill to nearest integer
    windChill = Math.round(windChill);

    return windChill;
}
