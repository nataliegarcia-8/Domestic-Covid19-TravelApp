var flightData = JSON.parse(localStorage.getItem("cheapestflight")) || [];
console.log(flightData);
var airlineCode = flightData.airline;
var time = flightData.departure_at;
// var date = $("<h5>").text(dateNum.slice(6, 7) + "/" + dateNum.slice(8, 10) 
// + "/" + dateNum.slice(0, 4));
var flightNo = flightData.flight_number;
var price = flightData.price;

for (var i = 0; i < airlines.length; i++) {
    if (airlineCode === airlines[i].code) {
        var airlineName = airlines[i].name;
        $("#airline").text("Airline: " + airlineName);
        console.log(airlineCode , airlines[i].code)

    }
}

var hours = parseInt(time[11] + time[12]);
console.log(hours)
if(hours < 12) {
console.log(hours);
hours = hours;
$("#departure").text("Departure Time: " + time.slice(6, 7) + "/" + time.slice(8, 10) 
   + "/" + time.slice(0, 4) + " " + hours + time.slice(13, 16) + " " + "A.M.");
}
else if (hours > 12) {
    hours = hours - 12;
    $("#departure").text("Departure Time: " + time.slice(6, 7) + "/" + time.slice(8, 10) 
    + "/" + time.slice(0, 4) + " " + hours + time.slice(13, 16) + " " + "P.M.");
}
else if (hours == 0) {
    hours = 12;
    $("#departure").text("Departure Time: " + time.slice(6, 7) + "/" + time.slice(8, 10) 
    + "/" + time.slice(0, 4) + " " + hours + time.slice(13, 16) + " " + "A.M.");
}
else if (hours == 12) {
    hours = 12;
    $("#departure").text("Departure Time: " + time.slice(6, 7) + "/" + time.slice(8, 10) 
    + "/" + time.slice(0, 4) + " " + hours + time.slice(13, 16) + " " + "P.M.");
}

$("#flightnumber").text("Flight No. : " + airlineCode + flightNo);
    $("#price").text("Price: " + "$" + price)

// --------------------------------------------------------------- \\ 

var covidData = JSON.parse(localStorage.getItem("Covid-Stats"));
var covidData2 = JSON.parse(localStorage.getItem("Covid-Stats-2"));
var arrState = covidData.region.province;
var confirmedCases1 = covidData.confirmed;
var confirmedCases2 = covidData2.confirmed;
var newCases = confirmedCases1 - confirmedCases2
console.log(confirmedCases1, confirmedCases2)
var deaths1 = covidData.deaths;
var deaths2 = covidData2.deaths;
var newDeaths = deaths1 - deaths2
console.log(deaths1 , deaths2)
var date = covidData.date;

$("#arrival").text("Arrival State: " + arrState);
$("#confirmed").text("Confirmed Cases: " + newCases.toLocaleString());
$("#deaths").text("Deaths: " + newDeaths.toLocaleString());
$("#date").text("Last Updated: " + date.slice(6, 7) + "/" + date.slice(8, 10) 
+ "/" + date.slice(0, 4));
