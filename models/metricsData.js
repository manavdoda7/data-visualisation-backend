const mongoose = require('mongoose')

var metricsDataSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        unique: true
    },
    measure: {
        type: String,
        required: true
    },
    dimensions: {
        type: Array,
        required: true
    }
})

mongoose.model("metricsData", metricsDataSchema)