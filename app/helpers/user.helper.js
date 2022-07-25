const authHelper = require('./auth.helper');

exports.generateProfile = (user) => {
  const data = {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    token: authHelper.getJWT(user.id),
  };

  if (user.profile_picture) {
    data.profile_picture = `/profile/${user.profile_picture}`;
  } else {
    data.profile_picture = `/profile/male-prof.jpeg`;
  }

  return data;
};
