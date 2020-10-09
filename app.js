const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')
const movieRouter = require('./routes/movieRouter')
const ticketRouter = require('./routes/ticketRouter')
const orderRouter = require('./routes/orderRouter')

app.use(express.json())
app.use('/api/user',userRouter)
app.use('/api/movies',movieRouter)
app.use('/api/ticket',ticketRouter)
app.use('/api/orders',orderRouter)

const port = process.env.PORT || 3000

app.listen(port,(e)=>{
    if(e){
        console.log(e)
    }
    console.log('Server is up and running')
})