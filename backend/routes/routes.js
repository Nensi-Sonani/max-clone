const { Router } = require("express");

const {loginpost,signuppost,products,getproducts} = require("../conttroller/user.conttroler");


const router = Router();

router.post('/login',loginpost)
router.post('/signup',signuppost)
router.get('/products',getproducts)
router.post('/product',products)



module.exports = router