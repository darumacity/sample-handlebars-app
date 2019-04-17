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
var client = new Client({
  user: 'wxkpnabqaymczd',
  host: 'ec2-174-129-208-118.compute-1.amazonaws.com',
  database: 'dfdiaavuj0t86e',
  password: '3311b79094a7a19a47739f6a7ef4e54493099885529e084c8d1b3e9e8a5f643a',
  port: 5432,
});

client.connect();

router.get('/', (req, res, next) => {
/*   connection.query('select EntryId as id, Title as title, Description as description, Image as image from entries', (error, results, fields) => {
    res.render('entries/index', { entries: results });
  }); */
  client.query('select EntryId as id, Title as title, Description as description, Image as image from entries', (error, results, fields) => {
    res.render('entries/index', { entries: results });
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

    if (results.length === 0) {
      res.send(404);
      return;
    }

    res.render('entries/detail', results[0]);
  });
});

module.exports = router;
