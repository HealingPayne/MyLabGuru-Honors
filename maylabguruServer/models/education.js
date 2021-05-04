const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const educationSchema = new Schema({
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
const Education = mongoose.model('Education', educationSchema);
module.exports = Education;