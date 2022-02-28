var express = require('express');
var zyzu = express();



zyzu.get('/',function(req,res){
    res.send( " zyzu  입구 페이지 ")
});

zyzu.get('/about',function(req,res){
    res.send( " /about  zyzu  두번째 페이지 ")
});





// 모듈화가 되어서 server.js 
// 컴퍼넌트 = 모듈 
// 무언가에 목적성을 가진것이 모듈 
//노드는 시스템만 배출하면되서 모듈 형태로 .,.,.,
// 모듈 형태로 내보내야함  
module.exports = zyzu;