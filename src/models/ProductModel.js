const mongoose=require('mongoose');

const DatabaseScheme = mongoose.Schema({
    title: { type: String, required: true},
    shortDes: { type: String, required: true},
    price: { type: String, required: true},
    discount: { type: String},
    discountPrice: { type: String},
    image: { type: String, required: true},
    size: { type: String},
    stock: { type: String, required: true},
    remark: { type: String},
    categoryID: { type: String},
    brandID: { type: String},
    star: { type: String}
}, { timestamps:true,versionKey:false});

module.exports = mongoose.model('products', DatabaseScheme);