const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller');

module.exports = app => {

    router.post('/register', auth.register);
    app.use('/auth', router);
}