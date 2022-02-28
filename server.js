var express = require('express');
const cable = require('./cable.js');
var app = express();
var router_1 = require('./routes/router');

var me1 = require('./me.js');
var me2 = require('./portfolio.js');
const zyzu = require('./zyzu.js');







// 요청 req먼저 , 후  반응 res

app.get('/',function(req,res){
    res.send( " 내용 ");
});

app.use('/aboutrouter',router_1);
app.use('/aboutme',me1);
app.use('/aboutme2',me2);
app.use('/zyzu',zyzu)
app.use('/cable',cable)


app.listen(5000,function(){
    console.log('port number 5000 ')
});







