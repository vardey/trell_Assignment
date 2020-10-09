const mysql = require('mysql');

//created connection pool
const pool = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'theatre'
});

//empty object to create functions for the endpoints
let moviesTable ={}

// inserting movie
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

// get all the movies
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

// get movie by its title
moviesTable.getByTitle = (title) =>{
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