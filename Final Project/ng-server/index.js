const config = require("./public/config.json")
const cors = require('cors')
const express = require('express')
const app =  express();
const mongoose = require('mongoose')


// midle ware
app.use(express.static(__dirname+"/public")).use(cors());
app.use(express.json());

const url = `${config.onlinedb}`;
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let Users = mongoose.model('Users',new Schema({
    id : ObjectId,
    token:Number,
    name:String,
    phone:String,
    item : String,
    quantity : Number,
    trackingid:Number,
    status:String

}));

let Admin = mongoose.model('Admin',new Schema({
    id : ObjectId,
    username:String,
    password:String
}));




mongoose.connect(url).
then(()=>{console.log('db connect')}).
catch((error)=>{console.log('error')});


app.get("/data",(req,res)=>{
    console.log('get request for data recieved');
    Users.find(function(error, Users){
        if(error){
            console.log('error')
        }else
           { res.json(Users) }
           

    })
})
app.post("/add",function(req,res){
    //console.log('data recieved',req.body);
    let users = new Users(req.body);
    users.save()
    .then(function(dbres){
        console.log("data is save dto db")
    })
    .catch(function(error){
        console.log("error occured in send to db")
    })
})

app.get("/admin",(req,res)=>{
    console.log('get request for data recieved');
    Admin.find(function(error, users){
        if(error){
            console.log('error from admin')
        }else
           { res.json(users) }
           

    })
})

app.delete("/delete/:id",(req,res)=>{
    console.log("delete request recieved")
    // Users.findByIdAndDelete({_id : req.params.id},function(error, deleteduser){
        Users.findByIdAndDelete(req.params.id,(error, deleteduser)=>{
        if(error){
            console.log("error from delte",error)
        }else
            res.json({"messags": "user deteled"})
    })
})

app.get("/edit/:id",function(req, res){
    Users.findById(req.params.id,function(error, userupdate){
        if(error){
            console.log("error from edit")
        }else{
             res.json(userupdate)
        }
           
    })

})
app.post("/edit/:id",function(req, res){
    Users.findById(req.params.id,function(error, updateUser){
        if(error){
            console.log("error from edit")
        }else{
            updateUser.status = req.body.status;
            updateUser.save().
            then((res)=>{
                
            }).catch((error)=>{
                console.log(error)
            })
        }
           
    })

})








app.listen('5050',"localhost",function (error) { 
    if(error){
        connsole.log(error)
    }else{
        console.log('app running on the Port 5050')
    }
 })