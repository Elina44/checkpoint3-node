const database = require("../../database");

module.exports = (req, res) => {
  // your code here !
  database
    .query("delete from album where id = ?", [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404).send("Not found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting the album");
    });
};
