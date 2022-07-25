const {body} = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../models');
const user = db.user;

exports.validateRegister = () => {
  return [
    body('first_name', 'First name required ').notEmpty(),
    body('last_name', 'Last name required').notEmpty(),
    body('email').isEmail().withMessage('Invalid Email')
        .custom(async (email) => {
          const recordCount = await user.count({
            where: {email: email},
          });

          if (recordCount > 0) {
            throw new Error('Email already exists');
          }
        }),
    body('password', 'Password required').notEmpty(),
    body('phone_number').notEmpty().withMessage('Phone number required')
        .custom(async (phoneNumber) => {
          const recordCount = await user.count({
            where: {phone_number: phoneNumber},
          });

          if (recordCount > 0) {
            throw new Error('Phone number exists');
          }
        }),
    body('role', 'Invalid role').isIn(['instructor', 'learner']),
  ];
};

exports.validateLogin = () => {
  return [
    body('email').notEmpty().withMessage('Email required')
        .isEmail().withMessage('Invalid email')
        .custom(async (email, {req}) => {
          const userProfile = await user.findOne({
            where: {email: email},
          });

          if (!userProfile) {
            throw new Error('User does not exist');
          }

          const validPassword = await bcrypt.compare(
              req.body.password,
              userProfile.password,
          );

          if (!validPassword) {
            throw new Error('User does not exist');
          }
        }),
    body('password', 'Password required').notEmpty(),
  ];
};
