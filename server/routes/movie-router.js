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

module.exports = router;