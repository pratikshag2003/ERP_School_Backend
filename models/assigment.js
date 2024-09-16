const mongoose = require('mongoose');

const assigmentSchema  = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    dueDate:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        enum:['Assigned' , 'Submitted'] ,
        default:'Assigned'
        
    },
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    },
});

module.exports = mongoose.model('Assigment',assigmentSchema);