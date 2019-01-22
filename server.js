const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const request = require('request');
var db = require('./Reviews/database/postgres_index.js');
var cors = require('cors');

app.use(cors());
app.use(morgan('dev'));
// app.use('/', express.static('./public'));
app.use(/\/\d+\//, express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

app.use('/api/item/:id', (req, res) => {
  var url = `http://localhost:8000/api/item/${req.params.id}`;
  req.pipe(request(url)).pipe(res);
});
