const mongoose = require('mongoose');
mongoose.Promise = global.Promise ;
mongoose.connect('mongodb://localhost/testDB' , {useMongoClient: true});

const UserSchema = mongoose.Schema({
      firstName: String ,
      lastName: String ,
      email: String
});

const UserModel = mongoose.model('user', UserSchema);

// const user = new UserModel({
//     firstName:'Bill',
//     lastName: 'Smith',
//     email:"smith@mail.ru"
// });
//
// user.save();

module.exports = { UserModel };
