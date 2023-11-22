const user =require('../models/Schema')
const productmodel = require('../models/productSchema')

const signuppost =async(req,res)=>{
  // res.send
  let {email}=req.body
  let User=await user.findOne({ email: email})
  if(User){
    res.send({msg:"user already exists"})
  }
  else{
    await user.create(req.body)
    res.send({msg:"signup successfully"})
  }
}
const loginpost =async(req,res)=>{
   let {email,password} = req.body
   let User = await user.findOne({email: email})
   if(!User){
     return res.send({msg:"user not found"})
   }
   else if(User.password != password){
    return res.send({msg:"password is incorrect"});
   }
   else{
     return res.send(req.body)
   }
}




const products =async(req,res) => {
    let data = await productmodel.create(req.body);
    res.send({msg:"product added successfully"});
}

module.exports ={loginpost,signuppost,products};

