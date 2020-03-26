function loadImage() {
  var location = document.getElementById("location").value;
  console.log(location);

  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var date_time = date + "T" + time.substring(0,2) + "%3A" +  time.substring(3,5) + "%3A00%2B08%3A00";

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var traffic = JSON.parse(this.responseText);
      for (var i = 0; i < traffic.items[0].cameras.length; i++) {
        var trafficLocation = JSON.stringify(traffic.items[0].cameras[i].location)
        if (trafficLocation == location) {
          // console.log(traffic.items[0].cameras[i].image);
          document.getElementById("traffic-img").innerHTML = '<img src="' + traffic.items[0].cameras[i].image + '">';
        }
      }
    }
  }

  xhttp.open("GET", "https://api.data.gov.sg/v1/transport/traffic-images?date_time=" + date_time, true);
  xhttp.send();
  document.getElementById("traffic-img").innerHTML = '<img src="https://images.data.gov.sg/api/traffic-images/2020/03/95b6827c-ef21-4180-9dee-c09f6d2d1263.jpg">'
}
