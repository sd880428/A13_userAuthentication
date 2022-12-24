const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
const session = require('express-session') 

const app = express()
const PORT = process.env.PORT || 3000

app.engine('hbs', exphbs.engine({ defaultLayouts: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(session({ 
  secret: 'test123',
  saveUninitialized: false,
  cookie: { maxAge:30000 },
}))
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(PORT, () => {
  console.log('server has started!')
})