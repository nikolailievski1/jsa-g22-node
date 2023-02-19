const fs = require('fs');

// fs.writeFile('data.txt', 'Hello World.... Node ... :(', (err)=>{
//     if(err) return console.log(err);
//     console.log('zapisot e napraven!');
// })

// const fileWrite = () => {

// }

// const fileWrite = () => {
//     return new Promise();
// }

// const fileWrite = () => {
//     return new Promise(()=>{

//     });
// }


// const fileWrite = () => {
//     return new Promise((success,fail)=>{
        
//     });
// }

// const fileWrite = () => {
//     return new Promise((success,fail)=>{
//         fs.writeFile('data.txt', 'Hello World.... Node ... :(', (err)=>{
//             if(err) return console.log(err);
//             console.log('zapisot e naprave!');
//         })
//     });
// }

// const fileWrite = () => {
//     return new Promise((success,fail)=>{
//         fs.writeFile('data.txt', 'Hello World.... Node ... :(', (err)=>{
//             if(err) return fail(err);
//             return success();
//         })
//     });
// }

const fileWrite = (filename, data) => {
    return new Promise((success,fail)=>{
        fs.writeFile(filename, data, (err)=>{
            if(err) return fail(err);
            return success();
        })
    });
}

fileWrite('data1.txt', 'Nov file so zapis od promise!')
    .then(() => {
        console.log('zapisot e uspesen (vo nov file)')
    })
    .catch(err => {
        console.log(err);
    })

// (async () => {
//     try {
//         await fileWrite('data1.txt', 'Нов фајл со запис')
//         await fileWrite('data1.txt', 'Нов фајл со запис')
//         await fileWrite('data1.txt', 'Нов фајл со запис')
//     } catch(err) {
//         console.log(err)
//     }
// })();

const main = async () => {
    
        try {
            await fileWrite('data1.txt', 'Нов фајл со запис')
            await fileWrite('data1.txt', 'Нов фајл со запис')
            await fileWrite('data1.txt', 'Нов фајл со запис')
        } catch(err) {
            console.log(err);
        }
    };

    main();