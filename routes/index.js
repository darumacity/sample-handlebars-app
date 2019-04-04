var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('entries/index', {
    entries: [
      {
        id: 1,
        title: 'Coffee Pic',
        description: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consecteturad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.',
        image: 'coffee.jpg',
      },
      {
        id: 2,
        title: 'On the road again',
        description: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consecteturad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.',
        image: 'road.jpg',
      },
      {
        id: 3,
        title: 'I couldn’t take any pictures but this was an amazing thing…',
        description: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consecteturad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.',
      },
      {
        id: 4,
        title: 'Shopping',
        description: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consecteturad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.',
        image: 'shopping.jpg',
      },
    ]
  });
});

router.get('/entries/:id', function (req, res, next) {
  console.log(req.params.id);
  res.render('entries/detail', {
    title: 'On the road again',
    content: 'test',
  });
});

module.exports = router;
