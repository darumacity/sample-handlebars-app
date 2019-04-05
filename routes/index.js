var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'blog_user',
  password: 'password',
  database: 'blog',
})

router.get('/', (req, res, next) => {
  connection.query('select EntryId as id, Title as title, Description as description, Image as image from entries', (error, results, fields) => {
    res.render('entries/index', { entries: results });
  });
});

router.get('/entries/:id', (req, res, next) => {
  connection.query('select Title as title, Content as content from entries where EntryId = ?', [req.params.id], (error, results, fields) => {

    if (results.length === 0) {
      res.send(404);
      return;
    }

    res.render('entries/detail', results[0]);
  });
});

module.exports = router;
