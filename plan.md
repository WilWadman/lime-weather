Customer Support Engineer - Take Home Assignment


Overview
For this assignment you will be tasked with creating, from scratch, a website that asks the user
to input a location, and display the current weather from an external API. The point of the
assignment is to allow you to show off your technical chops on a very small project using the
techniques and solving problems that will occur on a regular basis with this position.
Steps
At the bare minimum, your webpage should follow these steps
1. Allows the user to input a location.
2. Calls an API with the location to determine the GPS coordinates.
3. Calls an API to gather weather information for the coordinates.
4. Displays the current weather information.
While we are not expecting the website to win design awards, it should be presentable on
various screen sizes/resolutions.
Guidelines
● You can use the Free API located at OpenWeather API
● Use the Geocoding API to convert the location to GPS coordinates
● Use the Current Weather API to determine the weather
● There is no requirement (or need) to use any Javascript framework (like
React/Angular/Vue)
● Please don’t email files; a link to a GitHub repository is preferred. (Make sure it's public)


User Stories:

At the bare minimum, your webpage should follow these steps
1. Allows the user to input a location.
2. Calls an API with the location to determine the GPS coordinates.
3. Calls an API to gather weather information for the coordinates.
4. Displays the current weather information.


Pseudo code:

User types in the url
Web page displays with form
User enters valid location name inform and submits
Form displays GPS coords, temperature, precipitation

Users enters nothing into the form and submits
User sees error message stating that they need to enter valid location
Refresh form and allow resubmission
User enters something invalid into the form
User sees error message letting them know there is no location with that input
Refresh form and allow resubmission

Bonus:
List of previous searches 


API for openweather: 4361ec255b6430531d31af0eb6354330
Coordinates by location name
How to make an API call
API call
http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={4361ec255b6430531d31af0eb6354330}
#HTML structure

-Header 
  -h1 title
- main
  -section
    -h2 form
    - form to enter location
    - Label for textarea
    - text area
    - submit button
  - section
  - h1 name
  - Displays Weather information for form submission
  - Displays GPS information for form submission



 


