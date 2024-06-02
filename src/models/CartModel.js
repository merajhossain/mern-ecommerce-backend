const mongoose=require('mongoose');

const DatabaseScheme = mongoose.Schema({
    productID: { type: String, required: true, unique: true  },
    userID: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: String, required: true },
    qty: { type: String, required: true },
    size: { type: String },
}, { timestamps:true,versionKey:false });

module.exports = mongoose.model('carts', DatabaseScheme);