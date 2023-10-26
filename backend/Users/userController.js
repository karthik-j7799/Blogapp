const User = require('./userSchema');


//Register User
const addUser = (req,res)=>{
    console.log(req.body)

    let newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        phone:req.body.phone,
        city:req.body.city
    })

newUser.save()
.then(data=>{
    console.log("Saved Successfully")
    res.json({
        status : 200,
        message:"Saved Successfully",
        data: data
    })
})
.catch(err=>{
    console.log("Failed to save");
    res.json({
        status:500,
        message:"Failed to save",
    })
})
}

//Login User

const login = (req,res)=>{
    email = req.body.email,
    password = req.body.password

    User.findOne({email:email})
    .exec()
    .then(data=>{
        if(password == data.password) {
            console.log("Logged in successfully")
            res.json({
                status:200,
                message:"User logged in successfully",
                data:data
            })
            }
        else{
            res.json({
                status:500,
                message:"Invalid password"
            })
            }
    })
    .catch(err=>{
        res.json({status:500,
            message:"invalid password"
    })
    
    }
    
    
    )
}

module.exports ={addUser,login}