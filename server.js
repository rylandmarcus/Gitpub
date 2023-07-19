const express = require('express')
const app = express()
const port = 3000
const drinks = require('./models/drinks.js')

app.get('/', (req, res)=>{
    res.send('Welcome to the Gitpub App!')
})

app.get('/drinks', (req, res)=>{
    // res.send(drinks)
    res.render('drinks_index.ejs', {
        drinks: drinks
    })
})

app.listen(port, ()=>{
    console.log('this is working on port', port);
})