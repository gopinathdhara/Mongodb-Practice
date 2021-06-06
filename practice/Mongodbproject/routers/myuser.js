const express = require('express')
const myUser = require('../models/myuser')
const router = new express.Router()
const { MongoClient, ObjectID } = require('mongodb')
//list of all users
router.get("/userslist",(req,res)=>{

    myUser.myUserModel.find({}).then((users)=>{
        let response={
            'status' :200,
            'message':'success', 
            'data'   :users
        }
        res.send(response)
    }).catch((error)=>{
        let response={
            'status' :500,
            'message':'error', 
            'data'   :error
        }
        res.send(response)
    })
})

// add user
router.post("/adduser",async(req,res)=>{
    console.log(req.body)
    const user = new myUser.myUserModel(req.body)
    try{
        await user.save()
        let response={
            'status' :200,
            'message':'success', 
            'data'   :user
        }
        res.send(response)
    }catch(error){
        let response={
            'status' :500,
            'message':'error', 
            'data'   :error
        }
        res.send(response)
    }
    
})
//get user by id
router.get("/users/:id",(req,res)=>{
    const _id=req.params.id
    console.log(_id)

    countCallback=(_id,callback)=>{

        myUser.myUserModel.countDocuments({_id:_id}, function (error, count) {
                
                    callback(undefined,count) 
                
          });
    }
    
      countCallback(_id,(error,result)=>{

        if(result!=undefined){
            myUser.myUserModel.findById(_id,(error,user)=>{

                if(user){

                    let response={
                        'status' :200,
                        'message':'success', 
                        'data'   :user
                        }
                        res.send(response)
                }
                    
            })
        }else{
            let response={
                'status' :404,
                'message':'User record can not be found', 
                'data'   :error
            }
            res.send(response)
        }
      })
    
})


module.exports = router