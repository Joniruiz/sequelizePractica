const db = require('../database/models')

module.exports = {
    list:(req,res) =>{
        db.Genres.findAll()
        .then(genres =>{
            res.render("genresList", {
                genres
            })
        })   
    },
    detail: (req,res) =>{
        db.Genres.findByPk(req.params.id)
        .then(genre =>{
            res.render('genresDetail',{genre})
        })
    },
    new: (req,res) =>{
        db.Movies.findAll({
        order: [["release_date", "ASC"]]})
        .then(movies=>{
            res.render('newestMovies',{
                movies
            })
        })
    },
    recomended: (req,res) =>{
        db.Movies.findAll({
        order: [["release_date", "DESC"]],
        limit: 5})
        .then(movies=>{
            res.render('newestMovies',{
                movies
            })
        })
    }
} 