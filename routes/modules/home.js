const express = require('express')
const router = express.Router()
require('../../config/mongoose')
const user = require('../../models/user')


router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const { email, password } = req.body
  user.find({ email, password })
    .lean()
    .then((user) => {
      if (!user.length) {
        res.render('index', { fail: true })
      } else {
        res.render('success', { name: user[0].firstName })
      }
    })
})

module.exports = router