import React from "react";
const styles = {
    button: {
        margin: "5px"
    }
};
function SavedBook(props) {

    return (
        <li className="list-group-item" >
            <h3>{props.book.volumeInfo.title}   </h3>
            <h5>By {props.book.volumeInfo.authors ? props.book.volumeInfo.authors.join() : "?"}</h5>
            <img src={props.book.volumeInfo.imageLinks.thumbnail} alt="Book Cover"></img>
            <h5>{props.book.volumeInfo.description}</h5>
            <a href={props.book.volumeInfo.infoLink} target="_blank"><button style={styles.button}>View</button></a>
            <button onClick={props.save} id={props.book.id} style={styles.button}>Save</button>
        </li>
    );
}

export default SavedBook;
