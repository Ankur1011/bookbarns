import jwt from 'jsonwebtoken';
import config from './config';

const getToken =(user) => {
    //sign function has 1st parameter as user info and seccond parameter is the secret key, 
    //3rd parameter is expires in
    return jwt.sign({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin

    },config.JWT_SECRET,{
        expiresIn: '48h'
    });
}

const isAuth = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (token) {
      const onlyToken = token.slice(7, token.length);
      
      jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
        if (err) {
          return res.status(401).send({ message: 'Invalid Token' });
        }
        req.user = decode;
        next();
        return;
      });
    } else {
      return res.status(401).send({ message: 'Token is not supplied.' });
    }
  };

const isAdmin= (req, res,next)=>{
    if(req.user && req.user.isAdmin){
        return next();
    }
    return res.status(401).send({msg:'Admin Token is not valid'});
}

export {getToken,isAdmin,isAuth};