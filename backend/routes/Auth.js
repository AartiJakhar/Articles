const express=require('express')
const router = express.Router()
const User = require('../modals/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'aafdfdl/fdru';
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
// Route : 1 >creat a user using post "/api/auth/createuser" . //no login required
router.post('/creatuser',[
    body('name','enter a valid name').isLength({ min: 3 }),
    body('email',"enter a valid email").isEmail(),
    body('password','enter at list five charactors for security prupose').isLength({ min: 5 }),],async(req,res)=>{ 
    //for react front ( what to show  )
      let success = false;
      //if there are errors , return bad Request and the errors 
   const errors=validationResult(req)
   if(!errors.isEmpty()){
    return  res.status(400).json({errors:errors.array()})
   }
     //check whether the user with this eail exists alredy
    try {
        let user = await User.findOne({email:req.body.email})
        if(user){
            res.status(400).json({error:"sorry a user with this email already exists"});
        }

        //for add salt 
        const salt = await bcrypt.genSalt(10);
        const  secPass = await bcrypt.hash(req.body.password,salt)
        //creat a new user 
        user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:secPass,
        })

        //   web token 
      //referense--jwt.io,npm
       const data ={
        user:{ 
           id:user.id
      }
      }
      const authtoken = jwt.sign(data, JWT_SECRET); // retern a promise(token)
      success=true;
      console.log(authtoken)
      res.json({success,authtoken})

    } catch (error) {
        console.log(error.message)
        res.status(500).send('some Error Occured')
    }
})
router.post('/login',[
    body('email',"enter a valid email").isEmail(),
   body('password',"password can't be blank").exists(),  
],async(req,res)=>{
    let success=false;
      //if there are errors , return bad Request and the errors 
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const {email, password} = req.body
      try {
        let user=await User.findOne({email});
        if(!user){
            return res.status(400).json({ errors: errors.array() });
        }
        const passwordCompare=await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json({ success,error:"Please try to login with correc credentials"});
        }
        const data={
            user:{
                id:user.id
            }
        }
        const authtoken=jwt.sign(data,JWT_SECRET);
        success=true;
        res.json({success,authtoken})
      } catch (error) {
        console.log(error.message);
        res.status(500).send("internal server error")
      }
})
router.get('/getuser',fetchuser,async(req,res)=>{
    try {
        userId=req.user.id
        const user=await User.findById(userId).select("-password");
        res.send(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('some Error Occured')
    }
})

module.exports = router;