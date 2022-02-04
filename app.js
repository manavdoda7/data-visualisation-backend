const express = require('express')
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
require('./middlewares/dbConnection')

app.get('/', (req, res)=>{
    console.log('Reached to backend.')
    res.status(200).json({message: 'Welcome to the backend!'})
})


app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/metrics', require('./routes/metricsRoutes'))
app.use('/api/upload', require('./routes/uploadRoute'))
app.use('/api/singlemetric', require('./routes/singleMetric'))
// app.use('/api/metricsdata', require('./routes/metricsDataRoutes'))

app.listen(process.env.PORT||5000, ()=>{
    console.log('App listening at port 5000');
})