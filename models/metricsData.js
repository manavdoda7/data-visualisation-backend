const mongoose = require('mongoose')

var metricsDataSchema = new mongoose.Schema({
    id: {
        type: String,
        required: "Required"
    },
    measure: {
        type: String,
        required: "Required"
    },
    dimensions: {
        type: Array,
        required: "Required"
    }
})

mongoose.model("metricsData", metricsDataSchema)