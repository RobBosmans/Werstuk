"use strict";
const weatherResultElement = document.getElementById("weatherResult");
const formElement = document.getElementById("wform");
formElement.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();
    const {
        value: city
    } = document.getElementById("search");
    fetchWeatherData(city);
}

async function fetchWeatherData(city) {
    const cityWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=22206b1c3a3b6bccad0e5787c657b20b&units=metric`);
    const cityWeatherJson = await cityWeatherResponse.json();
    showWeatherData(cityWeatherJson);
}

function showWeatherData(weatherData) {
    const {
        main: {
            temp_max,
            temp_min
        },
        wind: {
            speed
        },
        weather: [{
            description
        }]
    } = weatherData;
    const htmlString = `
        <ul>
            <li>Max temperature: ${temp_max} °C</li>
            <li>Min temperature: ${temp_min} °C</li>
            <li>Wind: ${speed} m/s</li>
            <li>Description: ${description}</li>
        </ul>
        `;
    weatherResultElement.innerHTML = htmlString;
}