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

exports.validateUpdate = () => {
    return [
        check('first_name', 'First name required').notEmpty(),
        check('last_name', 'Last name required').notEmpty(),
        check('phone_number', 'Phone number required').notEmpty(),
        check('email').notEmpty().withMessage('Email required')
            .isEmail().withMessage('Invalid email'),
        check('id').custom(async(id) => {
            const user = await db.user.findByPk(id);

            if (!user) {
                throw new Error('User not found');
            }
        })     
    ];
}

exports.validateUser = () => {
    return [
        check('id').custom(async(id) => {
            const user = await db.user.findByPk(id);

            if (!user) {
                throw new Error('User not found');
            }
        })     
    ];
}