import "../styles/Home.css";
import NavBar from "../pages/elements/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faHouse, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { Link } from "react-router-dom";


function Conta(){
    return(
        <>
        <div className="container5">
        <NavBar/>
        </div>
        </>
    )
}
export default Conta;