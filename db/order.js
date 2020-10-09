const mysql = require('mysql');


const pool = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'theatre'
});


let ordersTable ={}

//create a order
ordersTable.create =(order)=>{
    return new Promise((resolve,reject)=>{
        pool.query(`INSERT INTO orders SET ?`,order,(err,result)=>{
            if(err){
                return reject(err)
            }s
            return resolve(result)
        })
    })
}

//find all orders of a user 
ordersTable.findAllOrdersByUser =(email) =>{
    return new Promise((resolve,reject)=>{
        pool.query(`SELECT * FROM orders WHERE userid=?`,[email],(err,result)=>{
            if(err){
                return reject(err)
            }
            return resolve(result)
        })
    })
}


module.exports= ordersTable;