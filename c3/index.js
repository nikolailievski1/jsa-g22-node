const studenti = [
    {ime: 'Bojan', prosek: 7.5, grad: 'Skopje'},
    {ime: 'Pero', prosek: 8.3, grad: 'Bitola'},
    {ime: 'Janko', prosek: 6.9, grad: 'Bitola'},
    {ime: 'Vesna', prosek: 9.2, grad: 'Skopje'},
    {ime: 'Elena', prosek: 9.9, grad: 'Kumanovo'},
    {ime: 'Vancho', prosek: 10, grad: 'Tetovo'},
    {ime: 'Elena', prosek: 9.9, grad: 'Ohrid'},
    {ime: 'Ivana', prosek: 6.9, grad: 'Kumanovo'},
    {ime: 'Natasha', prosek: 8.1, grad: 'Skopje'},
    {ime: 'Stanko', prosek: 7.2, grad: 'Strumica'},
]

// studenti.sort ((a, b) => {
//     // const imeA = a.ime.toUpperCase();
//     // const imeB = b.ime.toUpperCase();

//     // if(imeA < imeB) return -1;
//     // if(imeA > imeB) return 1;
//     if(a.ime.toLowerCase() < b.ime.toLowerCase()) return -1;
//     if(a.ime.toLowerCase() > b.ime.toLowerCase()) return 1;
// });
    
// console.log(studenti);

// let studentiFilter = studenti.filter((s) => {
//     // return s.ime === 'Pero';
//     // return s.ime.endsWith('o');
//     return s.prosek < 8;
// });

// console.log(studentiFilter);

// let studentiFind = studenti.find((s) => {
//     return s.ime === 'Pero';
// });

// console.log(studentiFind);

// studenti.forEach(s => {
//     console.log(s.ime);
// })