const mongoose=require('mongoose');

const DatabaseScheme = mongoose.Schema({
    userID: { type: String, required: true},
    payable: { type: String, required: true},
    cus_details: { type: String, required: true},
    ship_details: { type: String, required: true},
    tran_id: { type: String, required: true},
    val_id: { type: String, required: true},
    payment_status: { type: String, required: true},
    delivery_status: { type: String, required: true},
    delivery_status: { type: String, required: true},
    total: { type: String, required: true},
    vat: { type: String},
}, { timestamps:true,versionKey:false});

module.exports = mongoose.model('invoiceModel', DatabaseScheme);