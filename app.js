const express = require('express');
const app = express();
const mongoose = require('mongoose');

// connect mongodb

const dbUrl = 'mongodb+srv://user:user12345@mybland.ntkehxo.mongodb.net/mongoUser?retryWrites=true&w=majority&appName=MyBland';
mongoose.connect(dbUrl)

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

app.get('/about')

//404 page
app.use((req, res)=>{
    res.render('404', {title:'404'})
})