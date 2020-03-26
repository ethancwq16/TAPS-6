function loadWeather() {
  console.log("here");
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var date_time = date + "T" + time.substring(0,2) + "%3A" +  time.substring(3,5) + "%3A00%2B08%3A00";

  // console.log(date_time);

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(JSON.parse(this.responseText));

      //get user input long lat
      

      //round to nearest 3dp / round up / round down

      //FOR loop to get each area
        //get long and lat from Weather for each area
          //round to nearest 3dp / round up / round down
        //compare USER long w Wlong && USER Lat w WLat
          //if same getArea






    }
  }

  xhttp.open("GET", "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=" + date_time, true);
  xhttp.send();
}
