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
  console.log("BODY2",req.body.location)
  const location = req.body.location;
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4361ec255b6430531d31af0eb6354330`
  
  
 
axios.get(apiURL)
  .then(res => res.data)
  .then(data => {
    // parse the response and display the relevant information 
    console.log(data);
  })
  .catch(error => console.error(error));

}
);


app.listen(8080, () => {
  console.log('App listening on port 8080');
});