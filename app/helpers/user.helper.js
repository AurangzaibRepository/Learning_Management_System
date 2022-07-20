const authHelper = require('./auth.helper');

exports.generateProfile = (user) => {
  return {
    user_id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    profile_picture: `/profile/${user.profile_picture}`,
    token: authHelper.getJWT(user.id),
  };
};
