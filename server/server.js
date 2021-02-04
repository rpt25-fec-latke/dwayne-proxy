const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

app.use(express.static(path.join(__dirname, '../public/')));

app.use(cors());

app.get('/', (req, res) => {
  res.status(200);
})

app.listen(3000, () => {
  console.log('Listening on port 3000.')
})