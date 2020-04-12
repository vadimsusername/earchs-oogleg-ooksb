import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="#">Search</a>
        <a className="nav-item nav-link" href="#">Saved</a>
      </div>
    </nav>
  );
}

export default Header;
