const db = require('../db')
const Actor = require('../models/actor')
const Movie = require('../models/movie')

db.on('error', console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
    const robertHayes = await Actor.find({ name: 'Robert Hayes' })
    const julieHagerty = await Actor.find({ name: 'Julie Hagerty' })
    const tommyLeeJones = await Actor.find({ name: 'Tommy Lee Jones' })
    const javierBardem = await Actor.find({ name: "Javier Bardem" })
    const colinFarrell = await Actor.find({ name: "Colin Farrell" })
    const brendanGleeson = await Actor.find({ name: "Brendan Gleeson" })
    const timotheeChalamet = await Actor.find({ name: "Timothee Chalamet" })
    const zendaya = await Actor.find({ name: "Zendaya" })
    const valKilmer = await Actor.find({ name: "Val Kilmer" })
    const lucyGutteridge = await Actor.find({ name: "Lucy Gutteridge" })
    
    const movies = [
        {
            title: "Airplane!",
            director: "Jim Abrahams, Zucker Bros",
            runtimeInMinutes: 87,
            rating: 10,
            yearReleased: 1980,
            description: "Ex-fighter pilot must land commercial airliner after cabin crew becomes sick",
            genre: "comedy",
            poster: 'https://m.media-amazon.com/images/M/MV5BZjA3YjdhMWEtYjc2Ni00YzVlLWI0MTUtMGZmNTJjNmU0Yzk2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            // starring: {
            //     star1: robertHayes[0]._id,
            //     star2: julieHagerty[0]._id
            //     }        
        },
        {
            title: "No Country for Old Men",
            director: "Coen Brothers",
            runtimeInMinutes: 122,
            rating: 10,
            yearReleased: 2007,
            description: "After finding a briefcase of a cash from a drug deal gone wrong, Moss plays a cat and mouse game with the law and a relentless hitman",
            genre: "Neo-Western Crime Thriller",
            poster: 'https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_FMjpg_UX1000_.jpg',
            // starring: {
            //     star1: tommyLeeJones[0]._id,
            //     star2: javierBardem[0]._id,
            //     }
        },
        {
            title: "The Banshees of Inisherin",
            director: "Martin McDonagh",
            runtimeInMinutes: 114,
            rating: 10,
            yearReleased: 2022,
            description: "On a remote island off the coast of Ireland, two previously life long friends begin a bloody fued when one of them abruptly ends their friendship",
            genre: "Black Comedy",
            poster: "https://m.media-amazon.com/images/M/MV5BM2NlZDI0ZDktNTg5OS00ZjQ1LWI4MDEtN2I0MDE5NWRiNzA4XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg",
            // starring: {
            //     star1: colinFarrell[0]._id,
            //     star2: brendanGleeson[0]._id,
            //     }
        },
        {
            title: "Dune: Part Two",
            director: "Denis Villeneuve",
            runtimeInMinutes: 166,
            rating: 9,
            yearReleased: 2024,
            description: "Sequel to Dune(2021), the film follows Paul Atriedes as he fufills his destiny and takes vengeance on the Harkonnens",
            genre: "Science Fiction",
            poster: "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
            // starring: {
            //     star1: timotheeChalamet[0]._id,
            //     star2: zendaya[0]._id,
            //     }
        },
        {
            title: "Top Secret!",
            director: "Jim Abrahams, Zucker Bros",
            runtimeInMinutes: 90,
            rating: 9,
            yearReleased: 1984,
            description: "American rock star Nick Rivers becomes a leader of a resistance movement in East Germany",
            genre: "action comedy",
            poster: "https://m.media-amazon.com/images/M/MV5BM2IyNjc0YTQtNjgxZi00YWFjLWIxZjAtZjg4NDQ3MmFkYTBiXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX1000_.jpg",
            // starring: {
            //     star1: valKilmer[0]._id,
            //     star2: lucyGutteridge[0]._id,
            //     }
        },
        
    ]
    await Movie.insertMany(movies)
    console.log('Created Movies!')
}

const run = async () => {
    await main()
    db.close()
}

run()