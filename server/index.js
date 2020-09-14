var compression = require('compression')
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3007;

const dist = path.join(__dirname, '../client/public');

app.use(compression())
app.use(express.static(dist));
app.use(express.json());

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server is listening on port: ', PORT);
  }
});
