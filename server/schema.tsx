const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const Model = mongoose.model;


const userScheme = new Schema({

    name: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    photo: {
        type: String,
        default: ''
    },
    library: {
        type: Array,
        default: []
    },
    favorite: {
        type: Array,
        default: []
    }

});

const bookScheme = new Schema({

    nameBook: {
        type: String,
        default: ''
    },
    typeOfBook: {
        type: String,
        default: ''
    },
    bookLink: {
        type: String,
        default: ''
    },
    audio: {
        type: String,
        default: ''
    }
})

const UserScheme = Model('User', userScheme)
const BookScheme = Model('Book', bookScheme)

module.exports = {UserScheme, BookScheme}

