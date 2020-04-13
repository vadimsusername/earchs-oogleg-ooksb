import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import SearchedBook from "../components/SearchedBook";
import API from "../utils/API";

const styles = {
    button: {
      margin: "5px"
    },
    results: {
        width: "80%",
        margin: "auto"
    },
    input: {
        width: "40%",
        margin: "auto"
    }
  };

function Search() {
    var [foundBooks, setBooks] = useState([]);
    const inputRef = useRef();

    function handleClick(){
        console.log(inputRef);
        API.search(inputRef.current.value).then(res => {
                console.log(res);
                setBooks(res.data.items);
        }).catch(err => console.log(err));
    };

    function handleSave(event) {
        
        console.log(`save book `);
        var saveBook;
        foundBooks.forEach(item => {
            if(item.id === event.target.id){
               saveBook = {
                   title: item.volumeInfo.title,
                   authors: item.volumeInfo.authors.join(),
                   description: item.volumeInfo.description,
                   image: item.volumeInfo.imageLinks.thumbnail,
                   link: item.volumeInfo.infoLink
               }
            }
        });
        console.log(saveBook);
        API.saveBook(saveBook).then(res => {
            console.log(res);
        }).catch(err => console.log(err));;
    }
    return (
        <>
            <Jumbotron />
            <div class="input-group mb-3" style={styles.input}>
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Book: </span>
                </div>
                 <input type="text" class="form-control" placeholder="Enter Book Title" aria-label="Username" aria-describedby="basic-addon1" ref={inputRef}/>
                 <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" onClick={handleClick}>Search</button>
                </div>
            </div>
            <div>
                <ul className="list-group" style={styles.results}>
                    {foundBooks.map(item => (
                        <SearchedBook book={item} save={handleSave} />
                      )
                    )}
                </ul>
             </div>

        </>
    )
}

export default Search;