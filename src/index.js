const express = require('express');
const mongoose = require('mongoose')
const router = require('./routes/User')
const bodyParser = require('body-parser')

const port = 8080;
const app = express();

//DB Settings
const DBURL = 'mongodb://localhost:27017/ReLo'
const Settings = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
//Connect to the database and then check if everything's fine
const DB = mongoose.connect(DBURL, Settings);
DB.then(()=>
{
    console.log('DB: Connected succesfully')
}).catch((err) =>
{
    console.log('DB: There was a problem while connecting to the database: ' + err)
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/API', router)



app.listen(port, ()=>
{
    console.info('Server listening on Port: ' + port)
})