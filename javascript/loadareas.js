function loadAreas() {
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  console.log(date);
  console.log(time);
  var date_time = date + "T" + time + "+8:00";
  console.log(date_time);

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

      var dom = document.getElementById("location");
      for (var j = 0; j < latlon.length; j++) {
        dom.innerHTML = dom.innerHTML + '<option value="">' + JSON.stringify(latlon[j]) + '</option>';
      }
    }
  }
  
  // date-time format: 2020-02-26T01:35:49+08:00
  xhttp.open("GET", "https://api.data.gov.sg/v1/transport/traffic-images?date_time=2020-02-26T01%3A35%3A49%2B08%3A00", true);
  //xhttp.open("GET", "https://api.data.gov.sg/v1/transport/traffic-images?date_time=" + date_time, true);
  xhttp.send();
}
