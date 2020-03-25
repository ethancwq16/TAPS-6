function loadLocation() {
  var date_time = "2020-02-26T01:35:49+08:00";

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var display = {};
      var lonlat = [];
      var traffic = JSON.parse(this.responseText);

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var weather = JSON.parse(this.responseText);
          var areas = weather.area_metadata;

          for (var i = 0; i < traffic.items[0].cameras.length; i++) {
            lonlat[i] = traffic.items[0].cameras[i].location;
            for (var j = 0; j < areas.length; j++) {
              var a1 = {
                "latitude": JSON.stringify(lonlat[i].latitude).substring(0,5),
                "longitude": JSON.stringify(lonlat[i].longitude).substring(0,5)
              };
              var a2 = areas[j].label_location;
              console.log(a1);
              console.log(a2);
              console.log(areas[j].name);
              if (a1 == a2) {
                var a = {
                  "area": areas[j].label_location,
                  "latidude": lonlat[i].latitude,
                  "longitude:": lonlat[i].longitude
                }
                // console.log(a);
                display.push(a);
              }
            }
          }

          document.getElementById("locations").innerHTML = JSON.stringify(lonlat);
          document.getElementById("traffic-image").innerHTML = '<img src="https://images.data.gov.sg/api/traffic-images/2020/03/95b6827c-ef21-4180-9dee-c09f6d2d1263.jpg">'
        }
      }
      xhttp.open("GET", "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=2020-02-26T01%3A35%3A49%2B08%3A00", true);
      xhttp.send();


    }
  };

  // date-time format: 2020-02-26T01:35:49+08:00
  xhttp.open("GET", "https://api.data.gov.sg/v1/transport/traffic-images?date_time=2020-02-26T01%3A35%3A49%2B08%3A00", true);
  xhttp.send();
}
