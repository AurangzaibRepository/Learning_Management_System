const {check} = require('express-validator');
const db = require('../models');
const user = db.user;

exports.validateGet = () => {
    return [
        check('id').custom(async(id) => {

            let data = await user.findByPk(id);

            if (!data) {
                throw new Error('User not found');
            }
        })
    ];
}