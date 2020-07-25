const airlineType= document.getElementById("airline");
const departure= document.getElementById("departure");
const flightnumber= document.getElementById("flightnumber");
const price= document.getElementById("price");

const flightData = JSON.parse(localStorage.getItem("cheapestflight")) || [];

airlineType.innerHTML = flightData.airline;
departure.innerHTML = flightData.departure_at;
flightnumber.innerHTML = flightData.flight_number;
price.innerHTML = flightData.price;

var covidData = JSON.parse(localStorage.getItem("Covid-Stats"));
var arrState = covidData.region.province;
var confirmedCases = covidData.confirmed;
var deaths = covidData.deaths;
var date = covidData.date;
console.log(arrState, confirmedCases, deaths, date)

$("#arrival").text(arrState);
$("#confirmed").text(confirmedCases);
$("#deaths").text(deaths);
$("#date").text(date);


// console.log(flightData.airline);