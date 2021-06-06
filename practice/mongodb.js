// CRUD create read update delete

//const mongodb = require('mongodb')
//const MongoClient = mongodb.MongoClient
const { MongoClient, ObjectID } = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'todoapp'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    /*
    db.collection('users').insertOne({
        name: 'Andrew',
        age: 27
    })*/

    //###############insert record############################
    /*
    db.collection("users").insertOne({
        name: 'raghu',
        age:30,
        email:"raghu.dhara@gmail.com",
        password:123456
    },function(error,result){
        if(error){
            console.log("error occurred")
        }
        console.log(result.ops)
    })*/
    /*
    db.collection("users").insertMany([
        {
        name: 'rojo',
        age:30,
        email:"rojo@gmail.com",
        password:123456
        },
        {
            name: 'priya',
            age:30,
            email:"priya@gmail.com",
            password:123456
        },
    ],function(error,result){
        if(error){
            console.log("error occurred")
        }
        console.log(result.ops)
    })*/

    //####################read###################
    /*
    db.collection("users").find({ age:31 }).toArray((error,result)=>{
        if(error){
            console.log("error")
        }
        console.log(result)
    })*/
    /*
    db.collection("users").findOne({_id: new ObjectID("5fda3fade799a631d8bb03ce")},(err,res)=>{
        if(err){
            console.log("error")
        }
        console.log(res)
    })*/

    //################update######################
    /*
    db.collection("users").updateOne({
        _id: new ObjectID("5fda3fade799a631d8bb03cf")
    },  {
            $set: {
                age: 24
            }
        }).then((result)=>{
            console.log(result)
        }).catch((error)=>{
            console.log(error)
        })*/
        /*
        db.collection("users").updateMany({
            age: 30
        },  {
                $set: {
                    age: 25
                }
            }).then((result)=>{
                console.log(result)
            }).catch((error)=>{
                console.log(error)
            })*/

    //###################delete record###############

             // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
     /*       
    db.collection('users').deleteOne({
        age: 24
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })*/
    /*
    db.items.update(
        // Match criteria
        {
            user_id: '123456',
            'items.item_name': 'my_item_two'
        },
    
        // Update first matching array element using the positional operator ($)
        {
            $set: {
                'items.$.price': 60,
            }
        }
    )*/

    // ###############update task array of object##############
    /*
    db.collection("users").updateOne({
        _id: new ObjectID("5fda3b94119e4405cc8647b3")
    },  {
            $set: {
                tasks:[
                    {
                        taskname: "play game1",
                        taskstatus:"completed"
                    },
                    {
                        taskname: "play game2",
                        taskstatus:"pending"
                    }
            
                ]
            }
            
        }).then((result)=>{
            console.log(result)
        }).catch((error)=>{
            console.log(error)
        })
        */
        /*
       db.collection("users").updateOne(
        // Match criteria
        {
            _id: new ObjectID("5fda3b94119e4405cc8647b3"),
            'tasks.taskname': 'play cs'
        },
    
        // Update first matching array element using the positional operator ($)
        {
            $set: {
                'tasks.$.taskname': 'code practice nodejs',
            }
        }
    )*/
})