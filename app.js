const express = require('express')

const app = express()

//regiter view engine

app.set('view engine', 'ejs');

app.listen(3000)

app.get('/', (req, res)=>{
    const blogs = [
        {title: 'the title one', snippet: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'},
        {title: 'the title one', snippet: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'},
        {title: 'the title one', snippet: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'},
        {title: 'the title one', snippet: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'}
    ]
    res.render('index', {title:'home', blogs})
})

app.get('/about', (req, res)=>{
    res.render('about', {title:'about'})
})

app.get('/about-us', (req, res)=>{
    res.redirect('/about', {title:'about'})
})

//404 page
app.use((req, res)=>{
    res.render('404', {title:'404'})
})