const mongoose=require('mongoose');

const DatabaseScheme = mongoose.Schema({
    productID: { type: String, required: true},
    userID: { type: String, required: true},
    des: { type: String},
    rating: { type: String}
}, { timestamps:true,versionKey:false});

module.exports = mongoose.model('reviews', DatabaseScheme);