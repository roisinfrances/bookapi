const createError = require('http-errors');

let booklist = []
let idno = 0

exports.index = function (req, res) {
    res.send(booklist)
};

exports.create = function (req, res, next) {
    if (!req.body.title) {
        return(next(createError(400, "title is required")))
    }

    booklist.push({id: idno, title: req.body.title, author: req.body.author, read: req.body.read})
    res.send({result: true})
    idno++
}

exports.show = function (req, res, next){
    const bookitem = booklist.find((books) => books.id == req.params.id)
    if(!bookitem) {
        return (next(createError(404, "no book with that id")))
    }
    res.send(bookitem)
}

exports.update = function (req, res, next) {
    const bookitem = booklist.find((books) => books.id == req.params.id)
    if (!bookitem){
        return (next(createError(400, "no book with that id")))
    }
    booklist = booklist.map((books) => {
        if (books.id == req.params.id) {
            books.title = req.body.title,
            books.author = req.body.author,
            books.read = req.body.read
        }
        return books
    })
    res.send({result: true})
}

exports.delete = function (req, res, next) {
    const bookitem = booklist.find((books) => books.id == req.params.id )
    if(!bookitem){
        return(next(createError(404, "no book with that id")))
    }
    booklist = booklist.filter((books)=> books.id != req.params.id)
    res.send({result:true})
}