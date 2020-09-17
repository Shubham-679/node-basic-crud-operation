const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv/config')


// middleware
app.use(cors());
app.use(bodyparser.json());

// import routes
const  postRoute = require('./post');
app.use('/post', postRoute);

// routes

app.get('/', (req, res) => {
res.send('home');
});


mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log ('connected to db')
    );

    
app.listen(3000);
