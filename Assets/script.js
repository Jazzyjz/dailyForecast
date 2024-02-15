// Global variables
var city;

// element variables

var searchBtn = document.querySelector('#searchbtn');
var cityInputEl = document.querySelector('#cityInput');

// event listeners
searchBtn.addEventListener('click', submitForm);

// API key
var apiKey = "932891f970d879716f109a3b5af52d42"

// // current day api 
var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q="+ +"&appid="+apiKey;

// rest of week api
var weeklyWeather = "https://pro.openweathermap.org/data/2.5/forecast/hourly?q="+ +"&appid="+ apiKey;


// function to submit city input
async function submitForm(){
    if(!cityInputEl.value){
        alert("Enter a city name ");
        return;
    }
    var search = cityInputEl.value;
    
}

// get current day forecast

async function getdayForecast() {
    fetch(currentWeather)
    const response = await fetch(currentWeather);
    const data = await response.json();
    return data;
}
async function getWeekForecast() {
    fetch(weeklyWeather);
    const response = await fetch(weeklyWeather);
    const data = await response.json();
    return data;
}

async function getForecast(){

    async function dayOfForecast() {
        var today = await getdayForecast();
        // create var for new element of day
    
        // inject data in var
    
        // append var data in created element
    }
    
        // get rest of week forecast
    async function weekForecast() {
        var week = await getWeekForecast();
        // create for loop for each card to be created with data limits
    
         // create var for new element of day
    
        // inject data in var
    
        // append var data in created element
    }
    dayOfForecast()
    weekForecast()
}

