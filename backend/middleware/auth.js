const jwt = require('jsonwebtoken');
const userModel = require('../models/user');

// isAuth function
const isAuth = (req, res, next) =>{
  let token;

  if(
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
  ){

      token = req.headers.authorization.split(' ')[1];
  }
  
    if(!token){
        return res.status(401).send({message : 'Access denied. No token provided'});
    };
    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    }
    catch(err){
        res.status(500).send({message : 'Invalid Token'});
    };
};

// const isAdmin = (req, res, next) =>{
//     const token = req.headers['x-access-token'];
//     if(!token){
//         return res.status(401).send({message : 'Access denied. No token provided'});
//     };
//     try{
//         const decode = jwt.verify(token, process.env.JWT_SECRET);
//         if(!decode.admin){
//             return res.status(401).send({message : 'Access denied. No admin token provided'});
//         };
//         req.user = decode;
//         next();
//     }
//     catch(err){
//         res.status(500).send({message : 'Invalid Token'});
//     };
// };

const isAdmin = async (req, res, next) => {
    let header, token;
  
    if (
      !(header = req.header("Authorization")) ||
      !(token = header.replace("Bearer ", ""))
    )
      return res.status(401).send({
        error: { message: "Access denied" },
      });
    try {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      const user = await userModel.findById(verified.id);
    
      if (user.admin !== true){
      
        return res
        .status(400)
        .send({ status: 400, message: "invalid operation, You Are Not an admin" });
      }
    
      next();
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: { message: "Invalid token" },
      });
    }
};


module.exports = { isAuth, isAdmin }