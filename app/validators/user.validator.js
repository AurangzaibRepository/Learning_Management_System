const {check} = require('express-validator');
const db = require('../models');

exports.validateGet = () => {
    return [
        check('id').custom(async(id) => {

            let data = await db.user.findByPk(id);

            if (!data) {
                throw new Error('User not found');
            }
        })
    ];
}