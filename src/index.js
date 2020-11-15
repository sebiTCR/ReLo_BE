const express = require('express');
var app = express();

let port = 8080;

app.listen(8080, ()=>
{
    console.info('Server listening on Port: ${port}')
})
