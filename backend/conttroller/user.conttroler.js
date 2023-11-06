const user =require('../models/Schema')

const signuppost =async(req,res)=>{
  // res.send
  let {email}=req.body
  let User=await user.findOne({ email: email})
  if(User){
    res.send("user already exists")
  }
  else{
    await user.create(req.body)
    res.send(req.body)
  }
}
const loginpost =async(req,res)=>{
   let {email,password} = req.body
   let User = await user.findOne({email: email})
   if(!User){
     return res.send("user not found")
   }
   else if(User.password != password){
    return res.send("password is incorrect");
   }
   else{
     return res.send(req.body)
   }
}


const store = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const multimulter =(req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const img = new images({
        image: {
          data: req.file.filename,
          contentType: "image/png",
        },
      });

      images.create(img);
      res.send("uploaded");
    }
  });
}

module.exports ={loginpost,signuppost,multimulter};