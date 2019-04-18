var express = require('express');
var router = express.Router();

/* var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'blog_user',
  password: 'password',
  database: 'blog',
}); */

var { Client } = require('pg');
var client = new Client(process.env.DATABASE_URL);
console.log(process.env.DATABASE_URL);

client.connect();

router.get('/', (req, res, next) => {
  /*   connection.query('select EntryId as id, Title as title, Description as description, Image as image from entries', (error, results, fields) => {
      res.render('entries/index', { entries: results });
    }); */
  client.query('select EntryId as id, Title as title, Description as description, Image as image from entries', (error, results, fields) => {
    console.log(results);
    res.render('entries/index', { entries: results.rows });
  });
});

router.get('/entries/:id', (req, res, next) => {
  /*   connection.query('select Title as title, Content as content from entries where EntryId = ?', [req.params.id], (error, results, fields) => {
  
      if (results.length === 0) {
        res.send(404);
        return;
      }
  
      res.render('entries/detail', results[0]);
    }); */
  client.query('select Title as title, Content as content from entries where EntryId = ?', [req.params.id], (error, results, fields) => {

    console.log(results);

    if (results.rows.length === 0) {
      res.send(404);
      return;
    }

    res.render('entries/detail', results.rows[0]);
  });
});

module.exports = router;
