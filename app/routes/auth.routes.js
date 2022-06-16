const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller');
const validator = require('../validators/auth.validator');

module.exports = app => {

    router.post(
        '/register',
        validator.validateRegister(),
        auth.register
    );

    router.post('/login', auth.login);

    app.use('/auth', router);
}