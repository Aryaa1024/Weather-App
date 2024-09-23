let inputBox=document.querySelector(".input-box");
let searchBtn=document.getElementById('searchBtn');
let weather_img=document.querySelector('.weather-img');
let temperature=document.querySelector('.temperature');
let description=document.querySelector('.description');
let humidity=document.getElementById('humidity');
let wind_speed=document.getElementById('wind-speed');

async function checkWeather(city){
    let api_key="36a27207b255820fc959b3f5e6fc0816";
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    let weather_data=await fetch(`${url}`).then(response =>response.json());
    console.log(weather_data);
    temperature.innerHTML=`${Math.round(weather_data.main.temp - 273.15)} °C`;
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity} %`;
    wind_speed.innerHTML=`${weather_data.wind.speed} Km / Hr`;

    switch(weather_data.weather[0].main){
        case `Clouds`:
            weather_img.src="images/cloud.png";
            break;
        case `Clear`:
            weather_img.src="images/clear.png";
            break;
        case `Rain`:
            weather_img.src="images/rain.png";
            break;
        case `Mist`:
            weather_img.src="images/mist.png";
            break;
        case `Snow`:
            weather_img.src="images/snow.png";
            break;
        default:
            weather_img.src="images/404.png";
            break;
    }
}

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});
