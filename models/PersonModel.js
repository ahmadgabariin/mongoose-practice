const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const personSechma = new Schema({
    hair : String ,
    eyes : String ,
    weight : Number ,
    height : Number ,
    salary : Number ,
    numKids : Number ,
    kids : []
})


const Person = mongoose.model(`Person`, personSechma , `Persons`)

module.exports = Person