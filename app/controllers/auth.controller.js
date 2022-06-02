const db = require('../models');
const user = db.user;
const requestHelper = require('../helpers/request.helper');

exports.register = async(req, res) => {

    try {
        
        let {
            first_name,
            last_name,
            email,
            phone_number,
            role
        } = req.body;

        data = {first_name, last_name, email, phone_number, role};
        let validateResponse = requestHelper.validate(data);

        if (!validateResponse.valid) {
            return requestHelper.response(res, false, validateResponse.messages);
        }

        return requestHelper.response(res, true);
    } catch (exception) {
        return requestHelper.response(res, false, exception.message);
    }
}