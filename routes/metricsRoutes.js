const router = require('express').Router()
const mongoose = require('mongoose');
const metricsData = mongoose.model("metricsData")
router.get('/', (req, res)=>{
    console.log('GET /api/metrics request');
    metricsData.find((err, result)=>{
        if(err) {
            res.status(408).json({success:false, message:'Please try again after sometime.'})
            return
        } else {
            res.status(200).json({success:true, result:result})
        }
    })
})

module.exports = router