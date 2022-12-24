const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  if (req.session.authenticated) {
    res.render('success', { name: req.session.name })
  } else {
    res.render('index')
  }
})



module.exports = router