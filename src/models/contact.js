const mongoose= require('mongoose');
const contect= mongoose.Schema({
    Email:String,
    Number:String,
    query:String
    
})

module.exports= mongoose.model("Queries",contect);