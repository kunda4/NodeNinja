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

//create a folder or delete a folder
if(!fs.existsSync('./blog')){
    fs.mkdir('./blog', ()=> {
        console.log('folder is created')
    })
} else{
    fs.rmdir('./blog', ()=> {
        console.log('folder is deleted')
    })
}

// delete a folder
if(fs.existsSync('./doc/deleteme.txt')){
    fs.unlink('./doc/deleteme.txt', (err)=>{
        if(err){
            console.log(err)
        }
        console.log('file deleted')
    })
}



