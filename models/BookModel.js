const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const bookSechma = new Schema({
    title : String ,
    author : String ,
    pages : Number , 
    genres : [String] ,
    rating : Number
})

const Book = mongoose.model(`Book`, bookSechma, `Books`)

module.exports = Book