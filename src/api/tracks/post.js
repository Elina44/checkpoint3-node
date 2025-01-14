const database = require("../../database");

module.exports = (req, res) => {
  // your code here !
  const { title, youtube_url, id_album } = req.body;
  
  database
    .query(
      "INSERT INTO track (title, youtube_url, id_album) VALUES (?, ?, ?)",
      [title, youtube_url, id_album]
    )
    .then(([result]) => {
      // wait for it
      res.location(`api/tracks/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the track");
    });
};
