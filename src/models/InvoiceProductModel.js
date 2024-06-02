const mongoose=require('mongoose');

const DatabaseScheme = mongoose.Schema({
    userID: { type: String, required: true},
    productID: { type: String, required: true},
    invoiceID: { type: String, required: true},
    qty: { type: String, required: true},
    price: { type: String, required: true},
    color: { type: String, required: true},
    size: { type: String, required: true}
}, { timestamps:true,versionKey:false});

module.exports = mongoose.model('invoiceProductModel', DatabaseScheme);