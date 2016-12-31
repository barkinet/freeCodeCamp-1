/*
 
https://openweathermap.org/current

Parameters:

[coord]
    coord.lon City geo location, longitude
    coord.lat City geo location, latitude
[weather] (more info Weather condition codes)
    weather.id Weather condition id
    weather.main Group of weather parameters (Rain, Snow, Extreme etc.)
    weather.description Weather condition within the group
    weather.icon Weather icon id
[base] Internal parameter
[main]
    main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    main.pressure Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
    main.humidity Humidity, %
    main.temp_min Minimum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    main.temp_max Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    main.sea_level Atmospheric pressure on the sea level, hPa
    main.grnd_level Atmospheric pressure on the ground level, hPa
[wind]
    wind.speed Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
    wind.deg Wind direction, degrees (meteorological)
    [clouds]
    clouds.all Cloudiness, %
[rain]
    rain.3h Rain volume for the last 3 hours
[snow]
    snow.3h Snow volume for the last 3 hours
[dt] Time of data calculation, unix, UTC
[sys]
    sys.type Internal parameter
    sys.id Internal parameter
    sys.message Internal parameter
    sys.country Country code (GB, JP etc.)
    sys.sunrise Sunrise time, unix, UTC
    sys.sunset Sunset time, unix, UTC
[id] City ID
[name] City name
[cod] Internal parameter

*/

$("#toggleTemp").on("click", function () {

    // reset vars
    tempC = null;
    tempF = null;

    // get celcius value from $("#temp") 
    const value = $('#temp').text();

    var tempC = value.replace(/[^0-9\.]+/g, "");
    var tempF = Math.round(tempC * 1.8000 + 32);
    tempF += '° F';

    // value.val(value.val() == value ? tempF : value);
    // $("#temp").html('<h1>' + value + '</h1>');


    if ($("#temp").text() == "My Title" || $("#temp").text() == tempF) {
        title = value;
    } else {
        title = tempF;
    }

    $("#temp").text(title);


});

$(document).ready(function () {

    // Using freegeoip.net as ip-api.com showed me as in Rushden ~100 miles from my actual location
    $.getJSON('https://freegeoip.net/json/?callback=?', function (loc) {

        $('#location').html('<h1>' + loc.city + ', ' + loc.region_name + ', ' + loc.country_name + '</h1>');

        var lat = loc.latitude;
        var lon = loc.longitude;

        var latAndLong = 'lat=' + lat + '&lon=' + lon;
        var weather = 'http://api.openweathermap.org/data/2.5/weather?' + latAndLong;
        var apiKey = '&appid=c96aa0ca207816ff216f6906929c8891';

        $.getJSON(weather + apiKey, function (json) {

            var myWeather = json.weather;
            var mainWeather = json.main;
            var temp = mainWeather.temp;
            // convert kelvin to fahrenheit and celsius
            var tempF = Math.round(temp * 9 / 5 - 459.67);
            var tempC = Math.round(temp - 273.15);

            $("#main").html('<h1>' + myWeather[0].main + '</h1>');
            $("#temp").html('<h1>' + tempC + '° C</h1>'); // default to Metric

        });

    });




});