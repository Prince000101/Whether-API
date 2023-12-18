const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.getElementById('weather-body')

async function checkWeather(city){
    const api_key = "a01896a455ac98eb57240329f6388c43";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());
 
    console.log(weather_data);

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    const weather = weather_data.weather[0].description;
    var weather_img = document.getElementById('bgvidio');

    switch("weather"){
        case 'Clouds':
            weather_img.src = "bg-vid/cloudy.mp4";
            break;
        case 'Clear':
            weather_img.src = "bg-vid/clear.mp4";
            break;
        case 'Rain':
            weather_img.src = "bg-vid/rainy.mp4";
            break;
        case 'Haze':
            weather_img.src = "bg-vid/mist.mp4";
            break;
        case 'Snow':
            weather_img.src = "bg-vid/snow.mp4";
            break;
    }

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});