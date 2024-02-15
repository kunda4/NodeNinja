const fs = require ('fs');
// read file
fs.readFile('./doc/mydoc.txt', (err, data) => {
    if(err){
        console.log(err)
    }

    console.log(data.toString())
})

// write a file
fs.writeFile('./doc/mydoc.txt', 'Hello Rwanda', ()=> {
    console.log('file written')
}) 

// create a folder

fs.mkdir('./assets', ()=> {
    console.log('folder is created')
})

