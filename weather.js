const apiKey = "e05b40166193b850e3496fd3c86c0fa2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "Clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
        weatherIcon.scc = "clear.png";
        }
        else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
/*const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {

    const APIKey ='98740f4ebc0d63bcf8ba70090e5a091';
    const city = document.querySelector('.search-box input').value;

    if(city == '')
        return;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API key}')
    .then(response => response.json()).then(json => {

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');


        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'https://www.freeiconspng.com/uploads/sunny-weather-icon';

                break;

            default:
                image.src='';
        }
    })
})
*/
