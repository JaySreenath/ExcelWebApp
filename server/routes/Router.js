const express = require('express');
const router = express.Router();
//const setupUser = require("../model/setupUser")
//const userservice = require('../service/userslogin')
const scheduler = require('../service/scheduler');
const surgery =require('../model/beanClasses/surgery');

//const test =require('../utilities/connections')

//router to schedule
router.post('/schedule',(req,res,next)=>{
    let surgeryDetails= new surgery(req.body);
    scheduler.surgeSchedule(surgeryDetails).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        next(err)
    })
})

//router to get surgeries
router.get('/get',(req,res,next)=>{
    scheduler.surgeGet().then(data=>{
        res.json(data)
    }).catch(err=>{
        next(err)
    })
})



module.exports = router;