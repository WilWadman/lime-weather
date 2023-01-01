const express = require("express");
const app = express();
const PORT = 8080; // default port 8080
const dotenv = require("dotenv");

const bodyParser = require("body-parser");
const axios = require("axios");

// dotenv used to hide openweather API key
dotenv.config();

//include body parser to help render API call responses
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//include express static to access CSS file
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", (req, res) => {
  const apiKey = process.env.API_KEY;
  const location = req.body.location;
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  let data1;
  // using axios to perform the first api pull and declaring the variables for the second api pull to be used in the promise for the second api pull
  axios
    .get(apiURL)
    .then((response1) => {
      data1 = response1.data;
      const cityName = data1.name;
      const stateCode = "";
      const countryCode = data1.sys.country;
      const limit = "";
      const apiURL2 = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=${apiKey}`;
      return axios.get(apiURL2);
    })
    // using a second promise with the data from apiURL2 pull to get coords and rendering data1 and data2 for the html
    .then((response2) => {
      const data2 = response2.data;
      res.render("index", { data1: data1, data2: data2 });
      return;
    })

    .catch((error) => {
      res.render("index", {
        errorMessage:
          "Your location submission was blank or does not exist in the database, please try again!",
      });
    });
});

app.listen(8080, () => {
  console.log("App listening on port 8080");
});
