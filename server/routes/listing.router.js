const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  
  // GET route code here
  const query = `SELECT * 
                FROM listings
                ORDER BY "listings"."id";`;
  
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all listings', err);
      res.sendStatus(500)
    })
});

router.get('/zip', rejectUnauthenticated, (req, res) => {
  
  // GET route code here
  const query = `SELECT * 
                FROM listings
                WHERE "listings"."zip"=$1
                ORDER BY "listings"."id";`;
  
  pool.query(query, [req.user.zip])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get ZIP listings', err);
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  
  const queryText = `INSERT INTO "listings" 
                    (user_id, 
                    name, 
                    item, 
                    description,
                    item_price, 
                    address, 
                    phone_number, 
                    email, 
                    latitude, 
                    longitude, 
                    image, 
                    zip)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9,$10, $11, $12)`
    pool
      .query(queryText, [
        req.user.id,
        req.body.name,
        req.body.heading,
        req.body.description, 
        req.body.price, 
        req.body.address,
        req.body.phone_number, 
        req.body.email, 
        req.body.latitude, 
        req.body.longitude, 
        req.body.image, 
        req.body.zip])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('Add listing failed: ', err);
        res.sendStatus(500);
    });
  // POST route code here
});

router.get('/user', rejectUnauthenticated, (req, res) =>{
  const query = `SELECT * 
  FROM listings
  WHERE "user_id"=$1`

  pool.query(query, [req.user.id])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all listings', err);
      res.sendStatus(500)
    })
})

router.get('/detail/:id', rejectUnauthenticated, (req, res) => {
  const query = `SELECT * 
  FROM listings
  WHERE "id"=$1`

  pool.query(query, [req.params.id])
    .then( result => {
      console.log('GET IT BY ID!!', result.rows[0])
      res.send(result.rows);
    })
    .catch(error => {
      console.log('ERROR: Get all listings', error);
      res.sendStatus(500)
    })
})

router.delete('/:id', rejectUnauthenticated, (req, res) => {
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

router.put('/', rejectUnauthenticated, (req, res) => {
  const query =`UPDATE listings
                SET item = $1,
                name = $2,
                description = $3,
                address= $4,
                zip= $5,
                phone_number = $6,
                email = $7,
                image = $8,
                latitude = $9,
                longitude = $10
                WHERE id = $11`
   pool.query(query, [
    req.body.heading,
    req.body.name,
    req.body.description,
    req.body.address,
    req.body.zip,
    req.body.phone_number,
    req.body.email,
    req.body.image,
    req.body.latitude,
    req.body.longitude,
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

router.get('/search/:id', rejectUnauthenticated, (req, res) => {
  const id = '%'+req.params.id+'%';
  const query = `SELECT * 
                FROM "listings"
                WHERE LOWER("listings"."item") Like LOWER ($1) OR LOWER("listings"."description") Like LOWER ($1) ;` 

  pool.query(query, [id])
    .then( result => {
      console.log('SEARCH!!', result.rows)
      res.send(result.rows);
    })
    .catch(error => {
      console.log('ERROR: SEARCH', error);
      res.sendStatus(500)
    })
})



module.exports = router;