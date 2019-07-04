let path = require('path')
let hbs = require('hbs')
let express = require('express')

let app = express()
hbs = hbs.create()

app.set('view engine', 'hbs')
app.engine('hbs', hbs.__express);

let publicDirPath = express.static(path.join(__dirname, '../public'))
app.use(publicDirPath)
let viewsPath = path.join(__dirname, '../templates/views')//we can rename views dir too
app.set('views', viewsPath)
let partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
    res.render('index', {
        name: 'Hossein',
        age: 34,
        path: "/img/me.jpg"
    })
})

app.get('/products', (req, res) => {
    if(!req.query.address){
        res.send({
            error: "You must provide a address term"
        })
    }
    res.send({
        address: req.query.address,
        id: req.query.id
    })
})






let port = process.env.PORT || 3000                                                               

app.listen(3000, () => {
    console.log('server is up on port 3000')
})








//nodemon app.js -e hbs