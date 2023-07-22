const express = require('express')
const app = express()
const port = 3000
const drinks = require('./models/drinks.js')
const food = require('./models/food.js')

app.get('/', (req, res)=>{
    res.send('Welcome to the Gitpub App!')
})

//INDEX
app.get('/drinks', (req, res)=>{
    res.render('drinks/drinks_index.ejs', {
        drinks: drinks
    })
})

app.get('/food', (req, res)=>{
    res.render('food/food_index.ejs', {
        food: food
    })
})

//SHOW
app.get('/drinks/:id', (req, res)=>{
    res.render('drinks/drinks_show.ejs', {
        drink: drinks[req.params.id]
    })
})

app.get('/food/:id', (req, res)=>{
    res.render('food/food_show.ejs', {
        meal: food[req.params.id]
    })
})

app.listen(port, ()=>{
    console.log('this is working on port', port);
})