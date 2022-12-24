const express = require('express')
const router = express.Router()
const user = require('../../models/user')
require('../../config/mongoose')

router.post('/', (req, res) => {
  const { email, password } = req.body
  user.find({ email, password })
    .lean()
    .then((user) => {
      if (!user.length) {
        res.render('index', { fail: true })
      } else {
        req.session.authenticated = true
        req.session.name = user[0].firstName
        res.render('success', { name: user[0].firstName })
        console.log(req.session)
      }
    })
    .catch(error => console.log(error))
})

module.exports = router
