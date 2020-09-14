var compression = require('compression')
const express = require('express');
const axios = require('axios');
const path = require('path');
const api = require('../config.js');


const app = express();
const PORT = 3007;

const dist = path.join(__dirname, '../client/public');

app.use(compression())
app.use(express.static(dist));
app.use(express.json());

app.get('/search', (req, res) => {
  const title = req.query.title
  axios({
    "method":"GET",
    "url":"https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup",
    "headers": {
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
      "x-rapidapi-key": api.token,
      "useQueryString":true
    },
    "params": {
      "term": title,
      "country":"us"
    }
  })
    .then((results)=>{
      res.status(200).send(results.data)
    })
    .catch((error)=>{
      res.status(500).send(error)
    })
})

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server is listening on port: ', PORT);
  }
});
