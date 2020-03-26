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
        latlon.push(traffic.items[0].cameras[i].location);
        // console.log(latlon);
      }

      // display areas for selection
      var doc = document.getElementById("location");
      for (var j = 0; j < latlon.length; j++) {
        var option = JSON.stringify(latlon[j]);
        doc.innerHTML = doc.innerHTML + "<option value=" + option + ">" + option + "</option>";
      }
    }
  }

  xhttp.open("GET", "https://api.data.gov.sg/v1/transport/traffic-images?date_time=" + date_time, true);
  xhttp.send();
}
