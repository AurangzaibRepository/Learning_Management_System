const express = require('express');
const router = express.Router();
const tutorials = require('../controllers/tutorial.controller') ;

module.exports = app => {

    router.post('/', tutorials.create);
    router.get('/', tutorials.getAll);

    app.use('/api/tutorials/', router);
}