var flightData = JSON.parse(localStorage.getItem("cheapestflight")) || [];

var airlineCode = flightData.airline;
var time = flightData.departure_at;
var flightNo = flightData.flight_number;
var price = flightData.price;

for (var i = 0; i < airlines.length; i++) {
    if (airlineCode === airlines[i].code) {
        var airlineName = airlines[i].name
        $("#airline").text("Airline: " + airlineName);
        console.log(airlineCode , airlines[i].code)

    }
}
    $("#departure").text("Departure Time: " + time);
    $("#flightnumber").text("Flight No. : " + airlineCode + flightNo);
    $("#price").text("Price: " + "$" + price)

// --------------------------------------------------------------- \\ 

var covidData = JSON.parse(localStorage.getItem("Covid-Stats"));
var arrState = covidData.region.province;
var confirmedCases = covidData.confirmed;
var deaths = covidData.deaths;
var date = covidData.date;
console.log(arrState, confirmedCases, deaths, date)

$("#arrival").text("Arrival State: " + arrState);
$("#confirmed").text("Confirmed Cases: " + confirmedCases.toLocaleString());
$("#deaths").text("Deaths: " + deaths.toLocaleString());
$("#date").text("Last Updated: " + date);
