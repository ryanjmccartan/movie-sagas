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

// GET genres
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

// PUT request to edit movie  
router.put('/', (req, res) => {
    const updatedMovie = req.body;
    const queryText = `UPDATE "movies" SET "title"=$1, "description"=$2 WHERE "id"=$3;`;
    const queryValues = [
        updatedMovie.title,
        updatedMovie.description,
        updatedMovie.id
    ]
    console.log(req.body);
    pool.query(queryText, queryValues)
    .then( () => {res.sendStatus(200)})
    .catch(error => {
        console.log("error with put request", error)
    })
})


module.exports = router;