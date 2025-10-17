const User = require('../models/userSchema');

module.exports.getHome = (req, res) => {
  res.render('index', { title: "Dashboard", page: "dashboard" });
};

