var db = require('../models');
const {validationResult} = require('express-validator');
var requestHelper = require('../helpers/request.helper');

exports.get = async(req, res) => {

    try {
        const errors = validationResult(req).formatWith(({msg}) => msg);
        
        if (!errors.isEmpty()) {
            return requestHelper.response(res, false, errors.array());
        }

        return requestHelper.response(res, true, null, null);
    } catch(exception) {
        return requestHelper.response(res, false, exception.message);
    }
} 