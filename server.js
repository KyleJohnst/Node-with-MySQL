const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;



const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password1",
  port: '3306'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(port, () => {            
    //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});