const router = require('express').Router()
const mongoose = require('mongoose')
const singleMetric = require('../models/singleMetricData')
router.get('/:id', (req, res)=>{
    console.log(`GET /api/singlemetric/${req.params.id} request`);
    singleMetric(req.params.id)
    console.log(mongoose.model(req.params.id))
    const model = mongoose.model(req.params.id)
    console.log(mongoose.model(req.params.id))
    model.find((err, result)=>{
        if(err) {
            console.log(err)
            return res.status(408).json({success: false, message: err})
        } 
        return res.status(200).json({success:true, result: result})
    })

})

module.exports = router