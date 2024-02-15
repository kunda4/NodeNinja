const fs = require ('fs');

fs.readFile('./doc/mydoc.txt', (err, data) => {
    if(err){
        console.log(err)
    }

    console.log(data.toString())
})


 