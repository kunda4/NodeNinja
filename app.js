const express = require('express')

const app = express()

//regiter view engine

app.set('view engine', 'ejs');

app.listen(3000)

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/about', (req, res)=>{
    res.sendFile('./doc/about.html', {root: __dirname})
})

app.get('/about-us', (req, res)=>{
    res.redirect('/about')
})

//404 page
app.use((req, res)=>{
    res.sendFile('./doc/404.html', {root: __dirname})
})