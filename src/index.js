const express = require('express');
var app = express();

let port = 8080;

app.listen(port, ()=>
{
    console.info('Server listening on Port: ' + port)
})
