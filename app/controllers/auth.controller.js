const db = require('../models');
const user = db.user;
const requestHelper = require('../helpers/request.helper');

exports. register = async(req, res) => {

    try {
        return requestHelper.response(res, true);
    } catch (exception) {
        return requestHelper.response(res, false, exception.message);
    }
}