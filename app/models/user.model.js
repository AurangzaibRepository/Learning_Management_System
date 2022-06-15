const config = require('../../config.json');
const authHelper = require('../helpers/auth.helper');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        first_name: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        last_name: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(80),
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        phone_number: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        },
        profile_picture: {
            type: Sequelize.STRING(300),
            allowNull: false
        },
        role: {
            type: Sequelize.ENUM('learner', 'instructor'),
            allowNull: false
        }
    });

    User.register = async(req) => {

        let response = {}
        let user = await User.create(req.body);
        let tokenData = {
            time: Date(),
            user_id: user.id
        };

        response = {
            user_id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            profile_picture: config.uploads + user.profile_picture,
            token: authHelper.getJWT(tokenData)
        };

        return response;
    }

    return User;
}