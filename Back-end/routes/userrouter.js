const express = require('express')
const router = express.Router()
const usercontroller = require('../controllers/usercontroller')
const verifyUser = require('../middleware/verify')
const { upload } = require('../middleware/handleImage')


router.get('/users', usercontroller.allusers)
router.post('/adduser', usercontroller.adduser)
router.post('/login', usercontroller.login)
router.get('/getUser',verifyUser,usercontroller.getUser)
router.put('/updateUser/:id',upload.single('image'),usercontroller.updateUser)
router.get('/kosuser',usercontroller.kos)
// router.getone('/oneuser', usercontroller.oneuser)
// router.put('/updateusers', usercontroller.updateusers)
// router.delete('/deleteusers', usercontroller.deleteusers)


module.exports = router