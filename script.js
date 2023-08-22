const searchInput = document.querySelector('.searchBar');
const subButton = document.getElementById('searchSubmit');
const cityN = document.querySelector(".city");
const weatherCond = document.querySelector(".condition");
const temp = document.querySelector(".temp");
const feelsLike = document.querySelector(".feelsLike");
const humidity = document.querySelector(".humidity");

async function checkWeather(location){
    const respone  = await fetch("https://api.weatherapi.com/v1/current.json?key=72d04cf270c44a22977125840231608&q=" + location + "", {mode:'cors'});
    const weatherData = await respone.json();
    cityN.textContent = weatherData.location.name;
    //weatherCond.textContent = weatherData.weather[0].text;
    temp.textContent = weatherData.current.temp_c + " " + weatherData.current.temp_f;
    feelsLike.textContent = weatherData.current.feelslike_c + " " + weatherData.current.feelslike_f;
    humidity.textContent = weatherData.current.humidity;
}


subButton.addEventListener("click", () => {
    checkWeather(searchInput.value);
})



searchInput.addEventListener("click", ()=>{
    searchInput.value = "";
})



/*now what do we need?
- Search For Weather
- Toggle F or C
- Display Information
- 

*/



