const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');

module.exports = app => {

    router.get('/:id', user.get);

    app.use('/user', router);
}