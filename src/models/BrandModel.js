const mongoose=require('mongoose');

const DatabaseScheme = mongoose.Schema({
    brandName: { type: String, required: true },
    brandImg: { type: String, required: true }
}, { timestamps:true,versionKey:false });

module.exports = mongoose.model('brands', DatabaseScheme);