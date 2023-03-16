const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());       
app.use(express.urlencoded({extended: true}));

app.get("/form", (req, res) => {
    res.sendFile(__dirname + "/form.html");
  });

app.get("/studenti", (req, res) => {
    res.sendFile(__dirname + "/studenti.html");
  });

app.post('/form', (req, res) => {
  const person = {
    name: req.body.name,
    lastname: req.body.lastname,
    prosek: req.body.prosek

  };

  res.send(`Name: ${person.name} <br> Lastname: ${person.lastname} <br> Prosek: ${person.prosek}`);

  const fileName = 'studenti.json';
  const fileData = JSON.stringify(person, null, 2);
  fs.writeFile(fileName, fileData, (err) => {
    if (err) throw err;
    console.log(`Data written to file ${fileName}`);
  });

  res.send('Data saved to file!');
});

app.listen(10000, err => {
    if(err) return console.log(err);
    console.log('Service started on port 10000');
});