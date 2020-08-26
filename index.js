const express = require('express')
const db = require('./db')
var bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(express.static('./public'))

app.post('/auth',(req,res)=>{
    console.log(req.body.password)

    //const sql = "select * from students where username = ? and password = ?"
    // db.query(sql,[req.body.username,req.body.password], function (err, result) {
    //     if (err) 
    //     throw err;
    //     else if(result.length==0)
    //     res.send("invalid password")
    //     else
    //     res.send(result);
    //   });
    
    const sql = `select * from students where username = "${req.body.username}" and password = "${req.body.password}"`
    db.query(sql, function (err, result) {
        if (err) 
        throw err;
        else if(result.length==0)
        res.send("invalid password")
        else
        res.send(result);
      });
    
})

app.listen(3000,()=>{
    console.log('server is up')
})