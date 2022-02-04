const router = require('express').Router()
const mongoose = require('mongoose')
const metricsData = mongoose.model("metricsData")
const singleMetric = require('../models/singleMetricData')

router.post('/', async(req, res)=>{
    console.log('POST /upload request')
    var metrics = require('../assignment_data/metrics.json')
    for(i=0;i<metrics.length;i++) {
        try {
            var metricsDetails = new metricsData()
            metricsDetails._id = metrics[i]._id
            metricsDetails.measure = metrics[i].measure
            metricsDetails.dimensions = metrics[i].dimensions
            await metricsDetails.save()
        } catch(err) {
            console.log(err)
            return res.status(408).json({success:false, message:err})
        }
        var pathToMetrics = `../assignment_data/${metrics[i]._id}.json`
        var data = require(pathToMetrics)
        singleMetric(metrics[i]._id)
        for(j=0;j<data.length;j++) {
            try {
                var singleMetricModel = mongoose.model(metrics[i]._id)
                var document = new singleMetricModel
                document.original_value = data[j].original_value
                document.forcasted_value = data[j].forcasted_value
                document.min_band = data[j].min_band
                document.max_band = data[j].max_band
                document.line_status = data[j].line_status
                document.timestamp = data[j].timestamp
                await document.save()
            } catch(err) {
                console.log(err)
                return res.status(408).json({success:false, message:err})
            }
        }
    }
    res.json({success:true, message:'Success'})
})

module.exports = router