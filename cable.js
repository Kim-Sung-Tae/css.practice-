const express = require('express');
const cable = express();





cable.get('/',function(req,res){
    res.send(' cable 의 페이지 ')
});


cable.get('/cable',function(req,res){
    res.send(' cable 의  두번째 페이지 ')
});

cable.get('/preinterview',function(req, res){
    res.send('사전면접');

});
cable.get('/contact',function(req, res){
    res.send('면접제안');

});



module.exports = cable;