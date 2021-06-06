const express = require('express')
const myUser = require('../models/myuser')
const router = new express.Router()
const {ObjectID } = require('mongodb')

//add new task
router.post('/addtask',(req, res) => {
   
        const _id=req.body.id;

        //console.log(req.body)
        //get user details step1
        getUserDataCallback=(_id,callback)=>{

                myUser.myUserModel.findById(_id,(error,user)=>{
                    
                    if(error){
                        callback(error,undefined)
                    }

                    if(user){

                        callback(undefined,user)
                    }
                        
                })
       }
       //count task step3
       getCountDataCallback=(_id,result,callback)=>{

            myUser.myUserModel.findById(_id,(error,user)=>{
                if(error){
                    callback(error,undefined)
                }
                taskArray=[];
                if(user){
                    if(user.tasks){
                        taskArray=user.tasks;
                    }
                    console.log(taskArray)
                    var count = 0;
                        for (var x of taskArray) {
                            if (x._id != '') {
                            count++;
                            }
                    }
                    data={
                        'taskcount':count,
                        'result' : taskArray
                    }
                    callback(undefined,data)
                }
                    
            })
        }
        //add task step2
       addTaskDataCallback=(_id,taskArray,callback)=>{

                myUser.myUserModel.updateOne(
                    {
                    _id:_id
                    },  
                    {
                        $set: {
                            tasks:taskArray
                            }
                        
                    },(error,result)=>{
                        if(error){
                            callback(error,undefined)
                        }
                        if(result){
                            callback(undefined,result)
                        }
                        
                    })
        
        }
       getUserDataCallback(_id,(error,result)=>{

                if(error){
                    let response={
                        'status' :500,
                        'message':'error', 
                        'data'   :error
                    }
                    res.send(response)
                }

                taskArray=[];
                if(result.tasks){
                    taskArray=result.tasks;
                }
                taskArray.push(
                    {
                        _id: new ObjectID(),
                        taskname: req.body.taskname,
                        taskstatus:req.body.taskstatus,
                        startdate: req.body.startdate,
                        enddate: req.body.enddate,
                        priority:req.body.priority,
                        
                    }

                )
                addTaskDataCallback(_id,taskArray,(error,result)=>{

                        if(error){
                            let response={
                                'status' :500,
                                'message':'error', 
                                'data'   :error
                            }
                            res.send(response)
                        }
                        getCountDataCallback(_id,result,(error,result)=>{

                            if(error){
                                let response={
                                    'status' :500,
                                    'message':'error', 
                                    'data'   :error
                                }
                                res.send(response)
                            }
                            let response={
                                'status' :200,
                                'message':'success', 
                                'data'   :result
                                }
                                res.send(response)
                        })
                })
            
       })

})

module.exports = router