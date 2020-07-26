var flightData = JSON.parse(localStorage.getItem("cheapestflight"));
// || [];
var airline = flightData.airline;
var time  = flightData.departure_at;
var flightNo = flightData.flight_number;
var price = flightData.price;

$("#airline").text("Airline: " + airline);
$("#departure").text("Departure Time: " + time); 
$("#flightnumber").text("Flight No. : " + airline + flightNo);
$("#price").text("Price: " + "$" + price)

// --------------------------------------------------------------- \\ 

var covidData = JSON.parse(localStorage.getItem("Covid-Stats"));
var arrState = covidData.region.province;
var confirmedCases = covidData.confirmed;
var deaths = covidData.deaths;
var date = covidData.date;
console.log(arrState, confirmedCases, deaths, date)

$("#arrival").text("Arrival State: " + arrState);
$("#confirmed").text("Confirmed Cases: " + confirmedCases);
$("#deaths").text("Deaths: " + deaths);
$("#date").text("Last Updated: " + date);
