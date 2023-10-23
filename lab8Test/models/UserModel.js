const mongoose = require('mongoose');
const UserSchema = mongoose.Schema(
   {
      username: {
         type: String,
         required: true,
         unique: true
      },
      password: {
         type: String,
         required: true
      }
   }
)
const UserModel = mongoose.model('User', UserSchema, 'User');
module.exports = UserModel;