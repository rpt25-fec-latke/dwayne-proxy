const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const axios = require('axios');

app.use(express.static(path.join(__dirname, '../public/')));

app.use(cors());

app.get('/metadata', async (req, res) => {
  const id = req.query.id;
  try {
    const { data } = await axios.get(`http://3.131.140.35:3005/metadata/?id=${id}`);
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get('/reviews', async (req, res) => {
  const id = req.query.id;
  try {
    const { data } = await axios.get(`http://204.236.178.72:3001/reviews/?id=${id}`);
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get('/reviews', async (req, res) => {
  const id = req.query.id;
  try {
    const { data } = await axios.get(`http://3.137.75.100:3008/game_carousel_info/?id=${id}`);
    res.json(data);
  } catch (err) {
    res.status(500).send(err);
  }
});


app.listen(3000, () => {
  console.log('Listening on port 3000.')
})