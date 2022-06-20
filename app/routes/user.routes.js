const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');
const validator = require('../validators/user.validator');

module.exports = app => {

    router.get(
        '/:id', 
        validator.validateGet(),
        user.get
    );

    router.put(
        '/:id', 
        validator.validateUpdate(),
        user.updateProfile
    );

    app.use('/user', router);
}