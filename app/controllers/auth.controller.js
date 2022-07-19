const db = require('../models');
const user = db.user;
const {validationResult} = require('express-validator');
const requestHelper = require('../helpers/request.helper');

exports.register = async (req, res) => {
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
  } catch (exception) {
    return requestHelper.response(res, false, exception.message);
  }
};

exports.login = async (req, res) => {
  try {
    const errors = validationResult(req).formatWith(({msg}) => msg);

    if (!errors.isEmpty()) {
      return requestHelper.response(res, false, errors.array({
        onlyFirstError: true,
      }));
    }

    const userProfile = await user.findOne({
      where: {email: req.body.email},
    });

    return requestHelper.response(
        res,
        true,
        null,
        user.generateProfile(userProfile),
    );
  } catch (exception) {
    return requestHelper.response(res, false, exception.message);
  }
};
