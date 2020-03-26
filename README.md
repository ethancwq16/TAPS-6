How to run source code locally on your laptop?
  1. Download the project using the git clone or download the zip file.
  2. Open the folder TAPS-6
  3. Launch the application by running the file index.html

Architecture decisions.
  1. This web application is developed using plain HTML/JS framework.
  2. The dashboard has been created with all the user inputs are on the left and the results are displayed on the right. This is to allow for all information to be easily viewed in a single dashboard with minimal scrolling.
  3. Bootstrap is used for the web application framework to allow for a smoother toggle between web view and mobile view. This is due to Bootstrap usage of rows and columns.
  4. AJAX XMLHTTP is used to request and receive data from data.gov.sg. GET request is being used according to the instructions from the API.
  5. To obtain the area name from latitude and longitude, the Weather Forecast API was used to reverse the latitude and longitude to the corresponding area name.

Assumptions/ Interpretations made.
  1. As the latitudes and longitudes provided by both APIs have slight differences which might be due to different camera locations, I have decided to approximate the values for latitudes and longitudes to 2 decimal points for comparison.
  2. The required weather forecast information is based on the 2-hour Weather Forecast.

URL: https://github.com/ethancwq16/TAPS-6.git

Commits:
  * 27-03-2020  Updated README.md
  * 27-03-2020  Added empty README.md - Added new empty file README.md
  * 27-03-2020  Done - Successfully retrieved data from Weather API and displayed on the web application. Clean up and refinements of existing source codes. Web application is officially working.
  * 26-03-2020  Able to get location name + Show image successfully - Instead of retrieving data from hardcoded link, able to retrieve data according to user inputs and display the traffic image successfully.
  * 26-03-2020  Clean directory
  * 26-03-2020  Able to get area name from latlong and display in location form. Repeated area name
  * 26-03-2020  Successfully get latlon according to user input and display image - Able to query according to user inputs of date and time instead of using hard coded URL. Able to match location to traffic image and display image.
  * 26-03-2020  Retrieve and show image upon selecting location. Location in terms of latlon - After user select date and time, successfully show location options in terms of lat and long. Unable to match area names from weather api.
  * 26-03-2020  Javascripts to query from data.gov.sg - Included javascripts to query data from data.gov.sg (traffic) using hard coded URL.
  * 26-03-2020  Template created - html / css - created simple architecture of the web application
  * 25-03-2020  Initial commit - push html/css/js framework from local host to github


Author: Ethan Chia
