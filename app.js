const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("underscore");
const Score = require("./score_model");

const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "CookieClicker";
const APP_PORT = 3001;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/panteon', (req, res) => {
  Score.find()
  .lean()
    .then(scores => res.send(_.map(scores, s => _.omit(s, '_id', '__v'))))
    .catch(err => {
      console.log(err);
    });
  });

  app.post('/save-score', (req, res) => {
    const { score } = req.body;
    new Score(score)
      .save()
      .then(() => res.sendStatus(200))
      .catch((err) =>{ res.status(500).send(err)
      console.log(err)
      })
    });

mongoose
  .connect(`${DB_URL}/${DB_NAME}`)
  .then(result => {
    app.listen(APP_PORT);
  })
  .catch(err => {
    console.log(err);
  });