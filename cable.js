const express = require('express');
const cable = express();





cable.get('/',function(req,res){
    res.send(' cable 의 페이지 ')
});


cable.get('/cable',function(req,res){
    res.send(' cable 의  두번째 페이지 ')
});





module.exports = cable;