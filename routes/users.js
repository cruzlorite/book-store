import express from 'express'

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET cool user. */
router.get('/cool', (req, res) => {
  res.send('You\'re so cool!')
})

export default router;
