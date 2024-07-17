const express = require('express');
const app = express();
require('dotenv').config()
require('express-async-errors')
const connectDB = require('./db/connect')
// const bodyParser = require('body-parser')
connectDB()

app.use(express.json())

const mainRouter = require('./routes/main')
app.use('/api/v1', mainRouter )

//middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
app.use(notFoundMiddleware)    
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 8000

const start = async () => {
    try{
        app.listen(port, () => {
            console.log(`app listening on ${port}`);
        })
    } catch(e){
        console.log(e)
    }
}
 start()

 //jwt is a way to exchange data between two parties frontend and backend  