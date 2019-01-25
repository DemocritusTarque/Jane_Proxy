require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const request = require('request');
var cors = require('cors');

app.use(cors());
app.use(morgan('dev'));
// app.use('/', express.static('./public'));
app.use(/\/\d+\//, express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`server running on ${port}`);
});

app.use('/api/item/:id', (req, res) => {
  var url = `http://54.241.142.228:3003/api/item/${req.params.id}`;
  req.pipe(request(url)).pipe(res);
});
