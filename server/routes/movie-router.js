const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');

// GET movies from database
router.get('/', (req, res) => {
    let movieObject = req.body;
    console.log('Getting movies', movieObject);
    let queryText = `SELECT * FROM "movies";`;
    pool.query(queryText) 
    .then( (result) => {
        res.send(result.rows);
    }).catch( error => {
        console.log('Error getting movies', error);
        res.sendStatus(500);
    })
});

// GET genre
router.get('/:id', (req, res) => {
    const queryText = `SELECT * FROM "genres"
    JOIN "movies_genres" ON "movies_genres".genres_id = "genres".id
    JOIN "movies" ON "movies".id = "movies_genres".movie_id
    WHERE "movies".id = $1;`;
    console.log(req.params.id);
    pool.query(queryText, [req.params.id] )
      .then((result) => { res.send(result.rows) })
      .catch((err) => {
        console.log('Error completing SELECT movie query', err);
        res.sendStatus(500);
      });
  });


module.exports = router;