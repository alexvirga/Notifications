const express = require('express')
const router = express.Router()
module.exports = router
router.use('/notifications', require('./notification.routes'))
// router.use('/users', require('./user.routes'))