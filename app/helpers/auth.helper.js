const jwt = require('jsonwebtoken');
const config = require('../../config.json');

exports.getJWT = (data) => {

    return jwt.sign(data, process.env.JWT_SECRET_KEY);
}