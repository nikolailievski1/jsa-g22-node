const express = require('express');
const calc = require('./controlers/calculator');

const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/calculator', calc.getCalculator);

app.post('/calculator', calc.postCalculator);

app.listen(10000, err => {
    if (err) return console.log(err);
    console.log('Server started successfully');
});



// app.get ('/ime/:ime', (req, res) => {
//     res.send(req.params.ime);
// });

// app.post ('/ime', (req, res) => {
//     let ime = req.body.ime;
//     let parno = ime.lenght % 2 === 0 ? 'true' : 'false';
//     let samoglaski = ["a", "e", "i", "o", "u"];
//     let broj = 0;
//     for(let bukva of ime){
//         if (samoglaski.includes(bukva)) {

//         }
        
//     }
// });