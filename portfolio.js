var express = require('express');
var aboutport = express(); 



aboutport.get('/',function(req,res){
    res.send(" about port 1 page ")
});

aboutport.get('/about',function(req,res){
    res.send(" about port 2 page ")
});








module.exports = aboutport;