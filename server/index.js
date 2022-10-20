const express = require('express');
const app = express();
const mysql = require('mysql');
const cors= require('cors');

const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "helpetdb"
});
db.connect();
app.use(cors());
app.use(express.json());

app.post("/create",(req, res)=> {
    const sqlInsert = "INSERT INTO PetInfo (name, type, breed, sex, age) VALUES (?,?,?,?,?)";
    const name = req.body.name;
    const type = req.body.type;
    const breed = req.body.breed;
    const sex = req.body.sex;
    const age = req.body.age;
    console.log(name);
    db.query(sqlInsert,  [name, type, breed, sex, age], (err, result)=> {
        if (err) throw err;
        console.log(result);
        console.log("success");
    })
});

app.get("/petlist", (req, res) => {
  db.query("SELECT * FROM petinfo", (err, result) => {
    if (err) throw err;
      console.log(result);
      res.send(result);
  });
});

app.listen(3001, ()=> {
    console.log("running on 3001");
});
