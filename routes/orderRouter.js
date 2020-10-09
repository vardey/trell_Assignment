const express = require('express');

const db = require('../db/order');
const orderRouter = express.Router();


//create a order
orderRouter.post('/create',async(req,res)=>{
    try {
        let results = db.create(req.body)
        res.json(results)
    } catch (error) {
        console.log(e)
        res.status(500).send(e)
    }
})

//find all orders of a user 
orderRouter.get('/:email',async(req,res)=>{
    try{
        let results = await db.findAllOrdersByUser(req.params.email);
        res.json(results);
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }
})

module.exports = orderRouter

