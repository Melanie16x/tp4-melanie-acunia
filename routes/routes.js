const {get, post, put, delet} = require('../controllers/controllers')

const { Router } = require("express");

const router = Router();
router.get('/', get, post, put, delet);

module.exports = router

