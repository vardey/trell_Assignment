const express = require('express');
const db = require('../db/movie')
const movieRouter = express.Router();

// get movie by its title
movieRouter.get('/:title',async(req,res)=>{
    try{
        let results = await db.getByTitle(req.params.title);
        res.json(results);
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }
})

//get all movies
movieRouter.get('/',async(req,res)=>{
    try {
        let results = await db.getALL();
        res.json(results);
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

//insert a movie 
movieRouter.post('/create',async(req,res)=>{
    try {
        let results = db.create(req.body)
        res.json(results)
    } catch (error) {
        console.log(e)
        res.status(500).send(e)
    }
})

module.exports = movieRouter
