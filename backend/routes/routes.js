const { Router } = require("express");
const {loginpost,signuppost, multimulter} = require("../conttroller/user.conttroler");

const router = Router();

router.post('/login',loginpost)
router.post('/signup',signuppost)
router.post("/profile",multimulter);

module.exports = router