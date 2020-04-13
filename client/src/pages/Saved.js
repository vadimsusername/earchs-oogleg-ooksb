import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import SavedBook from "../components/SavedBook";
import API from "../utils/API";
const styles = {
    button: {
      margin: "5px"
    },
    books: {
        width: "80%",
        margin: "auto"
    }
  };
function Saved() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      loadBooks()
    }, [])
  
    // Loads all books and sets them to books
    function loadBooks() {
      API.getBooks()
        .then(res => {
          console.log(res.data);    
          setBooks(res.data.reverse());
         }
        )
        .catch(err => console.log(err));
    };
    function handleDelete(event){
        API.deleteBook(event.target.id).then(res =>{
            loadBooks();
        });
    }
    return (
        <>
            <Jumbotron />
            <div>
                <h3>Saved Books</h3>
                <ul className="list-group" style={styles.books}>
                    {books.map(item => (
                        <SavedBook book={item} delete={handleDelete} />
                    )
                    )}
                </ul>
             </div>
        </>
    )
}

export default Saved;