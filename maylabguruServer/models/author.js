const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: {
        type: String,
        unique: true,
        min: 2,
        max: 25,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});
const Author = mongoose.model('Author', authorSchema);
module.exports = Author;