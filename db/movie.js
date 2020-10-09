const mysql = require('mysql');


const pool = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'theatre'
});


let moviesTable ={}


moviesTable.create =(movie) =>{
    return new Promise((resolve,reject)=>{
        pool.query(`INSERT INTO movies SET ?`,movie,(err,result)=>{
            if(err){
                return reject(err)
            }s
            return resolve(result)
        })
    })
}


moviesTable.getALL =() =>{

    return new Promise((resolve,reject)=>{
        pool.query(`Select * FROM movies`,(err,result)=>{
            if(err){
                return reject(err)
            }
            return resolve(result)
        })
    })
}

moviesTable.getByID = (title) =>{
    return new Promise((resolve,reject)=>{
        pool.query(`SELECT * FROM movies WHERE title=?`,[title],(err,result)=>{
            if(err){
                return reject(err)
            }
            if(result.length!=0)
            return resolve(result[0])
            else
            console.log('Movie does not exists');
        })
    })
}

 module.exports =  moviesTable;