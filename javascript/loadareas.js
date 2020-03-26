function loadAreas() {
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var date_time = date + "T" + time.substring(0,2) + "%3A" +  time.substring(3,5) + "%3A00%2B08%3A00";

  // console.log(date_time);

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var traffic = JSON.parse(this.responseText);
      // console.log(traffic);

      // package the latitude and longitude from responseText
      var latlon = [];
      for (var i = 0; i < traffic.items[0].cameras.length; i++) {
        var location = traffic.items[0].cameras[i].location;
        var data = {
          latitude: (location.latitude).toFixed(2),
          longitude: (location.longitude).toFixed(2)
        }
        latlon.push(data);
        // console.log(latlon);
      }

      getName(latlon, date_time);
    }
  }

  xhttp.open("GET", "https://api.data.gov.sg/v1/transport/traffic-images?date_time=" + date_time, true);
  xhttp.send();
}

function getName(latlon, date_time) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
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

      var doc = document.getElementById("location");
      for (var j = 0; j < latlon.length; j++) {
        for (var k = 0; k < area_latlon.length; k++) {
          console.log(latlon[j].latitude);
          console.log(area_latlon[k].latitude);
          if (latlon[j].latitude == area_latlon[k].latitude && latlon[j].longitude == area_latlon[k].longitude) {
            var name = area_latlon[k].name;
            doc.innerHTML = doc.innerHTML + "<option value=" + name + ">" + name + "</option>";
          }
        }
      }

      // console.log(area_latlon);
    }
  }
  xhttp.open("GET", "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=" + date_time, true);
  xhttp.send();
}
