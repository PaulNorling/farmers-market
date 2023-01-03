const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  
  // GET route code here
  const query = `SELECT * 
  FROM listings
  WHERE "listings"."zip"=$1;`;
  
  pool.query(query, [req.user.zip])
    .then( result => {
      //console.log('GET IT!!', result.rows)
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

  const queryText = `INSERT INTO "listings" (user_id, name, item, description, item_price, address, phone_number, email, image, zip)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9,$10)`
    pool
      .query(queryText, [req.user.id, req.body.name, req.body.heading, req.body.description, req.body.price, req.body.address, req.body.phone_number, req.body.email, req.body.image, req.user.zip])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('Add listing failed: ', err);
        res.sendStatus(500);
    });
  // POST route code here
});

router.get('/user', (req, res) =>{
  //console.log('router get by user', req.user.id)
  const query = `SELECT * 
  FROM listings
  WHERE "user_id"=$1`

  pool.query(query, [req.user.id])
    .then( result => {
      //console.log('GET IT BY USER!!', result.rows)
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all listings', err);
      res.sendStatus(500)
    })
})

router.get('/detail/:id', (req, res) => {
  console.log('router GET detail', req.params.id)
  const query = `SELECT * 
  FROM listings
  WHERE "id"=$1`

  pool.query(query, [req.params.id])
    .then( result => {
      //console.log('GET IT BY ID!!', result.rows[0])
      res.send(result.rows);
    })
    .catch(error => {
      console.log('ERROR: Get all listings', error);
      res.sendStatus(500)
    })
})

router.delete('/:id', (req, res) => {
  console.log('router.delete', req.params.id)
  const query = `DELETE FROM "listings" WHERE "id" = $1;`;
  pool.query(query, [req.params.id])
    .then(() => {
        console.log('listing deleted!');
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error DELETEing', error);
        res.sendStatus(500);
    })
})

router.put('/', (req, res) => {
  console.log('router PUT', req.body)
  const query =`UPDATE listings
                SET item = $1,
                name = $2,
                description = $3,
                address= $4,
                phone_number = $5,
                email = $6,
                image = $7
                WHERE id = $8`
   pool.query(query, [
    req.body.heading,
    req.body.name,
    req.body.description,
    req.body.address,
    req.body.phone_number,
    req.body.email,
    req.body.image,
    req.body.id,
   ])
    .then(() => {
        console.log('listing updated!');
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error PUTing', error);
        res.sendStatus(500);
    })             
})



module.exports = router;