import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import SavedBooks from "../components/SavedBooks";

function Saved(props) {

    return (
        <>
            <Jumbotron />
            <div>
                <h3>Saved Books</h3>
                <ul className="list-group">
                    {props.books.map(item => (
                        <li className="list-group-item" >
                            <h3>{item.title}</h3>
                            <h3>{item.authors.join()}</h3>
                            <h4>{item.description}</h4>                           
                            <img src={item.image} alt="Book Cover"></img>
                            <a href={item.link} >View</a>
                        </li>
                    )
                    )}
                </ul>
             </div>
        </>
    )
}

export default Saved;