const db = require('../models');
const user = db.user;
const requestHelper = require('../helpers/request.helper');

exports. register = async(req, res) => {

    return requestHelper.response(res, true);
}