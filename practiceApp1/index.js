
var express= require('express');


app = express();

app.get('/', function(req, res){
res.send('hello express js');
})

app.listen(8000, function(){
    console.log('server run success');
})