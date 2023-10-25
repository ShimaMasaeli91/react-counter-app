import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge bedge-secondary badge-pill">
            {totalCounters}
          </span>
        </a>
      </nav>
    </div>
  );
};

// class NavBar extends Component {
//   render() {

//   }
// }

export default NavBar;
