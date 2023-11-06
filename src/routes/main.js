const express= require('express');
const routes= express.Router();
const detail= require('../models/detail')
const slider= require('../models/slider')
const services= require('../models/service')
const contact= require('../models/contact')


routes.get('/',async (req,res)=>{
    const details=await detail.findOne({"_id":"654236c66e04f42c98e0e974"})
    // console.log(details)
    const slides= await slider.find();
    const service= await services.find();
    // console.log(slides)

    res.render("index",{
        details:details,
        slides:slides,
        service:service})
})
routes.get('')

routes.get('/Gallary',async (req,res)=>{
    const details=await detail.findOne({"_id":"654236c66e04f42c98e0e974"})
    // console.log(details)
    res.render("gallary",{details:details})
})

routes.post('/process-contact-form', async(req,res)=>{
    console.log("formis sumbitee")
    console.log(req.body)

    try{
        const data =await contact.create(req.body)
console.log(data);
res.redirect("/")
    }
    catch(e){
console.log(e);
res.redirect("/")
    }
})

module.exports=routes;