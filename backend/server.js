const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");

// mongodb connection
require("./database/connection")();






// cors policy
app.use(cors({
  origin:"http://localhost:3000",
  methods:"GET,POST,PUT,DELETE",
  credentials:true
}));


// Middleware
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
// passport
app.use(passport.initialize());
app.use(passport.session());

// Import Passport configuration
require('./config/passport')(passport);

// Routes
app.use('/auth', require('./routes/auth'));

// default route
app.get("/", (req, res) => {
  return res.status(200).json("Hello");
});

// start the server
app.listen(process.env.PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});
