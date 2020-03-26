function loadWeather() {
  var location_sel = document.getElementById("location").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var date_time = date + "T" + time.substring(0,2) + "%3A" +  time.substring(3,5) + "%3A00%2B08%3A00";

  // change latlon from location_sel from 3dp to 2dp
  var location_sel_2dp = {
    latitude: JSON.parse(location_sel).latitude.toFixed(2),
    longitude: JSON.parse(location_sel).longitude.toFixed(2)
  };

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      // console.log(response);

      //convert latlon from weather to 2dp store in area_latlon
      var area_latlon = [];
      var area_metadata = JSON.parse(this.responseText).area_metadata;

      for (var i = 0; i < area_metadata.length; i++) {
          var weather_latlon = area_metadata[i].label_location;
          var data = {
            name: area_metadata[i].name,
            latitude: (weather_latlon.latitude).toFixed(2),
            longitude: (weather_latlon.longitude).toFixed(2)
          };
          area_latlon.push(data);
      }
      var name = "";

      // match location_sel_2dp latlon to latlon 2dp from weather to get weather info
      for (var j = 0; j < area_latlon.length; j++) {
        if (location_sel_2dp.latitude == area_latlon[j].latitude && location_sel_2dp.longitude == area_latlon[j].longitude) {
          // get name
          name = area_latlon[j].name;
          document.getElementById("area").innerHTML = "Area: " + name;
          document.getElementById("lat").innerHTML = "Latitude: " + JSON.parse(location_sel).latitude;
          document.getElementById("lon").innerHTML = "Longitude: " + JSON.parse(location_sel).longitude;
        }
      }
      // match name to response to get forecast
      for (var k = 0; k < response.items[0].forecasts.length; k++) {
        if (name == response.items[0].forecasts[k].area) {
          var forecast = response.items[0].forecasts[k].forecast;
          document.getElementById("weather").innerHTML = "Weather: " + forecast;
        }
      }
    }
  }

  xhttp.open("GET", "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=" + date_time, true);
  xhttp.send();
}
