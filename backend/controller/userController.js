const userModel = require('../models/user');


const sendUserData = (user, statusCode, res)=>{
   
    const token = user.getSignedToken();
    
    res.status(statusCode).send({
            success :true, token ,
            userData : {
                         'id'       : user._id,
                         'name'     : user.name,
                         'email'    : user.email,
                         'admin'    : user.admin,
                        }
           
    });
};



const register = async (req,res) => {
    
    const { name, email, password } = req.body;
    console.log(name, email, password);
        try{
            
            const checkEmail = await userModel.findOne({email});

            if(!checkEmail){
                
                const user = await userModel.create({name, email, password});
                console.log(user);
                sendUserData(user, 201, res);
                return;
            }else{
                return res.status(400).send({message : 'Sorry, Email already exists'});
            }

        }
        catch(err){
            res.status(500).send({message : err.message});
            console.log(err);
        };
};

const login = async (req ,res) =>{

    const { email, password } = req.body;
    if(!email || !password){
        return res.status(400).send({message : 'Please provide Email or Password'});
    };

    try{
        const user = await userModel.findOne({email}).select("+password");
        console.log(user);
        if(!user){
            
            return res.status(401).json( 'The email and password you entered did not match our records. Please double-check and try again.');

        };

        const match = await user.matchPassword(password);

        console.log(match);
        if(!match){
            return res.status(401).json('Password incorrect')
        };


        sendUserData(user,200, res);

    }catch(err){
        res.status(500).json(err.message);
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
