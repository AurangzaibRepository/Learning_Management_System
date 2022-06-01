const db = require('../models');
var Tutorial = db.tutorials;
var requestHelper = require('../helpers/request.helper');

exports.getAll = (req, res) => {

    Tutorial.findAll()
        .then(data => {
            return requestHelper.response(res, true, null, data);
        })
        .catch(error => {
            return requestHelper.response(res, false, error.message);
        });
}

exports.create = (req, res) => {

    const {title, description} = req.body;

    if (!title) {
        return requestHelper.response(res, false, 'Title is required');
    }

    if (!description) {
        return requestHelper.response(res, false, 'Description is required');
    }

    return requestHelper.response(res, true, null, null);
}