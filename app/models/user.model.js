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

    return User;
}