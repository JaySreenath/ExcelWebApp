class Surgery{
    constructor(obj){
        this.name = obj.name,
        this.surgeon = obj.surgeon,
        this.anaesthetist = obj.anaesthetist,
        this.theatre = obj.theatre,
        this.start = obj.start,
        this.end = obj.end
    }
}
module.exports=Surgery;