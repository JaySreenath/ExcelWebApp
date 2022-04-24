const { Schema } = require("mongoose");
const Mongoose = require("mongoose");
Mongoose.Promise = global.Promise;
const url = "mongodb://localhost:27017/Surgery_DB";

let EmployeeSchema = Schema({
    ename: String,
    snumber: Number,
    mnumber: Number,
    productionValue: Number,
    meter: Number,
    Todaydate: Date
}, { collection: "EmployeeDetails" })

const collection = {};

collection.getSurgeryCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then((database) => {
        return database.model('EmployeeDetails', EmployeeSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}

module.exports = collection;