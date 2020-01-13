const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
{  
    authors: [{ type: String, required: true }],
    description: String,
    image: String,
    link: String,
    title: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
