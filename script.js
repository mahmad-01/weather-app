async function checkWeather(){
    const respone  = await fetch("https://api.weatherapi.com/v1/current.json?key=72d04cf270c44a22977125840231608&q=london", {mode:'cors'});
    const weatherData = await respone.json();
    console.log(weatherData);
}

checkWeather();