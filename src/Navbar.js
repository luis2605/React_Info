import React from "react";
import NavIcon from "./img/logo.svg"
import "./Navbar.css"
import"./var.css"

export default function Navbar(){
    return(
        <nav className="navigation">
            <div className="left">
                <img className="nav--icon" src={NavIcon} alt="React logo"></img>
                <h3 className="nav--logo_text">React Facts</h3>
            </div>
            <div className="right">

                <h4 className="nav--title">React Course - Project 1</h4>
            </div>
        </nav>
    )
}