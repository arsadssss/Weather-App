const apiKey = "416aa9aa577479eb394f38e69ee3e25f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const btn = document.querySelector("#btn");
let target = document.querySelector(".weather-icon");
let weather = document.querySelector(".weather");
const cards = document.querySelector(".card");
var date = new Date();
var hours = date.getHours();
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    const data = await response.json();
    console.log(data);
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if(data.weather[0].main == "Mist"){
        target.src = "images/mist.png";
    }else if(data.weather[0].main == "Clouds"){
        target.src = "images/cloudy.png";
    }else if(data.weather[0].main == "Thunderstorm"){
        target.src = "images/thunderstorm.png";
    }else if(data.weather[0].main == "Snow"){
        target.src = "images/snow.png";
    }else if(data.weather[0].main == "Rain"){
        target.src = "images/rain.png";
    }else if(data.weather[0].main == "Clear"){
        target.src = "images/sunny.png";
    }else{
        target.src = "images/weather-icon.png";
    }
    weather.style.display = "block";

}

btn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
