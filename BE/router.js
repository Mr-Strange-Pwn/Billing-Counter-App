const express = require('express')
const router = express.Router()

const userController = require('./controllers/userController')
const inventoryControl = require('./controllers/inventoryControl')

router.get('/', (req, res) => {
    res.send("connected")
})

// to user
router.post('/user/register', userController.register)
router.post('/user/login', userController.login)

// to inventory 
router.get('/inventory', inventoryControl.get)
router.post('/inventory/add', inventoryControl.add)
router.post('/inventory/remove', inventoryControl.remove)
router.post('/inventory/')

module.exports = router