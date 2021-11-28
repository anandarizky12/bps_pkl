const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name : String,
    email : {
        type : String,
        required : true,
        unique : true,
        match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password : {
        type : String,
        required : true,
        minlength : 6,
        selected : false
    },
    admin: { type: Boolean, default: false, required: true },
    date : {
        type : Date,
        default : Date.now
    }
}, { timestamps: {} });

// if the password modified, hash the password
userSchema.pre('save', async function(next){
    
    if(!this.isModified('password')){
        next();
    };

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();

});

//read the password and compare it with the hashed password
userSchema.methods.matchPassword = async function(passwordFromClient){
    return await bcrypt.compare(passwordFromClient, this.password);
};

userSchema.methods.getSignedToken = function(){
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET );
};

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;