const jwt = require('jsonwebtoken');
const config = require('../../config.json');

exports.getJWT = (data) => {

    return jwt.sign(data, config.jwt_secret_key);
}