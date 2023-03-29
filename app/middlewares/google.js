import passport from 'passport';
import dotenv from 'dotenv'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
dotenv.config()

const Email = ["kevinalg18@gmail.com"]

passport.use(
    "auth-google",
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:10000/auth/google"
    },
    function(accessToken, refreshToken, profile, cb) {
        return cb(null, profile);
        /*
        const response = emails.includes(profile.emails[0].value)
        if (response) {
            cb(null, profile)
        } else {
            emails.push(profile.emails[0])
        }
        */
  }
));