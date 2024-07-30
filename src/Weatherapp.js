const ApiKey = "6df6ac3091be7143ac5015d8bab333ea";
const Apiurl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbar = document.querySelector(".searchbar");
const searchbtn = document.querySelector(".searchbtn");
const weathericon = document.querySelector(".weather_icon");

async function checkWeather(place) {
  const response = await fetch(Apiurl + place + `&appid=${ApiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".Weather").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
  }
  var data = await response.json();
  console.log(data);
  document.querySelector(".place").innerHTML = data.name;
  document.querySelector(".Temprature").innerHTML =
    Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity_value").innerHTML =
    data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weathericon.src = "cloud.png";
  } else if (data.weather[0].main == "Rain") {
    weathericon.src = "rain.png";
  } else if (data.weather[0].main == "Clear") {
    weathericon.src = "sun.png";
  } else if (data.weather[0].main == "thunderstrom") {
    weathericon.src = "thunderstrom.png";
  } else if (data.weather[0].main == "Drizzle") {
    weathericon.src = "drizzle.png";
  }
  document.querySelector(".Weather").style.display = "block";
}
searchbtn.addEventListener("click", () => {
  checkWeather(searchbar.value);
});
