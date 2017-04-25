/**
 * Created by enxtur on 4/19/17.
 */
'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
var count = 0
app.get('/', function (req, res) {
  console.log(count, 'request received.')
  res.send('count: ' + count++);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
