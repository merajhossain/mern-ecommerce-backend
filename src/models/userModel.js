const mongoose=require('mongoose');

const DatabaseScheme = mongoose.Schema({
    email: { type: String, required: true },
    otp: { type: String, required: true }
},{timestamps:true,versionKey:false});

module.exports = mongoose.model('UserModel', DatabaseScheme);
