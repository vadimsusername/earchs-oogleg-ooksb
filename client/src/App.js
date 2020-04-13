import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Search from "./pages/Search.js";
import Saved from "./pages/Saved.js";
import API from "./utils/API";
import Header from "./components/Header";
function App() {
 

 //var myBooks = [{title:"title1",description:"description1"},{title:"title2",description:"description2"}];
  return (
    <div className="App">

     <Router>
      <Header />
      <Switch>
            <Route exact path={["/", "/saved"]}>
              <Saved />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            {/* <Route>
              <NoMatch />
            </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

/* Use this key in your application by passing it with the key=API_KEY parameter. */
/* AIzaSyBkloxMrBbnKZFUzENr0gczQn19ED5KS_c */
/* https://www.googleapis.com/apiName/apiVersion/resourcePath?parameters */