const database = require("../../database");

module.exports = (req, res) => {
  // your code here !
  database
  .query("select a.title, a.genre, t.title from album a inner join track t on a.id = t.id_album")
  .then(([album]) => {
    res.json(album);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send("Error retrieving data from database");
  }); 
};
