const mongoose=require('mongoose');

const DatabaseScheme = mongoose.Schema({
    img1: { type: String, required: true},
    img2: { type: String},
    img3: { type: String},
    img4: { type: String},
    des: { type: String},
    color: { type: String},
    size: { type: String},
    productID: { type: String}
}, { timestamps:true,versionKey:false});

module.exports = mongoose.model('productDetailsModel', DatabaseScheme);