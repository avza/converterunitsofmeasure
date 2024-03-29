const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, err => {
    if (err) {
        console.log('err', err)
    } else {
        console.log('Conveter units is running...')
    }
})