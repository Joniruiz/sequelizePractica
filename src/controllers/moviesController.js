const db = require('../database/models')

module.exports = {
    list:(req,res) =>{
        db.Movies.findAll()
        .then(movies =>{
            res.render("moviesList", {
                movies
            })
        })   
    },
    detail: (req,res) =>{
        db.Movies.findByPk(req.params.id)
        .then(movie =>{
            res.render('moviesDetail',{movie})
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