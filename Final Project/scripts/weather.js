const city = 'Carlsbad';
const apiKey = 'fef3472ec1bd82edd28da3682f86f84e';
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    // Current weather conditions
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    document.getElementById('current-temperature').textContent = data.main.temp + ' °F';
    document.getElementById('condition-description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = data.main.humidity + '%';

    // Three-day temperature forecast
    const forecastAPIURL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${apiKey}&units=imperial&cnt=3`;
    return fetch(forecastAPIURL);
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    
    // Display three-day temperature forecast
    const forecastContainer = document.getElementById('forecast');
    forecastContainer.innerHTML = '';

    for (let i = 0; i < data.list.length; i++) {
      const forecast = data.list[i];
      const date = new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      const temperature = forecast.temp.day.toFixed(1) + ' °F';

      const forecastCard = document.createElement('div');
      forecastCard.classList.add('forecast-card');

      const dateElement = document.createElement('p');
      dateElement.classList.add('forecast-date');
      dateElement.textContent = date;

      const temperatureElement = document.createElement('p');
      temperatureElement.classList.add('forecast-temperature');
      temperatureElement.textContent = temperature;

      forecastCard.appendChild(dateElement);
      forecastCard.appendChild(temperatureElement);
      forecastContainer.appendChild(forecastCard);
    }
  })
  .catch((error) => {
    console.log('Error:', error);
  });