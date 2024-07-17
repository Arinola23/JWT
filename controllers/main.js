// //sending username and password to the server posting 
// //check username and password in post(login) request
// //ifusername and password exist create new JWT
// //send back to frontend
// //only the requestwith the JWT can access the dashboard
// //setup authenticatication so only the request with JWT can access the dashboard
//jwt is a way to exchange data between the frontend and backend because the security
const jwt = require('jsonwebtoken')
const BadRequestError = require('../errors/bad-request')


// //login post
const login = async (req, res) => {

      const {username,password}= req.body
          if(!username || !password) {
                // res.status(400).json({message:'Invalid username or password'})
            // return next(new BadRequestError('please provide username and password', 400))
                   throw new BadRequestError('please provide username and password')
       }
                   //just for demo, normally provided by the database
         const id = new Date().getDate()
                    //try to keep payload small, better experience for user
          const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn:'30d'})//dont add a password,it is a bad habit. In the sign method, we provide a payload, a secret and the object
          res.status(200).json({msg:'user created',token})
    // res.send('user incorrect')
    } 


const dashboard = async (req, res) => {
   // console.log(req.user)
   const luckyNumber = Math.floor(Math.random()*100)
   res.status(200).json(
       {msg:`Hello ${req.user.username}`,
       secret:`here is your authorization data, your lucky number is ${luckyNumber}`})
 }

 module.exports ={login, dashboard}

 
 //the lines of codes below has been rearraged because another folder has been created for the middleware for the dashboard and the above is just the logic to run the dashboard.

   //    // console.log(req.headers)
//    const authHeader = req.headers.authorization
//    if(!authHeader || !authHeader.startsWith('Bearer')){
//             // throw new BadRequestError('No token provided', 401)
//       //there is a bug preventing the above status code from displaying 401
//        // on postman but rather it is displaying 400 that was why I used the below
//       res.status(401).json({message: 'no token provided'})
//   }
//   //we split with a space and we are looking for the second value [1] not [0] the first value
//   //split the bearer from the token with a space and send the token with is the second index in the headers object [1]
//   const token = authHeader.split(' ')[1]
// //   console.log(token)
//   try{
//    const decoded = jwt.verify(token, process.env.JWT_SECRET)
//       // console.log(decoded)
//    const luckyNumber = Math.floor(Math.random() *100)
//    res.status(200).json({msg:`Hello ${decoded.username    }`, secret:`here is your authorization data, your lucky number is ${luckyNumber}`})
//   }catch(e){
//     // throw new BadRequestError('not authorized to access this route', 401)
//      //the below handler was hard coded because the customAPIerror handler is not functioning well, there is a bug  
//     res.status(401).json({e: 'not authorized to access this route'})
   
 


                    // //creating the dashboard content to be sent to the server
// const createUser =async(req,res) => {
//     try{
//         const {username,password} = req.body
//         if(!username || !password) {
//             throw new CustomAPIError("Invalid username or password")
//         }
//         const newUser = await User.create({username,password})
//     res.status(200).json({message: newUser})
//     }catch(err) {console.log(err)} 
    
// }

                     //       const newUser = new User({
                            //         usersname,
                            //         password
                            //         // password: hashedPassword,
                            //         // role: 'User'
                            //     })
                            //     await newUser.save() 
                            //     res.status(200).json({message: newUser})
                            //     //   console.log(username,password)
                            //     //    if(!username || !password) {
                            //     //     throw new CustomAPIError ('please provide username and password', 400)
                            //     //    }
