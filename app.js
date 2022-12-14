//api key
const myKey = "690d0147973fa3d314f9a29de2840d58";

// --- functions ---

//searches up city
function searchCity(input) {
    callWeather(input, myKey);
}

//get weather api
function callWeather(city, key) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ 
        city + 
        "&units=imperial&appid=" + 
        key)
    .then((response) => response.json())
    .then((data) => displayWeather(data))
    .catch(() => {
        city = city.charAt(0).toUpperCase() + city.slice(1);
        window.alert(`"${city}" is an invalid city`);
    });
}

//utilizes js dom to display weather
function displayWeather(data) {
    const {name}  = data;
    const {temp, humidity} = data.main;
    const {icon, description} = data.weather[0];
    const {speed} = data.wind;

    document.querySelector("#city").innerText = `${name}`;
    document.querySelector("#temp").innerText = `${temp}° F`
    document.querySelector("#description").innerText = description;
    document.querySelector("#humidity").innerText = `Humidity: ${humidity}%`;
    document.querySelector("#wind").innerText = `Wind Speed: ${speed}mph`;
    document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
}

// --- event listeners ---

//clicking search button
document.querySelector("#btn").addEventListener("click", function(){
    searchCity(document.querySelector("#search-bar").value);
});

//clicking enter button while inputting city
document.querySelector("#search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter") {
        searchCity(document.querySelector("#search-bar").value);
        document.querySelector("#search-bar").value = "";
    }
});

//Detroit is default weather shown
callWeather("Detroit", myKey);
