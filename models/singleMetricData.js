const { Double, Int32, Timestamp } = require('mongodb')
const mongoose = require('mongoose')

var singleMetricDataSchema = new mongoose.Schema({
    original_value:{
        type:Double
    },
    forecasted_value:{
        type:Double
    },
    min_band:{
        type:Double
    },
    max_band:{
        type:Double
    },
    line_status:{
        type:Int32
    },
    timestamp: {
        type: Timestamp
    }
})