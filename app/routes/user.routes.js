const express = require('express');
const router = express.Router();

module.exports = app => {

    router.get('/:id', (req, res) => {
        console.log(req.params.id);
    });

    app.use('/user', router);
}