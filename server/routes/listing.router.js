const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  
  // GET route code here
  const query = `SELECT * 
  FROM listings`;
  
  pool.query(query)
    .then( result => {
      console.log('GET IT!!', result.rows)
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all listings', err);
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  console.log('POST!', req.user)

  const queryText = `INSERT INTO "listings" (user_id, name, item, description, item_price, address, phone_number, email, image)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`
    pool
      .query(queryText, [req.user.id, req.user.username, req.body.heading, req.body.description, req.body.price, req.body.address, req.body.phone_number, req.body.email, req.body.image])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('Add listing failed: ', err);
        res.sendStatus(500);
    });
  // POST route code here
});

router.get('/user', (req, res) =>{
  console.log('router get by user', req.user.id)
  const query = `SELECT * 
  FROM listings
  WHERE "user_id"=$1`

  pool.query(query, [req.user.id])
    .then( result => {
      console.log('GET IT BY USER!!', result.rows)
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all listings', err);
      res.sendStatus(500)
    })
})

module.exports = router;