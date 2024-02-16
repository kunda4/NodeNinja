const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res) => {

    const num = _.random(0, 20)
    console.log(num)
    const greet = _.once(()=>{
        console.log('Hello dear friend')
    })
    greet()
    greet()
    res.setHeader('content-Type', 'text/html')

     let path ='./doc/'
    switch(req.url){
        case '/':
            path +='index.html'
            res.statusCode = 200
            break;
        case '/about':
            path +='about.html'
            res.statusCode = 200
            break;
        case '/about-me':
            path +='about.html'
            res.statusCode = 301
            res.setHeader('Location','/about')
            break;
        default:
            path +='404.html'
            res.statusCode = 404
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