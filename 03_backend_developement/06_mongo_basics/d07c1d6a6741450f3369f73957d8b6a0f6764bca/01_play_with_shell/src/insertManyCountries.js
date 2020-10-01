/* global db */

// write your MongoDB shell command here
db.worldAtlas.insertMany([{
  name: "Brazil",
  capital: "Brasilia",
  continent: "South America"
},
{
  name: "Uruguay",
  capital: "Montevideo",
  continent: "South America"
},
{
  name: "South Korea",
  capital: "Seoul",
  continent: "Asia"
}])