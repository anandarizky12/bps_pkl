const userModel = require('../models/user');


const sendUserData = (user, statusCode, res)=>{
   
    const token = user.getSignedToken();
 
    res.status(statusCode).send({
            success :true, token ,
            userData : {
                         'id'       : user._id,
                         'username' : user.username,
                         'email'    : user.email,
                         'admin'    : user.admin,
                        }
           
    });
};



const register = async (req,res) => {
    
    const { username, email, password } = req.body;

        try{
            
            const checkEmail = await userModel.findOne({email});

            if(!checkEmail){
                
                const user = await userModel.create({username, email, password});

                sendUserData(user, 201, res);
            };
            res.status(400).send({message : 'Sorry, Email already exists'});

        }
        catch(err){
            res.status(500).send({message : err.message});
        };
};

const login = async (req ,res) =>{

    const { email, password } = req.body;
    
    if(!email || !password){
        return res.status(400).send({message : 'Please provide Email or Password'});
    };

    try{
        const user = await userModel.findOne({email}).select("+password");

        if(!user){
            
            res.status(401).send({message : 'The email and password you entered did not match our records. Please double-check and try again.'});

        };

        const match = await user.matchPassword(password);

        if(!match){
            res.status(401).send({message : 'Password incorrect'})
        };


        sendUserData(user,200, res);

    }catch(err){
        res.status(500).send({message : err.message});
    }

};

const getUser = async (req, res) => {
    
    const {id} = req.params;

    try{
        const user = await userModel.findById(id);

        if(!user){
            return res.status(401).send({message : 'invalid Id'})
        };

        return res.status(200).send({
            message : 'get user data Success',
            data : user
        });

    }catch(err){
        res.status(500).send({message : err.message})
    }
};

module.exports = { register, login, getUser };
