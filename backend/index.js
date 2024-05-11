//create a basic server that responds to the client side, hello from blog app when you make a request to your server

require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
//import post routes
const postRoutes = require('./routes/postRoute')

const app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello from blog app');
});

//use post routes
app.use('/api', postRoutes)


mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Connected to DB & Listening on port 7000')
    })
}).catch((err) => {
    console.log(err)
})
