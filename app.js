const express = require('express')
const app = express()

const db = require('./middlewares/dbConnection')

app.get('/', (req, res)=>{
    console.log('Reached to backend.')
    res.status(200).json({message: 'Welcome to the backend!'})
})


app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/metrics', require('./routes/metricsRoutes'))
// app.use('/api/metricsdata', require('./routes/metricsDataRoutes'))

app.listen(process.env.PORT||5000, ()=>{
    console.log('App listening at port 5000');
})

// module.exports = app