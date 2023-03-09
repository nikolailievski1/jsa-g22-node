// let studenti = [
//     {ime: 'Pero', prezime: 'Petrovski', prosek: 8.3},
//     {ime: 'Ivan', prezime: 'Ivanovski', prosek: 6.1},
//     {ime: 'Janko', prezime: 'Jankovski', prosek: 9.7}
// ];

// for (let i = 0; i < studenti.length; i++) {
//     console.log(studenti[i].prezime);
// }

// let bukvi = 'abcde';

// for (let y = 0; y < bukvi.length; y++) {
//     console.log(bukvi[y]);
// }

// let niza = ['new york', 'los angeles', 'paris', 'berlin', 'barcelona']

// for(let g = 0; g < niza.length; g++) {
//     console.log(niza[g]);
// }

// for (let s in studenti) {
//     console.log(s);
//     console.log(studenti[s]['ime'],studenti[s]['prezime'],studenti[s]['prosek']);
// }

// for (let o of studenti) {
//     console.log(o);
// }


const express = require('express');

const app = express();

// app.use(express.urlencoded())

app.get('/zdravo', (req, res) => {
    res.send('Zdravo svetu');
});

app.get('/zdravo/:ime', (req, res) => {
    res.send(req.params.ime);
});

app.get('/calculator/:op/:a/:b', (req, res) => {
    switch(req.params.op) {
        case 'sobiranje':
            res.send(`${Number(req.params.a) + Number(req.params.b)}`);
        case 'odzemanje':
            res.send(`${Number(req.params.a) - Number(req.params.b)}`);
        case 'mnozenje':
            res.send(`${Number(req.params.a) * Number(req.params.b)}`);
        case 'delenje':
            res.send(`${Number(req.params.a) / Number(req.params.b)}`);
        default:
            return res.send(`nepoznat operator!`);
    }
});

app.post('/calculator', (req, res) => {
    res.send(req.body.operacija);
})

app.listen(10000, err => {
    if (err) return console.log(err);
    console.log('Server started successfully on port 10000');
});