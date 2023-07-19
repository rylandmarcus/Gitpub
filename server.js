const express = require('express')
const app = express()
const port = 3000
const drinks = require('./models/drinks.js')

app.get('/', (req, res)=>{
    res.send('Welcome to the Gitpub App!')
})

app.get('/drinks', (req, res)=>{
    // res.send(drinks)
    res.render('drinks/drinks_index.ejs', {
        drinks: drinks
    })
})

app.get('/drinks/:id', (req, res)=>{
    // res.send(req.params.id)
    res.render('drinks/drinks_show.ejs', {
        drink: drinks[req.params.id]
    })
})

app.listen(port, ()=>{
    console.log('this is working on port', port);
})