const express = require('express');
const router  = express.Router();

const mainController = require('../Controller/mainController');

// App Routes

router.get('/', mainController.home);

router.get('/about', mainController.about);

router.get('/features', mainController.features);


module.exports = router;