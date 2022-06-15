const jwt = require('jsonwebtoken');
const config = require('../../config.json');

exports.getJWT = (userID) => {

    let tokenData = {
        time: Date(),
        user_id: userID
    };

    return jwt.sign(tokenData, process.env.JWT_SECRET_KEY);
}