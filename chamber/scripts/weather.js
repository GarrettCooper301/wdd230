const city = 'Saint George';
const apiKey = 'fef3472ec1bd82edd28da3682f86f84e';
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    document.getElementById('current-condition').textContent = data.weather[0].description.toUpperCase();
    document.getElementById('current-temperature').textContent = data.main.temp + ' °F';
    document.getElementById('wind-speed').textContent = data.wind.speed + ' mph';
    
    if (data.main.temp <= 50 && data.wind.speed >= 3) {
      const windChill = calculateWindChill(data.main.temp, data.wind.speed);
      document.getElementById('wind-chill').textContent = windChill + ' °F';
    } else {
      document.getElementById('wind-chill').textContent = 'N/A';
    }
  })
  .catch((error) => {
    console.log('Error:', error);
  });

function calculateWindChill(temperature, windSpeed) {
  const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
  return Math.round(windChill);
}

