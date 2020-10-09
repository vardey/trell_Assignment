const mysql = require('mysql');


const pool = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'theatre'
});


let ticketsTable ={}

// create a ticket 
ticketsTable.create =(ticket) =>{
    return new Promise((resolve,reject)=>{
        pool.query(`INSERT INTO tickets SET ?`,ticket,(err,result)=>{
            if(err){
                return reject(err)
            }
            return resolve(result)
        })
    })
}




module.exports =  ticketsTable;