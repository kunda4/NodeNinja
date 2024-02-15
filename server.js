const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    res.setHeader('content-Type', 'text/html')

    fs.readFile('./doc/index.html', (err, data) => {
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