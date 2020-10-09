const mysql = require('mysql');
const bcrypt = require('bcryptjs');

const pool = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'theatre'
});


let userTable ={}

// Register a user
userTable.register =(user) =>{

    return new Promise((resolve,reject)=>{
        //hashing the password
        const salt = bcrypt.genSalt(10);
        user[password] = bcrypt.hashSync(user[password],salt)

        pool.query(`INSERT INTO user SET ?`,user,(err,result)=>{
            if(err){
                return reject(err)
            }
            return resolve(result)
        })
    })
}

// get user by its email
userTable.getUserByEmail = (email) =>{
    return new Promise((resolve,reject)=>{
        pool.query(`SELECT * FROM user WHERE email=?`,[email],(err,result)=>{
            if(err){
                return reject(err)
            }
            return resolve(result)
        })
    })
}

//get password by a user's mail to verify when logging in
userTable.getPasswordByMail = (email) =>{
    return new Promise((resolve,reject)=>{
        pool.query(`SELECT * FROM user WHERE email=?`,[email],(err,result)=>{
            if(err){
                return reject(err)
            }
            return resolve(result)
        })
    })
}


module.exports =  userTable;