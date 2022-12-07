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


app.get("/filter", (req, res) => {
  let type = req.query.type;
  let sex = req.query.sex;
  let age = req.query.age;
  const sqlFilter = "SELECT * FROM petinfo WHERE type = ? AND sex = ? AND age = ?"
  db.query(sqlFilter,[type, sex, age], (err, result)=> {
      if (err) throw err;
      res.send(result);
  })
});

app.get("/petlist", (req, res) => {
  db.query("SELECT * FROM petinfo ", (err, result) => {
    if (err) throw err;
      console.log(result);
      res.send(result);
  });
});


app.delete("/delete/:petId", (req, res) =>{
  const petId = req.params.petId;
  const sqlDelete = "DELETE FROM PetInfo WHERE id = ?";
  db.query(sqlDelete, petId,(err, result) => {
    if (err) throw err;
      console.log(result);
      res.send(result);
  }) ;
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const type = req.body.type;
  const breed = req.body.breed;
  const sex = req.body.sex;
  const age = req.body.age;
  const sqlUpdate =  " UPDATE PetInfo SET name = ?,type = ?,breed = ?,sex = ?,age = ? WHERE id = ?"
  console.log(name);
  db.query(sqlUpdate,[name, type, breed, sex, age, id], (err, result)=> {
      if (err) throw err;
      console.log(result);
      console.log("success");
  })
})


app.listen(3001, ()=> {
    console.log("running on 3001");
});
