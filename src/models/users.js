const moongose = require('mongoose');
const UserSchema = new moongose.Schema({
    name: String,
    email: String,
    password: String
});

const UserModel = moongose.model('User', UserSchema);

module.exports = UserModel;