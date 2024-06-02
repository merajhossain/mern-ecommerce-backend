const mongoose=require('mongoose');

const DatabaseScheme = mongoose.Schema({
    categoryName: { type: String, required: true, unique: true  },
    categoryImg: { type: String, required: true }
}, { timestamps:true,versionKey:false });

module.exports = mongoose.model('categories', DatabaseScheme);