var db = require('../models');
const {validationResult} = require('express-validator');
var requestHelper = require('../helpers/request.helper');

exports.get = async(req, res) => {

    try {
        const errors = validationResult(req).formatWith(({msg}) => msg);
        
        if (!errors.isEmpty()) {
            return requestHelper.response(res, false, errors.array());
        }

        let user = await db.user.findByPk(req.params.id);
        return requestHelper.response(res, true, null, db.user.generateProfile(user));

    } catch(exception) {
        return requestHelper.response(res, false, exception.message);
    }
} 

exports.updateProfile = async(req, res) => {

    try {
        const errors = validationResult(req).formatWith(({msg}) => msg);

        if (!errors.isEmpty()) {
            return requestHelper.response(res, false, errors.array());
        }

        return requestHelper.response(res, true);

    } catch(exception) {
        return requestHelper.response(res, false, exception.message);
    }
}