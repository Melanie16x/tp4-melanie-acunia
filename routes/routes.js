const {get, post, put, delet} = require('../controllers/controllers')

const { Router } = require("express");

const router = Router();
router.get('/', get);
router.post('/', post);
router.put('/', put);
router.delete('/', delet);

module.exports = router

