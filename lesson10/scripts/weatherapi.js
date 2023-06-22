const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5861897&q=Fairbanks&units=imperial&appid=fef3472ec1bd82edd28da3682f86f84e";
fetch(apiURL)
	.then((response) => response.json())
	.then((jsObject) => {
		console.log(jsObject);
		document.querySelector("#current-temp").textContent =
			jsObject.main.temp;

		const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
		const desc = jsObject.weather[0].description;

		document.querySelector("#weather-icon").setAttribute("src", iconsrc);
		document.querySelector("#weather-icon").setAttribute("alt", desc);
		document.querySelector("#caption-desc").textContent = desc;
	});
