const apikey = "59eb95d4e92ecbd4e83330835736eebe";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
console.log(searchBox.value);
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function chechWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.getElementById("description").innerHTML = data.weather.main;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273.15) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "./images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weathericon.src = "./images/clear.png";
        } else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "./images/drizzle.png";
        } else if (data.weather[0].main == "Mast") {
            weathericon.src = "./images/mast.png";
        } else if (data.weather[0].main == "Rain") {
            weathericon.src = "./images/rain.png";
        } else if (data.weather[0].main == "Snow") {
            weathericon.src = "./images/snow.png";
        }else if (data.weather[0].main == "Haze") {
            weathericon.src = "./images/haze.png";
        }else {
            weathericon.src = "./images/default.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }



}

searchBtn.addEventListener("click", () => {
    console.log(searchBox.value);
    chechWeather(searchBox.value);
})