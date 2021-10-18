
var express= require('express');


app = express();

app.get('/', function(req, res){
res.send('hello express js');
})

app.post('/about', function(req, res){
    res.send('This is about page');
})
/*
1. string response
2.response status code
3.JSON Response
4.Download response
5.Response redirect
6. Response header
7.set response cookies
8. delete response cookies
*/
//response status code
app.get('/contact', function(req, res){
    res.status(401).end('This is  unauthorized contact page');
})

//json response
app.get('/one', function(req, res){
  var jsonObj=[
      {
          name:"Nazmul HUda",
          dept:"CSE",
          Phone:"01767706401"

  },
      {
          name:"Nahid Hassan",
          dept:"BBA",
          Phone:"01751424961"

      },
      {
          name:"Shah Poran",
          dept:"Electronics",
          Phone:"01704207395"

      }
  ]

    res.json(jsonObj);
})

//download response
app.get('/downLoad', function(req, res){
    res.download("./Upload/nazmul.jpg")
})

//response redirect
app.get('/redirect', function(req, res){
  res.redirect("/one")
})

//response header
app.get('/two', function(req, res){
    res.append("Name","Nazmul Huda");
    res.append("Dept","CSE")
    res.append("phone", "01767706401")
    res.status(201).end('hello from express js');
})

// set response cookie
app.get('/three', function(req, res){
    res.cookie("Name","Nazmul Huda");
    res.cookie("Dept","CSE")
    res.cookie("phone", "01767706401")
    res.status(201).end('cookie set success');
})

app.get('/four', function(req, res){
    res.clearCookie("Name",);
    res.clearCookie("phone", )
    res.status(201).end('cookie clear success');
})

/* request method
get()
post()
put()
delete()
 */

/* Get request:
=> create simple get request
=> simple get request with url parameter
=> catch request header simple get method

post request:
=> request
=> request with parameter
=> request header
=> request json body
=> request multipart form data
=> request file upload
 */


app.listen(8000, function(){
    console.log('server run success');
})