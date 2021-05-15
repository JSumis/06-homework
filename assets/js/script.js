
console.log("hello");

var apiKey = "52b2951fafc393d5feca833b40a0a903";
var citySearch = document.getElementById("city-search").value;
var weatherAPIurl = "https://api.openweathermap.org/data/2.5/forecast?q="+citySearch+"&appid="+ apiKey;






function populateCityWeather(e){
    e.preventDefault();
    var weatherAPIurl = "https://api.openweathermap.org/data/2.5/forecast?q="+citySearch+"&appid="+ apiKey;
    console.log("It works!", citySearch)
    fetch(weatherAPIurl)
.then(function(res) {
    return res.json()

})
.then(function(result){
    console.log(result)
})
}

document.getElementById("searchBtn").addEventListener("click", populateCityWeather);


/* psuedo-code
create basic navbar with title
create search for a city form on left
past searches save to local storage and are displayed below search field
create a div to the right showing search city and api data points for temp, wind, humidity, and UV index
use fetch api function
create another div for 5 day forcast (1 card for each day) with date format 3/31/21, weather icon (cloudy rainy, sunny, etc) temp, wind, humidity
*/










/* requirements:
06 Server - Side APIs: Weather Dashboard
Your Task
Third - party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL.Developers are often tasked with retrieving data from another application 's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the OpenWeather One Call API to retrieve weather data
for cities.Read through the documentation
for setup and usage instructions.You will use localStorage to store any persistent data.

User Story
AS A traveler I WANT to see the weather outlook for multiple cities SO THAT I can plan a trip accordingly

Acceptance Criteria
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5 - day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
Mock - Up
The following image shows the web application 's appearance and functionality:

The weather app includes a search option, a list of cities, and a five - day forecast and current weather conditions
for Atlanta.

Grading Requirements
This homework is graded based on the following criteria:

    Technical Acceptance Criteria: 40 %
    Satisfies all of the above acceptance criteria plus the following:

    Uses the OpenWeather API to retrieve weather data.

Uses localStorage to store persistent data.
*/