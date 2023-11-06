const mongoose=require('mongoose');
const serviceSchema= mongoose.Schema({
    Iconurl:String,
    Title:String,
    description:String,
    linkText:String,
    link:String
})

module.exports=mongoose.model("services",serviceSchema);