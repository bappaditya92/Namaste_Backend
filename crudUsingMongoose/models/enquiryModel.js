const mongoose = require('mongoose')


const enquiryScheema = mongoose.Schema({
    name:{
        type:String,
        require: true,
        unique:true
    },
    id:{
        type:String,
        require: true,
        unique:true
    },
    contactNo:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require: true
    },
    Query:{
        type:String,
        require: true
    }

})
let enquiryModel = mongoose.model('enquiry', enquiryScheema)
module.exports = enquiryModel;