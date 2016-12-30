$(document).ready(function () {

    getData();

});

$("#getData").on("click", function () {

    getData();

});

$(function getData() {

    var location = "http://ip-api.com/json";
    $.getJSON(location, function (json) {
        var lat = json.lat;
        var lon = json.lon;

        var latAndLong = 'lat=' + lat + '&lon=' + lon;
        var apiURL = 'http://api.openweathermap.org/data/2.5/weather?' + latAndLong;
        var apiKey = '&appid=c96aa0ca207816ff216f6906929c8891';

        $.getJSON(apiURL + apiKey, function (json) {
            $(".data").html(JSON.stringify(json));
        });
    });
});