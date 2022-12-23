const mongoose = require('mongoose')
if (process.env.NODE_ENV !== 'production') { //僅在非正式環境時, 載入 dotenv
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URL)

const db = mongoose.connection

db.on('error', () => {
  console.log('mongoose ERROR!')
})

db.once('open', () => {
  console.log('mongoose connected!')
})

module.exports = db
