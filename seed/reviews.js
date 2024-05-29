const db = require('../db')
const Review = require('../models/review')
const Movie = require('../models/movie')

db.on('error', console.error.bind(console, "MongoDB connection error"))

const main = async () => {
    const airplane = await Movie.find({title: "Airplane!"})
    const noCountryForOldMen = await Movie.find({title: "No Country for Old Men"})
    const banshees = await Movie.find({title: "The Banshees of Inisherin"})
    // const dune = await Movie.find({title: "Dune: Part Two"})
    // const topSecret = await Movie.find ({title: "Top Secret!"})

    const reviews = [
        {
            movie: airplane[0]._id,
            score: 10,
            comment: "Packed to the brim with hilarious jokes, Airplane is a comedic tour de force, and arguably the funniest movie of all time."
        },
        {
            movie: airplane[0]._id,
            score: 3,
            comment: "As a retired airline pilot who has flown over 3,000 domestic and international flights I did not find the events of the film to be humourus in any way. My funny bone could not be tickled by the passengers zany antics, the slapstick, or Lieslie Nelsons iconic deadpan delivery because of the fact that the events of the film happened to me no short of two to three hundred times in my career. Trust me when I say, at 10,000 feet, food poisoning is no laughing matter."
        },
        {
            movie: noCountryForOldMen[0]._id,
            score: 9,
            comment: "This happened to my buddy Eric"
        },
        {
            movie: noCountryForOldMen[0]._id,
            score: 10,
            comment: "You could cut the tension in this movie with a knife. Incredible acting from the leads, with some of the most thrilling action sequences put to screen."
        },
        {
            movie: banshees[0]._id,
            score: 1,
            comment: "Had the pleasure of meeting Colm Doherty at a charity once. He was suprisingly down to earth, and VERY funny. The film does not portray him in an adequate light."
        },
        {
            movie: banshees[0]._id,
            score: 10,
            comment: "A black comedy that is deeply funny, sad, and poeticially moving. Should you hold grudges? Sometimes you don't even have a choice."
        },


    ]
    await Review.insertMany(reviews)
    console.log('Created reviews!')

}

const run = async () => {
    await main()
    db.close()
}

run()