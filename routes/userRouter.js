const express = require('express');

const { getPasswordByMail } = require('../db/user');
const db = require('../db/user')
const userRouter = express.Router();

/*
//get user by its email 
userRouter.get('/:email',async(req,res)=>{
    try{

        
        let results = await db.getUserByEmail(req.params.email);
        res.json(results);
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }
})
*/

// LOGIN
userRouter.get('/:email',async(req,res)=>{
    try {

        // user has typed in password, the password field was not empty
        if(req.body.password){

            // password saved in db
            let passDB = await db.getPasswordByMail(req.params.email);

            // compaing the hash password (stored in DB) and the user typed in 
            if(!bcrypt.compareSync(req.params.password,passDB))
            {
                console.log('Invalid Credentials')
                res.status(404).send({message:'Invalid Credentials'})
                
            }
            else{
                console.log('Logged In');
                res.status(200).send({message:'User Logged In'})
            }
        }
        else{
            // user did not type password
            res.send(200).status({message:'Insert Password'})
        }
        
        
    } catch (error) {
        res.status(500).send({message:'Something went wrong'})
    }
})

//register user
userRouter.post('/register',async(req,res)=>{
    try{

        let results = await db.register(req.body);
        res.json(results);
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }
})

module.exports = userRouter