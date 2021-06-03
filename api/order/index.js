const express = require('express')

const router = express.Router()

const controller = require('./order.controller')

router.get('/', controller.index)

router.get('/:id', controller.getById)

router.post('/', controller.create)

router.post('/deleteOrderById', controller.deleteById)

router.post('/updateOrderById', controller.updateOrderById)

module.exports = router
