import React from "react";
import { useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import './Header.css';

function Header(){

  
  



    return (
        <div className="navheader" >
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">TechEdu Education Center</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/add" className="nav-link">Add New Student</Link>
                  </li>
                  
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button  className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
    )
}

export default Header;