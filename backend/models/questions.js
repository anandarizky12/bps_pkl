const mongoose = require('mongoose');

//create a  options schema  for mongoose    
const options = mongoose.Schema({

    option : String,
    votes : {
        type : Number,
        default : 0
    }
});


const questionSchema = mongoose.Schema({
    title : String,
    question : String,
    options : [options],
    _creator : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    date : {
        type : Date,
        default : Date.now
    }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;