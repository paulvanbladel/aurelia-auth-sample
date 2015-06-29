var config = require('./config.global');

config.env = "production";
config.port = 10000;

config.mongo = {};
config.mongo.connectionstring = 'mongodb://localhost/' + 'aureliauth-production' ;

config.TOKEN_SECRET = process.env.TOKEN_SECRET || 'A hard to guess string';
config.MONGO_URI = process.env.MONGO_URI || 'localhost';
config.FACEBOOK_SECRET = process.env.FACEBOOK_SECRET || '9d969400a46c2d5625b7c7f39493cf5a';
config.FOURSQUARE_SECRET = process.env.FOURSQUARE_SECRET || 'Foursquare Client Secret';
config.GOOGLE_SECRET = process.env.GOOGLE_SECRET || 'dySd2zaWanMrmAhMTy3MPkjS';
config.GITHUB_SECRET = process.env.GITHUB_SECRET || 'GitHub Client Secret';
config.LINKEDIN_SECRET = process.env.LINKEDIN_SECRET || 'VLLGURvigM6MBQ3C';
config.WINDOWS_LIVE_SECRET = process.env.WINDOWS_LIVE_SECRET || 'Windows Live Secret';
config.TWITTER_KEY = process.env.TWITTER_KEY || '1RiptXVVCdDyNMi6A3q9I7hSG';
config.TWITTER_SECRET = process.env.TWITTER_SECRET || 'oORmwmRr3zyJq5hQq9kfCFVQfVCi6Dq3cxJXLrZyWvf4YNGa5g';
config.TWITTER_CALLBACK = process.env.TWITTER_CALLBACK || 'http://aureliauth.opinionatedapps.com/';
config.YAHOO_SECRET = process.env.YAHOO_SECRET || 'Yahoo Client Secret';


module.exports = config;