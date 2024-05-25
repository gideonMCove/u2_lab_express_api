// Your actors model should have properties for Name and Age,  Alive or not, plus any other properties you'll want to include. Again, try to add images using either method. What datatypes would we use for our other properties?

const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Actor = new Schema (
    {
        name: {type: String, required: true},
        age: {type: Number, required: true},
        alive: {type: Boolean, required: true},
        headshot: {type: Image, required: true},
        movie: [{
            movie1: {type: Schema.Types.ObjectId, ref: 'movie_id'},
            movie2: {type: Schema.Types.ObjectId, ref: 'movie_id'},
            movie3: {type: Schema.Types.ObjectId, ref: 'movie_id'},
            movie4: {type: Schema.Types.ObjectId, ref: 'movie_id'},
            movie5: {type: Schema.Types.ObjectId, ref: 'movie_id'}
        }]
    },
    { timestamps: true},
)

module.exports = Actor