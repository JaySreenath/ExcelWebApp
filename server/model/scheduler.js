const connection =require( '../utilities/connection');


const surgeryDb={}

surgeryDb.postSurgery=(surgeryDetails)=>{
    return connection.getSurgeryCollection().then((model)=>{
        return model.find({$and:[{"start":surgeryDetails.start}]}).then((matchedData)=>{
            if (matchedData.length!=0){
                return "Time unavailable";
            }
            else{
                
                return model.insertMany([surgeryDetails]).then((data)=>{
                    if(data.length!=0){
                        return data;
                    }
                    else{
                        return null;
                    }
                })
                
            }
        })
    })
}

surgeryDb.getSurgery=()=>{
    return connection.getSurgeryCollection().then(model=>{
        return model.find().then(matchedData=>{
            if(matchedData.length!=0){
                return matchedData;
            }else{
                return null;
            }
        })
    })
}

module.exports=surgeryDb;