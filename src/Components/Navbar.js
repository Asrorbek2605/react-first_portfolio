import React from "react";
import BackImage from "../../src/images/home.jpg";
import styled from "styled-components";
import {Link} from "react-router-dom";
export default function Navbar (){
    return(
            <div className="home">
<div className="header-container">
    <nav>
        <div className="logoBtn">
            <Link to="/" >ITI</Link>
            <div className="btn">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
        <ul className="links">
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/blog">Blog</Link></li>
            <li> <Link to="/biography">Biography</Link></li>
            <li> <Link to="/interiors">Interiors</Link></li>
            <li> <Link to="/events">Events</Link></li>
            <li> <Link to="/contact">Contact</Link></li>
            <li> <Link to="/inspirations">Inspirations</Link></li>
        </ul>
    </nav>
</div>
            </div>
    )
}



