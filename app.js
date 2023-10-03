//packages
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const app = express();
//passport
const passport = require("passport");
const flash = require("connect-flash");
const LocalStrategy = require("passport-local");
const userData = require("./modules/userData");
const User = userData.User;
////

//SETTINGS
app.set("view engine", "ejs");
//passport
app.use(
  session({ secret: "Greetings", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//////

app.use(express.static("public"));
app.use(
  "/javascript",
  express.static(path.join(__dirname, "/node_modules/html2canvas/dist"))
);
app.use(
  "/stylesheets",
  express.static(path.join(__dirname, "/node_modules/slick-carousel/slick"))
);
app.use(
  "/javascript",
  express.static(path.join(__dirname, "/node_modules/slick-carousel/slick"))
);
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(flash());

//REST
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//Routing
const router = require("./modules/router.js");
router(app);

//404
app.use((req, res) => {
  let params = {
    loggedUser: req.user,
    isAdmin: req.user ? req.user.isAdmin : false
  };
  res.status(404).render("notFound", params);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("The server is listening to port 3000");
});
