const {body} = require('express-validator');

exports.validateRegister = () => {
    return [
        body('first_name', 'First name is required ').notEmpty(),
        body('last_name', 'Last name is required').notEmpty(),
        body('email', 'Invalid email').isEmail(),
        body('phone_number', 'Phone number is required').notEmpty(),
        body('role', 'Invalid role').isIn(['instructor', 'learner'])
    ];
}