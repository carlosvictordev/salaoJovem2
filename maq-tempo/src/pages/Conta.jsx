import "../styles/Home.css";
import NavBar from "../pages/elements/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faHouse, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { Link } from "react-router-dom";
import NavBarPhone from "./elements/NavbarPhone";


function Conta(){
    return(
        <>
        <div className="container5">
        <NavBar/>
        <NavBarPhone/>
        <div className="conta-geral">
            <div className="user">
            <p><FontAwesomeIcon icon={faUser} /></p></div>
            <div className="options">
                <div className="first-options">
                    <p>Conta</p>
                    <div className="option">Sua conta</div>
                    <div className="option">Histórico</div>
                </div>

                <div className="secundary-options">
                    <p>Suporte</p>
                    <div className="option">Configurações</div>
                    <div className="option">Privacidade</div>
                    <div className="option">About</div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Conta;