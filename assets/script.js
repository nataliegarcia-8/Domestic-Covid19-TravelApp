
function enterdata() {
    const arrCity = document.getElementById("arrivalCity").value.toUpperCase();
    const depCity = document.getElementById("departingCity").value.toUpperCase();
    event.preventDefault();
    var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?destination="+arrCity+"&origin="+depCity+"&currency=USD&page=1",
    "method": "GET",
    "headers": {
        "x-access-token": "3589015d11656c52187d4a9678569191",
        "x-rapidapi-host": "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
        "x-rapidapi-key": "8144acd97dmsh3d8d17d414f0cc6p1178d1jsn267a11f3f771"
        }
    }


    $.ajax(settings).done(function (response) {
        localStorage.setItem("cheapestflight", JSON.stringify(response.data[arrCity][0]));
        
        return window.location.assign("results.html");
        
    });
};




//$("#search").on("click", function(event) {

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://covid-19-statistics.p.rapidapi.com/reports?region_province=Alabama&iso=USA&region_name=US&city_name=Autauga&date=2020-04-16&q=US%20Alabama",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
        "x-rapidapi-key": "8144acd97dmsh3d8d17d414f0cc6p1178d1jsn267a11f3f771"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});