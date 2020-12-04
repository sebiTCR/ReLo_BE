const user = require('../models/user');

module.exports.createUser = (req, res)=>{
    let usr = new user;
    
    usr.username = req.body.username;
    usr.password = req.body.password;

    user.findOne({username: req.body.username}, (err, usrChk)=>
    {
        if(!err)
        {
            if(usrChk)
            {
                res.json({message: "Username already in use!"})
            }
            else
            {
                usr.save((err)=>
                {
                    if(!err)
                    {
                        res.send({status: "success"});
                    }
                    else
                    {
                        console.log(req)
                        res.send(err)
                    }
                })
            }
        }
        else
        {
            res.json({message: err})
        }
    })    
}

module.exports.getAccounts = (req,res) =>
{
    user.listUsers((entries, err)=>{
        if(!err)
        {
            res.send(entries)
        }
        else
        {
            res.send(err)
        }
    })
}

//Get one account, by username
module.exports.getAccount = (req,res) =>
{
    user.findById(req.params.uname, (err,user)=>
    {
        if(!err)
        {
            res.json({
                message: "Found User",
                additionalInfo: user
            });
        }
        else
        {
            res.json({
                message: "User not found",
            });
        }
        
    });
}

module.exports.updateAccount = (req,res) =>
{

    user.findOne({username: req.body.username}, (err, usrChk)=>
    {
        if(!err)
        {
            if(usrChk)
            {
                res.json({message: "Username already in use!"})
            }
            else
            {
                user.findById(req.params.uname, (err,usr)=>
                {        
                    usr.username = req.body.username ? req.body.username : usr.username;
                    usr.password = req.body.password ? req.body.password : usr.password;
                    
                    usr.save((err)=>
                    {
                        if(err)
                        {
                            res.json({
                                message: err,
                            });
                        }
                    });
                    res.json({
                        message: "User updated"
                    })
                });
            }
        }
        else
        {
            res.json({message: err})
        }
    });
}

module.exports.loginUser = ((req, res)=>
{
    user.findOne({username: req.body.username}, (err, usrChk)=>
    {
        if(usrChk)
        {
            if(!err)
            {
                if(usrChk.password == req.body.password)
                {
                    //TODO: Generate a JWT token on login
                    res.json({message: "I'm in"})
                }        
                else
                {
                    res.json({message: err})
                }
            }
            else
            {
                res.json({message: err}); 
            }
        }
        else
        {
            res.json({message: "User doesn't exists!"})
        }
    })
}) 

module.exports.deleteAccount = (req,res) =>
{
    user.findByIdAndDelete(req.params.uname, (err,user)=>
    {
        if(!err)
        {
            res.json({
                message: "Found User",
                additionalInfo: user
            });
        }
        else
        {
            res.json({
                message: "User not found",
            });
        }
        
    });
}
