const http = require('http')
const { text } = require('stream/consumers')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    res.setHeader('content-Type', 'text/html')
    res.write('<p>Hello Africa</p>')
    res.write('<p>Hello Rwanda</p>')
    res.end()
})

server.listen(3000, 'localhost', ()=>{
    console.log('listening to the port of 3000')
})