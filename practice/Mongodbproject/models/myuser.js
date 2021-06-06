const mongoose = require('mongoose')
const validator = require('validator')

const myUser = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    designation: {
        type: String,
        default: '',
        trim: true
    },
    tasks : [ 
        {
            taskname : {
                type: String,
                default: '',
                trim: true
            },
            taskstatus : {
                type: String,
                default: '',
                trim: true
            },
            startdate : {
                type: Date,
                default: '',
                trim: true
            },
            enddate : {
                type: Date,
                default: '',
                trim: true
            },
            priority : {
                type: String,
                default: '',
                trim: true
            },
        }, 
        
    ]
})

module.exports={
    myUserModel:myUser,
    
}