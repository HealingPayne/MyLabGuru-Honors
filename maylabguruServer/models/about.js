const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
    company: {
        type: String,
        min:3,
        max:25,
        required: true
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String,
        min: 2,
        max: 2,
    },
    zip: {
        type: String,
    },
    country: {
        type: String,
    },
    phone: {
        type: String,
        max: 15,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const About = mongoose.model('About', aboutSchema);
module.exports = About;