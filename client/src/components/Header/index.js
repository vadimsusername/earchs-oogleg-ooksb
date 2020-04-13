import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./style.css";
const styles = {
  link: {
    color: "white",
    margin: "5px"
  }
};

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      {/* <div className="navbar-nav">
       
      </div> */}
      <Link to="/" style={styles.link}>Saved</Link>
        <Link to="/search" style={styles.link}>Search</Link> 
    </nav>
  );
}

export default Header;
