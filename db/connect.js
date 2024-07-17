const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(process.env.DATABASE)
        console.log(`Connected to: ${conn.connection.host}`)
    } catch(e){
        console.log({message: e.message})
    }
}

module.exports = connectDB