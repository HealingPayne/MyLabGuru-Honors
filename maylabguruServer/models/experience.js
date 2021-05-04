const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
    authorId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        unique: true,
        min: 3,
        max: 25,
        required: true
    }
}, {
    timestamps: true
});
const Experience = mongoose.model('Experience', experienceSchema);
module.exports = Experience;