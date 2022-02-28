var express = require('express');
var me = express();



me.get('/',function(req,res){
    res.send( " Me 자기 소개  ");
});

me.get('/about',function(req,res){
    res.send( "  Me 자기소개 2 Page  ");
});





module.exports = me;