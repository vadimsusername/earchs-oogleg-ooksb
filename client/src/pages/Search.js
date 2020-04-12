import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
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
            return;
        }).catch(err => console.log(err));;
    }
    return (
        <>
            <Jumbotron />
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Book: </span>
                </div>
                 <input type="text" class="form-control" placeholder="Enter Book Title" aria-label="Username" aria-describedby="basic-addon1" ref={inputRef}/>
                 <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" onClick={handleClick}>Search</button>
                </div>
            </div>
            <div>
                <h3>Results</h3>
                <ul className="list-group">
                    {foundBooks.map(item => (
                        <li className="list-group-item" >
                            <h3>{item.volumeInfo.title}   </h3>
                            <h3>{item.volumeInfo.authors.join()}</h3>
                            <img src={item.volumeInfo.imageLinks.thumbnail} alt="Book Cover"></img>
                            <h3>{item.volumeInfo.description}</h3>                      
                            <a href={item.volumeInfo.infoLink}><button >View</button></a> 
                            <button onClick={handleSave} id={item.id}>Save</button>
                        </li>
                    )
                    )}
                </ul>
             </div>

        </>
    )
}

export default Search;