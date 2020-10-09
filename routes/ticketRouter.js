const express = require('express');
const db = require('../db/ticket')
const ticketRouter = express.Router();

//create a ticket
ticketRouter.post('/',async(req,res)=>{
    try{
        let results = db.create(req.body)
        res.json(results);
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }
})

module.exports = ticketRouter