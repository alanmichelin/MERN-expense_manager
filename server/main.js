var express = require('express');
var mysql = require('mysql')
var app = express();
var cors = require('cors')


  var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database: "fullstacktest",
    multipleStatements:'true'
  });
  app.use(cors())

  app.use(express.json())

  app.get('/api/alloperations', function(req, res) {
    db.query("SELECT * FROM operations",(err,result)=>{
      if(err) throw err;
      res.send(result)
    })
  });

  app.get('/api/amounts', function(req, res) {

    db.query("SELECT SUM(amount) FROM operations WHERE OperationType=?;SELECT SUM(amount) FROM operations WHERE OperationType=?;",['in','out'],(err,result)=>{
      if(err) throw err;
      var results = {in:result[0][0]['SUM(amount)'],out:result[1][0]['SUM(amount)']}
      res.send(results)
    })

    
    
  });
  // SELECT SUM(amount) FROM operations WHERE OperationType='in';
  // SELECT * FROM operations WHERE OperationType='out';


  app.post('/insert',(req,res)=>{
    description = req.body.description
    amount = req.body.amount
    type = req.body.OperationType
    date = req.body.date
    console.log(req.body)
    db.query("INSERT INTO operations (description, amount,OperationType, date) VALUES (?,?,?,?);",[description,amount,type,date],(err,res)=>{
      if(err) throw err
      console.log(res)
    })
  })


  // db.end();
  app.listen(3001,()=>{
    console.log('listening at 3001')
  })
