const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
    username: 
    {
        type: String,
        required: true
    },
    
    password:
    {
        type: String,
        required: true
    }
})

var User = module.exports = mongoose.model("User", userSchema)
module.exports.listUsers = (callback, limit)=>
{
    User.find(callback).limit(limit);
}

module.exports.listUserByUsername = (req, res)=>
{

}