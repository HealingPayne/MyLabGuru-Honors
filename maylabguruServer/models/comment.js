const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    message: {
        type: String,
        min: 3,
        required: true
    },
    dateTime: {
        type: String,
    },
}, {
    timestamps: true
});
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;