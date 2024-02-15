const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    // console.log(path, req.method)

    res.setHeader('content-Type', 'text/html')

     let path ='./doc/'
    switch(req.url){
        case '/':
            path +='index.html'
            break;
        case '/about':
            path +='about.html'
            break;
        default:
            path +='404.html'
            break;
    }

    fs.readFile(path, (err, data) => {
        if(err){
            console.log('server error')
            res.end()
        }else{
            res.write(data)
            res.end()
        }
    })
})

server.listen(3000, 'localhost', ()=>{
    console.log('listening to the port of 3000')
})