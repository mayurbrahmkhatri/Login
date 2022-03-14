var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1:27017/Mayur'
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('connected', () => {
    console.log('connected to ', mongoDB);
});
db.on('error', () => {
    console.log('error to connect', mongoDB);
});