const express = require('express');
const router = express.Router();

// Import controllers
const {getTest} = require('../../controllers/test');


// Import middlewares




// Api Routes
router.get('/test', getTest);

module.exports = router;