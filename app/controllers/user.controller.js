var db = require('../models');
var requestHelper = require('../helpers/request.helper');

exports.get = async(req, res) => {

    try {

        return requestHelper.response(res, true, null, null);
    } catch(exception) {
        return requestHelper.response(res, false, exception.message);
    }
}