var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    id:String,
    first_name: String,
    last_name:String,
    user_name:String,
    email:String,
    address1:String,
    address2:String,
    zipcode:String,
    phone:String,
    mobile:String,
    created_date:{type:Date, default: Date.now}
});

module.exports = mongoose.model('User', userSchema);