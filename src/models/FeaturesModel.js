const mongoose=require('mongoose');

const DatabaseScheme = mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String},
    img: { type: String}
}, { timestamps:true,versionKey:false });

module.exports = mongoose.model('featuresModel', DatabaseScheme);