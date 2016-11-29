// REQUIRE MODULES =======================================================================
var mongoose = require( "mongoose" ),
    express  = require( "express" ),
    bp       = require( "body-parser"),
    path     = require( "path" ),
    colors   = require( "colors"),
    session  = require('express-session')
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();

// USE MODULES ===========================================================================

// Session configuration
var sessionConfig = {
   secret:'CookieMonster', // Secret name for decoding secret and such
   resave:false, // Don't resave session if no changes were made
   saveUninitialized: true, // Don't save session if there was nothing initialized
   name:'myCookie', // Sets a custom cookie name
   cookie: {
      secure: false, // This need to be true, but only on HTTPS
      httpOnly:false, // Forces cookies to only be used over http
      maxAge: 3600000
  }
};

//======================== Initialize =============================->
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json({ extended: true }));
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(session(sessionConfig));
app.use(function(req, res, next){
    console.log(req.sessions);
    next();
});

//====================== Database ==================================->
// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');


//====================== Server ==================================->
// store the function in a variable
var routes_setter = require('./server/config/routes.js');
routes_setter(app);



//===================== SERVER LISTEN ==================================->
var server = app.listen(port, function() {
    console.log("server.js is Running!! on".yellow, +port)
})

// --------------------------------------------------------------------------------------->