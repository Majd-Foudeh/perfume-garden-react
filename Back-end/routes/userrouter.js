const express = require('express')
const router = express.Router()
const usercontroller = require('../controllers/usercontroller')


router.get('/users', usercontroller.allusers)
router.post('/adduser', usercontroller.adduser)
router.post('/login', usercontroller.login)
// router.getone('/oneuser', usercontroller.oneuser)
// router.put('/updateusers', usercontroller.updateusers)
// router.delete('/deleteusers', usercontroller.deleteusers)


module.exports = router