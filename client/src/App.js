import React, { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';
import Search from "./pages/Search.js";
import Saved from "./pages/Saved.js";
import API from "./utils/API";
import Header from "./components/Header";
function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => {
        console.log(res.data);    
        setBooks(res.data)
       }
      )
      .catch(err => console.log(err));
  };
 /*  axios.get("https://www.googleapis.com/books/v1/volumes?q=flower").then(res => {
    console.log(`axios call to api1... ${Object.keys(res)}`);
    console.log(`axios call to api2... ${Object.keys(res.data)}`);
    console.log(`axios call to api3... ${Object.keys(res.data.items)}`);
    console.log(`axios call to api4... ${Object.keys(res.data.items[0])}`);
    console.log(`axios call to api5... ${Object.keys(res.data.items[0].volumeInfo)}`);
    console.log(`axios call to api6... ${Object.keys(res.data.items[0].volumeInfo.title)}`);
    console.log(`axios call to api7... ${Object.keys(res.data.items[0].volumeInfo.title[0])}`);
    console.log(`axios call to api8... ${Object.keys(res.data.items[0].volumeInfo.authors)}`);
    console.log(`axios call to api9... ${Object.keys(res.data.items[0].volumeInfo.authors[0])}`);
    console.log("==============================================================");
    console.log(`axios call to api12... ${res}`);
    console.log(`axios call to api22... ${res.data}`);
    console.log(`axios call to api32... ${res.data.items}`);
    console.log(`axios call to api42... ${res.data.items[0]}`);
    console.log(`axios call to api52... ${res.data.items[0].volumeInfo}`);
    console.log(`axios call to api62... ${res.data.items[0].volumeInfo.title}`);
    console.log(`axios call to api72... ${res.data.items[0].volumeInfo.authors}`);
    console.log(`axios call to api73, typeof authors... ${typeof res.data.items[0].volumeInfo.authors}`)
  }).catch(err => console.log(err));  */

 var myBooks = [{title:"title1",description:"description1"},{title:"title2",description:"description2"}];
  return (
    <div className="App">
     <Header />
     <div>
       {/* <Saved books={books}/> */}
       <Search />
     </div>
    </div>
  );
}

export default App;

/* Use this key in your application by passing it with the key=API_KEY parameter. */
/* AIzaSyBkloxMrBbnKZFUzENr0gczQn19ED5KS_c */
/* https://www.googleapis.com/apiName/apiVersion/resourcePath?parameters */