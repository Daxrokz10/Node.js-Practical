const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.isAuth = (req, res, next) => {
  if (req.cookies.token) next();
  else res.redirect('/auth/login');
};

