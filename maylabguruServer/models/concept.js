const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conceptSchema = new Schema({
    manualId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        unique: true,
        min: 10,
        max: 25,
        required: true
    }
}, {
    timestamps: true
});
const Concept = mongoose.model('Concept', conceptSchema);
module.exports = Concept;