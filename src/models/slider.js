const mongo= require('mongoose');
const Slider= mongo.Schema({
    Title:String,
    Subtitle:String,
    Imageurl:String,
    class:String
})

module.exports= mongo.model('slider',Slider);