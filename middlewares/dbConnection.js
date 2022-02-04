require('dotenv').config()
const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@metrics.to6ds.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
console.log(uri)
mongoose.connect(uri, (err)=>{
    if(err) console.log('Error connecting to DB', err);
    else console.log('DB connected')
})

module.exports = mongoose