const { Router } = require("express");

const {loginpost,signuppost,products} = require("../conttroller/user.conttroler");


const router = Router();

router.post('/login',loginpost)
router.post('/signup',signuppost)

router.post('/product',products)



module.exports = router