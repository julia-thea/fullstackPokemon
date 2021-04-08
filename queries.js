const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "IzzyPass1!", // YOUR MYSQL PASSWORD HERE
  database: "fullstackPokemon",
});

connection.connect();

const retrieveAllPokemon = (callback) => {
  const getAll = "SELECT * FROM pokemon";
  connection.query(getAll, function(err, result) {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, result);
    }
  })
}


// Create an addPokemon method that adds a pokemon to the database.

const addPokemon = (pokemonDetails, callback) => {
  const createPokemon = 'INSERT INTO pokemon SET ?';
  connection.query(createPokemon, pokemonDetails, function(err, result) {
    if (err) {
      console.log('Pokemon not created');
      callback(err);
    } else {
      callback(null, result);
    }
  })
}

module.exports = {
  retrieveAllPokemon,
  addPokemon
};
