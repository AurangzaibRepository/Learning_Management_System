const authHelper = require('../helpers/auth.helper');
const bcrypt = require('bcrypt');

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    first_name: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(80),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false,
      /* set(value) {
            const salt = bcrypt.genSaltSync(10);
            this.setDataValue('password', bcrypt.hashSync(value, salt));
        }*/
    },
    phone_number: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'active',
    },
    profile_picture: {
      type: Sequelize.STRING(300),
      allowNull: false,
    },
    role: {
      type: Sequelize.ENUM('learner', 'instructor'),
      allowNull: false,
    },
  });

  User.beforeCreate(async (user, options) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  });

  User.register = async (req) => {
    const user = await User.create(req.body);

    return User.generateProfile(user);
  };

  User.generateProfile = (user) => {
    return {
      user_id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      profile_picture: `/profile/${user.profile_picture}`,
      token: authHelper.getJWT(user.id),
    };
  };

  return User;
};
