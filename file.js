const fs = require ('fs');
//read file
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

//create a folder
if(fs.existsSync('./blog')){
    console.log('folder is already exist')
} else{
    fs.mkdir('./blog', ()=> {
        console.log('folder is created')
    })
}




