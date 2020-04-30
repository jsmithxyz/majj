const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");

// opts is an object literal containing options to control
// how token is extracted from request or verified
const opts = {};
// jwtFromRequest is a function that accepts a request
//  and returns webtoken as either a string or null
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// secretOrKey is a string containing secret to verify token's 
// signature
opts.secretOrKey = keys.secretOrKey;

module.exports = (passport) => {
  passport.use(
    // jwt_payload sent via login

    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};
