import axios from "axios";

const urlBase = "https://www.googleapis.com/books/v1/volumes?q="

export default {
  getBooks: function() {
    return axios.get("/api/books");
  },
  saveBook: function(book){
      console.log(book)
    return axios.post("/api/books",book);
  },
  deleteBook: function(id){
    return axios.delete("/api/books/" + id);
  },
  search: function(query) {
    return axios.get(urlBase + query);
  }
};
