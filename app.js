const myKey = "690d0147973fa3d314f9a29de2840d58";

function callWeather(city, key) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ 
        city + 
        "&units=imperial&appid=" + 
        key)
    .then((response) => response.json())
    .then((data) => displayWeather(data))
}

function displayWeather(data) {
    const {name}  = data;
    const {temp, humidity} = data.main;
    const {icon, description} = data.weather[0];
    const {speed} = data.wind;
    
    console.log(data);

    document.querySelector("#city").innerText = `${name}`;
    document.querySelector("#temp").innerText = `${temp}° F`
    document.querySelector("#description").innerText = description;
    document.querySelector("#humidity").innerText = `Humidity: ${humidity}%`;
    document.querySelector("#wind").innerText = `Wind Speed: ${speed}mph`;
    document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
}

callWeather("Detroit", myKey);
