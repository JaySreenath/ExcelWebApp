const surgery = require('../model/scheduler');

const scheduler={};

scheduler.surgeSchedule=(details)=>{
    return surgery.postSurgery(details).then((data)=>{
        if(data===null){
            let err=new Error("Posting failed");
            err.status=400;
            throw err;
        }else if(data==="same"){
            let err =new Error("Already posted");
            err.status=400;
            throw err;
        }
        else{
            return data;
        }
    })

}

scheduler.surgeGet=()=>{
    return surgery.getSurgery().then(data=>{
        if(data===null){
            let err=new Error("Failed to Get");
            err.status = 400;
            throw err;
        }else{
            return data;
        }
    })
}

module.exports= scheduler;
