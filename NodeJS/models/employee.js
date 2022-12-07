const mongoose = require('mongoose');

var Category = mongoose.model('Category', {
    id: { type: Number },
    categoryName: {type:String}
    
});



var Student = mongoose.model('Student', {
    id: {type:Number},
    gmail: { type: String },
    personalNumber: { type: Number },
    name: { type: String },
    lastName: { type: String },
    dateOfBirth: { type: String },
    category: { type: String },
    isactive: { type: Boolean },
});

module.exports = { Category };
module.exports = { Student };