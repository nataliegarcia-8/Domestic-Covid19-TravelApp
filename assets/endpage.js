const airlineType= document.getElementById("airline");
const departure= document.getElementById("departure");
const flightnumber= document.getElementById("flightnumber");
const price= document.getElementById("price");

const flightData = JSON.parse(localStorage.getItem("cheapestflight")) || [];

airlineType.innerHTML = flightData.airline;
departure.innerHTML = flightData.departure_at;
flightnumber.innerHTML = flightData.flight_number;
price.innerHTML = flightData.price;



console.log(flightData.airline);