const mongoose = require("mongoose")

const MemeSchema = new mongoose.Schema({
    memeName: {
        type: String,
        required: true,
    },
    memeTags: {
        type: String,
        required: true,
    },
    emotion: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    memeImage:{
        type: String,
        required: true,
    },

}, { timestamps: true });

const Memes = mongoose.model("Meme", MemeSchema);
module.exports = Memes;