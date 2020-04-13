import React from "react";
const styles = {
  button: {
    margin: "5px"
  }
};
function SavedBook(props) {

  return (
    <li className="list-group-item" >
      <h3>{props.book.title}</h3>
      <h5>By {props.book.authors ? props.book.authors : "?"}</h5>
      <h5>{props.book.description}</h5>
      <img src={props.book.image} alt="Book Cover"></img>
      <br />
      <a href={props.book.link} target="_blank"><button style={styles.button}>View</button></a>
      <button style={styles.button} id={props.book._id} onClick={props.delete}>Delete</button>
    </li>
  );
}

export default SavedBook;
