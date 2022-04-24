const { Schema } = require("mongoose");
const Mongoose = require("mongoose");
Mongoose.Promise = global.Promise;
const url = "mongodb://localhost:27017/Surgery_DB";

let surgerySchema = Schema({
    name: String,
    surgeon: String,
    anaesthetist: String,
    theatre: { type: String, enum: ['A', 'B', 'C'] },
    start: Date,
    end: Date
}, { collection: "Surgery" })

const collection = {};

collection.getSurgeryCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then((database) => {
        return database.model('Surgery', surgerySchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}

module.exports = collection;