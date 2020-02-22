//Install express server
const express = require('express');
const path = require('path');
// import express, { static } from 'express';
// import { join } from 'path';

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/testyMcTesterSonForntEnd'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/testyMcTesterSonForntEnd/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);