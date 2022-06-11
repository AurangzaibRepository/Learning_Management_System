const db = require('../models');
const user = db.user;
const {validationResult} = require('express-validator');
const requestHelper = require('../helpers/request.helper');

exports.register = async(req, res) => {

    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return requestHelper.response(res, false, errors.array());
        }
        
        return requestHelper.response(res, true);
    } catch (exception) {
        return requestHelper.response(res, false, exception.message);
    }
}