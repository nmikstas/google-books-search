import axios from "axios";

export default
{
    //Gets all books.
    getBooks: () =>
    {
        return axios.get("/api/books");
    },

    //Deletes the book with the given id.
    deleteBook: id =>
    {
        return axios.delete("/api/books/" + id);
    },

    // Saves a book to the database.
    saveBook: bookData =>
    {
        return axios.post("/api/books", bookData);
    },

    //Search Google books API.
    searchBooks: param =>
    {
      return axios.get("/api/search/" + param);
    }
};
