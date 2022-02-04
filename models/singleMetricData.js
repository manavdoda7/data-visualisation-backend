const { Double, Int32, Timestamp } = require('mongodb')
const mongoose = require('mongoose')

function singleMetric(name) {
    var singleMetricDataSchema = new mongoose.Schema({
        original_value:{
            type:'Decimal128'
        },
        forcasted_value:{
            type:'Decimal128'
        },
        min_band:{
            type:'Decimal128'
        },
        max_band:{
            type:'Decimal128'
        },
        line_status:{
            type:'Number'
        },
        timestamp: {
            type: 'Date'
        }
    })

    mongoose.model(name, singleMetricDataSchema)
    return
}

module.exports = singleMetric