const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');



router.post('/', rejectUnauthenticated, (req, res) => {
    const query = `INSERT INTO "bookmarks" (bookmark_user_id, bookmark_listings_id)
                   VALUES ($1, $2)`
    pool.query(query, [req.user.id, req.body.listings_id])
    .then(() => {
      res.sendStatus(200);
  })
  .catch((error) => {
      console.log('Error adding favorite', error);
      res.sendStatus(500);
  })        
  })

router.get('/:id', rejectUnauthenticated, (req, res) => {
    const query = `SELECT *
                  FROM "listings"
                  JOIN "bookmarks"
                  ON "listings"."id" = "bookmarks"."bookmark_listings_id"
                  WHERE "bookmarks"."bookmark_user_id"=$1 AND "bookmarks"."bookmark_listings_id" =$2;`
    pool.query(query, [req.user.id, req.params.id])
    .then((result) => {
      res.send(result.rows);
  })
  .catch((error) => {
      console.log('Error getting favorite', error);
      res.sendStatus(500);
  })        
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const query = `DELETE FROM "bookmarks" 
                  WHERE "bookmark_user_id" = $1 AND "bookmark_listings_id" = $2;`
    pool.query(query, [req.user.id, req.params.id])
       .then(() => {
            console.log('favorite deleted!');
            res.sendStatus(200);
       })
       .catch((error) => {
            console.log('Error DELETEing', error);
            res.sendStatus(500);
       })
})

router.get('/', rejectUnauthenticated, (req, res) => {
    const query = `SELECT *
                  FROM "listings"
                  RIGHT JOIN "bookmarks"
                  ON "listings"."id" = "bookmarks"."bookmark_listings_id"
                  WHERE "bookmark_user_id"=$1;`
    pool.query(query, [req.user.id])
    .then((result) => {
      console.log('get USER favorites!', result.rows);
      res.send(result.rows);
  })
  .catch((error) => {
      console.log('Error getting Userfavorites', error);
      res.sendStatus(500);
  })        
});

module.exports = router;