const express = require ('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {ime: 'Pero', prezime: 'Perovski'});
});

app.listen(10000, err => {
    if(err) return console.log(err);
    console.log('Service started on port 10000');
});