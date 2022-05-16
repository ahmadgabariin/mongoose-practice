const express = require(`express`)
const router = express.Router()
const Book = require(`../../models/BookModel`)
const Person = require(`../../models/PersonModel`)

router.get(`/book` , function(req , res) {

    //1. Find books with fewer than 500 but more than 200 pages

    // Book.find({
    //     $and : [
    //         {"pages" : {$lt : 500}},
    //         {"pages" : {$gt : 200}}
    //     ]
    // }).then ( data => res.send(data))

    //2. Find books whose rating is less than 5, and sort by the author's name

    // Book.find({
    //     "rating" : {"$lt" : 5}
    // })
    // .sort({author : -1})
    // .then ( data => res.send(data))
    

    //3. Find all the Fiction books, skip the first 2, and display only 3 of them

    // Book.find({
    //     "genres" : "Fiction"
    // })
    // .skip(2)
    // .limit(3)
    // .then(data => res.send(data))


})

router.get(`/person` , function(request ,response) {

    //1. Find all the people who are tall (>180) AND rich (>30000)

    // Person.find({
    //     "$and" : [
    //         {"height" : {"$gt" : 180}} ,
    //         {"salary" : {"$gt" : 30000}}
    //     ]
    // })
    // .then(data => {
    //     response.send(data)
    //     response.end()
    // } )


    //2. Find all the people who are tall (>180) OR rich (>30000)

    // Person.find({
    //     "$or" : [
    //         {"height" : {"$gt" : 180}},
    //         {"salary" : {"$gt" : 30000}}
    //     ]
    // })
    // .then(data => {
    //     response.send(data)
    //     response.end()
    // })


    //3. Find all the people who have grey hair or eyes, and are skinny (<70)

    //First Way

    // Person.find({
    //     "$or" : [
    //         {"hair" : "grey"},
    //         {"eyes" : "grey"}
    //     ]
    //     ,
    //     "$and" : [
    //         { "weight" : {"$lt" : 70}}
    //     ]
    // })
    // .then(data => {
    //     response.send(data)
    // })


    // Second way

    // Person.find({}).and([
    //     {
    //         "$or" : [
    //             {"hair" : "grey"},
    //             {"eyes" : "grey"}
    //         ]
    //     }
    //     ,
    //     {
    //         "$and" : [
    //                 { "weight" : {"$lt" : 70}}
    //             ]
    //     }
    // ])
    // .then(data => {
    //     response.send(data)
    //     response.end()
    // })


    //4. Find people who have at least 1 kid with grey hair

    // Person.find({
    //     "kids.hair" : "grey"
    // })
    // .then( data => {
    //     response.send(data)
    //     response.end()
    // })

    // Person.find({
    //     "kids" : { "$elemMatch" : {"hair" : "grey"} }
    // })
    // .then( data => {
    //     response.send(data)
    //     response.end()
    // })

 


    // Find all the people who have at least one overweight kid, and are overweight themselves (>100)
    
    // Person.find({})
    // .and([
    //     {"weight" : {"$gt" : 100}},
    //     {"kids.weight" : {"$gt" : 100}} 
    // ])
    // .then (data=> {
    //     response.send(data)
    //     response.end()
    // })

    Person.find({})
    .and([
        { "weight" : {"$gt" : 100}}
        ,
        {
            "kids" : {"$elemMatch" : { "weight" : {"$gt" : 100 }} }
        }
    ])
    .then( data => {
        response.send(data)
        response.end()
    })
    
} )






module.exports = router