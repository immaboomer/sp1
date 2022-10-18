var express = require('express'); // Web Framework
var cors = require('cors')
var app = express();
var mysql = require('mysql2');
var bodyParser = require('body-parser')
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(cors())

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "papp" // This is my database used for this application
});


var server = app.listen(3001, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("app listening at http://%s:%s", host, port)
});


con.connect(function(error){
    if(!!error)console.log(error);
    else console.log('Connected');
})

app.get('/getalldrives', function (req, res) {
    con.query("select * from drive;", function(error, rows, fields) {
        if(!!error) console.log('error');
        else{
            console.log(rows)
            res.send(rows);
        }
    });
})
app.get('/getgrieve', function (req, res) {
    con.query("select * from grievances;", function(error, rows, fields) {
        if(!!error) console.log('error');
        else{
            console.log(rows)
            res.send(rows);
        }
    });
})


app.post('/addChoice', function (req, res) {
    console.log(req.body);
    con.query("insert into choices values('"+ req.body.email+"',"+ req.body.drive+",'"+ req.body.role+"',"+ req.body.academicYear+",1)", function(error, rows, fields) {
        if(!!error) console.log(error);
        else{
            console.log(rows)
            res.send(JSON.stringify(rows));
        }
    });
    // console.log()
})

app.get('/getallannouncements', function (req, res) {
    //  console.log(req.params.id);
    con.query("SELECT * FROM practice", function(error, rows, fields) {
        if(!!error) console.log('error');
        else{
            res.send(JSON.stringify(rows))
        }
    });
})
app.get('/getprofile', function (req, res) {
    //  console.log(req.params.id);
    con.query("SELECT * FROM student where email_id = '21mx117@psgtech.ac.in';", function(error, rows, fields) {
        if(!!error) console.log(error);
        else{
            res.send(JSON.stringify(rows))
        }
    });
})

