const jwt = require('jsonwebtoken')
const UnauthenticatedError = require('../errors/unauthenticated')

const authenticationMiddleware = async (req, res, next) =>{
    const authHeader = req.headers.authorization
        if(!authHeader || !authHeader.startsWith('Bearer')){
         throw new UnauthenticatedError('No token provided')

            // res.status(401).json({message: 'no token provided'})
        }
    const token = authHeader.split(' ')[1]
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {id, username} = decoded
        req.user = {id, username}
        next()
   }catch(e){
       throw new UnauthenticatedError('username incorrect')
    //  res.status(401).json({e: 'username incorrect'})
   }    
        // console.log(req.headers.authorization)
}
module.exports = authenticationMiddleware