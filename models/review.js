const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Review = new Schema (
    {
    score: {type: Number, required: true},
    comment: {type: String, required: true}
    },
    {timestamps: true},
)
module.exports = Review