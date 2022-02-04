const router = require('express').Router()
const db = require('../middlewares/dbConnection')
router.get('/', (req, res)=>{
    console.log('GET /api/metrics request');
    res.status(200).json({welcome:'Welcome to the metrics Route.'})
})

router.post('/', (req, res)=>{
    console.log('POST /api/metrics request')
    var metrics = require('../assignment_data/metrics.json')
    console.log(metrics[0])
    res.json(metrics)
    
})

module.exports = router