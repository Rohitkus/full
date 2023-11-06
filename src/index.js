const express= require('express');
const app= express();
const hbs= require('hbs');
const mongo= require('mongoose');
const bodyparcer=require('body-parser')

app.use(bodyparcer.urlencoded({
    extended:true
}))
const routes=require('./routes/main')
app.use('/static',express.static("public"))
app.set('view engine','hbs');
app.set("views","views")

const detail= require('./models/detail')
const slider=require('./models/slider')
const services=require('./models/service')
hbs.registerPartials("views/partials");

mongo.connect("mongodb://0.0.0.0:27017/WEBSITE");

// services.create([{
//     Iconurl:'fa-solid fa-snowflake',
//     Title:'Provide Best Service',
//     description:'We provide courses that helps our student in learning coding',
//     linkText:'#!',
//     link:'check'

// },
// {
//     Iconurl:'fa-solid fa-user',
//     Title:'Provide Best Service',
//     description:'We provide courses that helps our student in learning coding',
//     linkText:'#!',
//     link:'system'

// },
// {
//     Iconurl:'fa-solid fa-image',
//     Title:'Provide Best Service',
//     description:'We provide courses that helps our student in learning coding',
//     linkText:'#!',
//     link:'learn'

// }])



// slider.create([{
//     Title:"Beauty Of Nature",
//     Subtitle:"A bird is most humble Creature of this planet",
//     Imageurl:"/static/images/s3.jpg"
// },
// {
//     Title:"Nature is  most beautiful",
//     Subtitle:"A bird is most humble Creature of this planet",
//     Imageurl:"/static/images/s2.jpg"
// },
// {
//     Title:"Beauty thing ON",
//     Subtitle:"A bird is most humble Creature of this planet",
//     Imageurl:"/static/images/s1.jpg"
// }])
// detail.create( {
//     brandName:"rohitkumsmr",
//     brandIconUrl:"fadfsdf",
//     links:[{
//         label:"home",
//         url :"/"
//     },
//     {
//         label:"services",
//         url :"/service"
//     },
//     {
//         label:"Gallary",
//         url :"/gallary"
//     },
//     {
//         label:"Contact",
//         url :"/contact-us"
//     },
//     ]
// })


app.use('/',routes)



app.listen(process.env.PORT |5000 ,()=>{
    console.log("server started")
})