const searchInput = document.querySelector('.searchBar');
const subButton = document.getElementById('searchSubmit');

async function checkWeather(location){
    const respone  = await fetch("https://api.weatherapi.com/v1/current.json?key=72d04cf270c44a22977125840231608&q=" + location + "", {mode:'cors'});
    const weatherData = await respone.json();
    console.log(weatherData);
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



