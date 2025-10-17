const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const bcrypt = require('bcrypt');
const { db } = require('./configs/db');
const passport = require('passport');
const path = require('path');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// Serve static assets from the public directory
app.use(express.static(path.join(__dirname, 'public')));
const port = process.env.PORT || 3000;



app.set('view engine', 'ejs');

app.use((req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.SESSION_SECRET);
      res.locals.user = decoded;
    } catch (err) {
      res.locals.user = null;
    }
  } else {
    res.locals.user = null;
  }
  next();
});
app.use('/',require('./routers'));


app.listen(port,()=>{
    db;
    console.log(`Server is running on port http://localhost:${port}`);
})