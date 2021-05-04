const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const manualSchema = new Schema({
    shortTitle: {
        type: String,
        unique: true,
        min: 5,
        max: 15,
        required: true
    },
    longTitle: {
        type: String,
        unique: true,
        min: 10,
        max: 25,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true
    },
    sampleImage: {
        type: String,
        required: true
    },
    labFiles: {
        type: String,
        required: true
    },
    productionDate: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const Manual = mongoose.model('Manual', manualSchema);
module.exports = Manual;