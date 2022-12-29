const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.post('/', (req, res) => {
    //console.log('router POST favorite', req.body)
    const query = `INSERT INTO "bookmarks" (bookmark_user_id, bookmark_listings_id)
                   VALUES ($1, $2)`
    pool.query(query, [req.body.user_id, req.body.listings_id])
    .then(() => {
      console.log('favorite added!');
      res.sendStatus(200);
  })
  .catch((error) => {
      console.log('Error adding favorite');
      res.sendStatus(500);
  })        
  })

router.get('/:id', (req, res) => {
    //console.log('favoriteRouter', req.params.id)
    const query = `SELECT *
    FROM "listings"
    JOIN "bookmarks"
    ON "listings"."id" = "bookmarks"."bookmark_listings_id"
    WHERE "bookmarks"."bookmark_user_id"=$1;`
    pool.query(query, [req.params.id])
    .then((result) => {
      //console.log('get favorites!', result.rows);
      res.send(result.rows);
  })
  .catch((error) => {
      console.log('Error getting favorite');
      res.sendStatus(500);
  })        
});

router.delete('/:id', (req, res) => {
  //console.log('router.delete', req.params.id)
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

router.get('/', (req, res) => {
    //console.log('getfavoritesbyuser')
    const query = `SELECT *
    FROM "listings"
    RIGHT JOIN "bookmarks"
    ON "listings"."id" = "bookmarks"."bookmark_listings_id"
    WHERE "user_id"=$1;`
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

/**
 * POST route template
 */
// router.post('/', (req, res) => {
//   // POST route code here
// });

module.exports = router;