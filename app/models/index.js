const config = require('../config/db.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false, 
    pool: {
        min: config.pool.min,
        max: config.pool.max,
        acquire: config.pool.acquire,
        idle: config.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = require('./tutorial.model')(sequelize, Sequelize);
db.user = require('./user.model')(sequelize, Sequelize);
module.exports = db;