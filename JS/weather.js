const API_KEY = "0c867f39b8ddef16d645903a7dcb1d05";

function onGeoOk(position)
{
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:last-child");
        const city = document.querySelector("#weather span:first-child");
        city.innerText = `${data.name}`;
        weather.innerText = ` / ${data.main.temp}°C / ${data.weather[0].main}`;
    });
}

function onGeoError(position)
{
    alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
