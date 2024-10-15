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

})

const UserScheme = Model('users', userScheme);

const BooksA1 = Model("BooksA1", bookScheme, "A1_Level");
const BooksA2 = Model("BooksA2", bookScheme, "A2_Level");
const BooksB1 = Model("BooksB1", bookScheme, "B1_Level");
const BooksB2 = Model("BooksB2", bookScheme, "B1_Level");
const BooksC1 = Model("BooksС1", bookScheme, "C1_Level");
const BooksC2 = Model("BooksС2", bookScheme, "C2_Level");


module.exports = {BooksA1, BooksA2, BooksB1, BooksB2, BooksC1, BooksC2, UserScheme, }

