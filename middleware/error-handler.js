const customAPIerror = require('../errors/custom-error')
const {StatusCodes} = require('http-status-codes')

const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof customAPIerror) {
        return res.status(err.statusCode).json({msg: err.message})  
        // return res.status(err.statusCode || 500).json({msg: err.message})  
    }
    // Default to 500 server error if the error is not recognized
    // res.status(500).json({ message: 'Something went wrong' })
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send('Something went wrong try again later')
}

module.exports = errorHandlerMiddleware