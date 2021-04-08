const express = require("express");
const app = express();
const path = require("path");
const PORT = 3002;
const queries = require('./queries');
const cors = require('cors');

// Tells express to serve our compiled code from the dist folder.
app.use(express.static(path.join(__dirname, "./dist")));

// Adds middleware that parses JSON
app.use(express.json());

app.use(cors());

app.get("/api/pokemon", (req, res) => {
  console.log('get/api/pokemon endpoint hit!');
  queries.retrieveAllPokemon((err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});

// Write a POST route for the "/api/pokemon" endpoint.
app.post('/api/pokemon', (req, res) => {
  var data = req.body;
  console.log("REQUEST: ", data);
  queries.addPokemon(data, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully added pokemon');
    }
  })
})

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
