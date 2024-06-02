const mongoose=require('mongoose');

const DatabaseScheme = mongoose.Schema({
    title: { type: String, required: true},
    des: { type: String, required: true},
    price: { type: String, required: true},
    image: { type: String, required: true},
    productID: { type: String, required: true},
}, { timestamps:true,versionKey:false});

module.exports = mongoose.model('productsliders', DatabaseScheme);