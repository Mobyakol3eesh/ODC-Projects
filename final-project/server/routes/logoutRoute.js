const router = require('express').Router();
const logoutController = require('../controllers/logoutController');
const auth = require('../middleware/auth');


router.route('/')
    .get(logoutController.logout);

module.exports = router;