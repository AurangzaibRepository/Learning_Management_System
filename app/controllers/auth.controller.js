const db = require('../models');
const user = db.user;
const {validationResult} = require('express-validator');
const requestHelper = require('../helpers/request.helper');
const userHelper = require('../helpers/user.helper');

exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req).formatWith(({msg}) => msg );

    if (!errors.isEmpty()) {
      return requestHelper.response(res, false, errors.array({
        onlyFirstError: true,
      }));
    }

    req.body.profile_picture = req.file.originalname;
    const data = await user.register(req);
    return requestHelper.response(res, true, '', data);
  } catch (error) {
    return next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const errors = validationResult(req).formatWith(({msg}) => msg);

    if (!errors.isEmpty()) {
      return requestHelper.response(res, false, errors.array({
        onlyFirstError: true,
      }));
    }

    const userData = await user.findByAttribute('email', req.body.email);

    return requestHelper.response(
        res,
        true,
        null,
        userHelper.generateProfile(userData),
    );
  } catch (error) {
    return next(error);
  }
};
