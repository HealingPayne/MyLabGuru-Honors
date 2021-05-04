const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    authorId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        min: 3,
        max:25,
        required: true
    }
}, {
    timestamps: true
});
const Client = mongoose.model('Client', clientSchema);
module.exports = Client;