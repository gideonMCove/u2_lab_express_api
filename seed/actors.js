const db = require('../db')
const Movie = require('../models/movie')
const Actor = require('../models/actor')

db.on('error', console.error.bind(console, "MongoDB connection error"))

const main = async () => {
    const airplane = await Movie.find({title: "Airplane!"})
    const noCountryForOldMen = await Movie.find({title: "No Country for Old Men"})
    const banshees = await Movie.find({title: "The Banshees of Inisherin"})
    const dune = await Movie.find({title: "Dune: Part Two"})
    const topSecret = await Movie.find ({title: "Top Secret!"})
    const actors = [
        {
            name: 'Robert Hayes',
            age: 76,
            alive: true,
            headshot: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Robert_Hayes_Photo_Op_GalaxyCon_Richmond_201.jpg",
            movie: airplane[0]._id,
                
            
        },
        {
            name: 'Julie Hagerty',
            age: 68,
            alive: true,
            headshot: "https://upload.wikimedia.org/wikipedia/commons/0/00/Julie_Hagerty_Sidewalks_Entertainment_2019.png",
            movie: airplane[0]._id,
                
            
        },
        {
            name: 'Tommy Lee Jones',
            age: 77,
            alive: true,
            headshot: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Tommy_Lee_Jones_the_Jury_President_at_Opening_Ceremony_of_the_Tokyo_International_Film_Festival_2017_%2825332220247%29.jpg/1200px-Tommy_Lee_Jones_the_Jury_President_at_Opening_Ceremony_of_the_Tokyo_International_Film_Festival_2017_%2825332220247%29.jpg",
            movie: noCountryForOldMen[0]._id,
                
            
        },
        {
            name: 'Javier Bardem',
            age: 55,
            alive: true,
            headshot: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Premios_Goya_2018_-_Javier_Bardem_%28cropped%29.jpg",
            movie: noCountryForOldMen[0]._id,
                
            
        },
        {
            name: 'Colin Farrell',
            age: 47,
            alive: true,
            headshot: "https://m.media-amazon.com/images/M/MV5BMTg4NzM5NDk0MV5BMl5BanBnXkFtZTcwNzAzMTUxNw@@._V1_FMjpg_UX1000_.jpg",
            movie: banshees[0]._id,
                
            
        },
        {
            name: 'Brendan Gleeson',
            age: 69,
            alive: true,
            headshot: "https://static.wikia.nocookie.net/harrypotter/images/0/0c/Brendan_Gleeson_1.jpg/revision/latest?cb=20230817164620",
            movie:  banshees[0]._id,
                
            
        },
        {
            name: "Timothee Chalamet",
            age: 28,
            alive: true,
            headshot: "https://m.media-amazon.com/images/M/MV5BNThiOTM4NTAtMDczNy00YzlkLWJhNTEtZTZhNDVmYzlkZWI0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
            movie: dune[0]._id,
                
            
        },
        {
            name: "Zendaya",
            age: 27,
            alive: true,
            headshot: "https://hips.hearstapps.com/hmg-prod/images/actress-zendaya-poses-for-a-photocall-as-part-of-the-news-photo-1714172482.jpg?crop=0.66667xw:1xh;center,top&resize=640:*",
            movie: dune[0]._id,
                
            
        },
        {
            name: "Val Kilmer",
            age: 64,
            alive: true,
            headshot: "https://m.media-amazon.com/images/M/MV5BMTk3ODIzMDA5Ml5BMl5BanBnXkFtZTcwNDY0NTU4Ng@@._V1_.jpg",
            movie: topSecret[0]._id,
                
           
        },
        {
            name: "Lucy Gutteridge",
            age: 67,
            alive: true,
            headshot: "https://m.media-amazon.com/images/M/MV5BMTk3ODIzMDA5Ml5BMl5BanBnXkFtZTcwNDY0NTU4Ng@@._V1_.jpg",
            movie: topSecret[0]._id,
                
            
        }
    ]
    await Actor.insertMany(actors)
    console.log('Created Actors!')

}

const run = async () => {
    await main()
    db.close()
}

run()