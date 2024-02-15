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


// rest of week api
var weeklyWeather = "https://pro.openweathermap.org/data/2.5/forecast/hourly?q="+ city +"&appid="+ apiKey;


// function to submit city input
async function submitForm(e){
    e.preventDefault()
    if(!cityInputEl.value){
        alert("Enter a city name ");
        return;
    }
    var search = cityInputEl.value;
    

    console.log(search);
    getdayForecast(search);
    cityInputEl.value = "";

}

// get current day forecast

function getdayForecast(city) {
    var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+apiKey;
    fetch(currentWeather)
    .then(response => response.json())
    .then(data => {
    dayOfForecast(city, data);
    console.log(data)
  });
    

}
function getWeekForecast() {
    fetch(weeklyWeather)
    .then(response => response.json())
    .then(data => {
    renderCurrentWeather(city, data);
  })
}



    async function dayOfForecast(city,weather) {
        console.log(weather)
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
 

