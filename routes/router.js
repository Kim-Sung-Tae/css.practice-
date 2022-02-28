var express = require('express');
var router = express();



router.get('/',function(req,res){
    res.send( "h1 1  ");
});

router.get('/about',function(req,res){
    res.send( "  Company  h2  ");
});





module.exports = router;