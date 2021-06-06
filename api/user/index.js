const express = require('express')
const router = express.Router()

const controller = require('./user.controller');


router.get('/', controller.index)

router.get('/token', controller.getById)

router.post('/register',controller.create)

router.post('/login',controller.login)

router.put('/:id',controller.updateById)



module.exports = router