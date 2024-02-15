const http = require('http')

const server = http.createServer((req, res) => {
    console.log('The server is Created')
})

server.listen(3000, 'localhost', ()=>{
    console.log('listening to the port of 3000')
})