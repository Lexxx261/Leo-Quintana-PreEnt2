import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="assets/img/logo-emm.png"
            alt="Logo"
            width="120"
            height="120"
            className="d-inline-block align-center"/> Eme Studio</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/category/1">
                Diseño
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/2">
                Gestión
              </Link>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
