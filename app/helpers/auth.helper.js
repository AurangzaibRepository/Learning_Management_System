const jwt = require('jsonwebtoken');

exports.getJWT = (userID) => {
  const tokenData = {
    time: Date(),
    user_id: userID,
  };

  return jwt.sign(tokenData, process.env.JWT_SECRET_KEY);
};
