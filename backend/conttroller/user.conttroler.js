const user =require('../models/Schema')
const cartmodels = require('../models/cartSchema')
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

const getproducts =async (req, res) =>{
 
  if(req.query){
    let d = await productmodel.find(req.query)
    res.send({data:d})
  }
  else{
    let data = await productmodel.find()
    res.send({data:data})
  }
}



const products =async(req,res) => {
    let data = await productmodel.create(req.body);
    res.send({msg:"product added successfully"});
    
}

const id =async(req,res) => {
    let data = req.params;
    let bts = await productmodel.findOne({_id:data.nens})
    res.send(bts)
}

const postcart = async (req, res) => {
   let cartid = await cartmodels.create(req.body)
   res.send(cartid)
}

const cart = async (req, res) => {
  let cartdata= await cartmodels.find()
  res.send(cartdata)
}

module.exports ={loginpost,signuppost,products,getproducts,id,cart,postcart};

