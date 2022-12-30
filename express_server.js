const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/submit', (req, res) => {
  const location = req.body.location;
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4361ec255b6430531d31af0eb6354330`;

  let data1;
  // using axios to perform the first api pull and declaring the vairables for the second api pull in the promise for the second api pull
  axios.get(apiURL)
  .then((response1) => {
    data1 = response1.data;
    console.log("DATA1", data1);
    const cityName = data1.name;
    const stateCode = ''; 
    const countryCode = data1.sys.country;
    const limit = ''; 
    const apiURL2 =`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=4361ec255b6430531d31af0eb6354330`
    return axios.get(apiURL2);
  })
  // using a second promise with the data from apiURL2 pull to get coords and rendering data1 and data2 for the html
  .then((response2) =>{
    const data2 = response2.data;
    console.log("DATA2", data2)
    res.render('index', { data1: data1, data2: data2 });
    return;
  })

    .catch(error => {
      console.error(error);
      res.status(500).send('Your location was blank or does not exist, please try again! <a href="/">Return to homepage</a>');
    });
});


app.listen(8080, () => {
  console.log('App listening on port 8080');
});