
var express= require('express');
var bodyParser= require('body-parser')
var multer= require('multer')
//var multerInstance= multer();
var app = express();

app.use(bodyParser.json());
//app.use(multerInstance.array());
app.use(express.static('public'))


/*
Use of middleware:
1. User agent check, valid request check
2. authentication, authorization, verification
3. request limiting and others security measures

middleware placing:
1. application level: single class can maintain all
2. route level
*/

/*
 app.use(function (req,res,next){
     console.log("I am application level middleware");
     next();
 })
*/

//route level middleware
app.use('/about',function (req,res,next){
    console.log("I am route level middleware");
    next();
})


var storage= multer.diskStorage({
    destination: function (req, file, callBack){
        callBack(null, './Uploads');
    },
    filename: function (req,file,callBack){
        callBack(null, file.originalname);
    }
})

var upload= multer({storage:storage}).single('myFile');

app.post('/uploadFile', function(req,res){
    upload(req,res, function (error){
        if(error){
            res.send("file upload fail")
        }
        else{
            res.send("file upload success")
        }
    })
})








app.get('/', function(req, res){
var firstName= req.query.firstName;
var lastName=req.query.lastName;
res.send(firstName+' '+ lastName);
})


app.get('/about', function(req, res){
    var firstName= req.header('firstName');
    var lastName=req.header('lastName');
    res.send(firstName+' '+ lastName);
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
//Json data from body using body-parser from post request

app.post('/register', function(req, res){
    var jsonData= req.body;
   // var jsonString= JSON.stringify(jsonData);
    //res.send(jsonString)
   let name= jsonData.name;
   let city=jsonData['city'];
   res.send(name+"  "+ city)
})


// post multi part form data using multer
app.post('/enroll', function(req, res){
    var jsonData= req.body;
    // var jsonString= JSON.stringify(jsonData);
    //res.send(jsonString)
    let name= jsonData.name;
    let city=jsonData['city'];
    let country= jsonData.country;
    res.send(name+"  "+ city+" "+ country)
    // res.send(JSON.stringify(jsonData));
})



app.listen(8000, function(){
    console.log('server run success');
})