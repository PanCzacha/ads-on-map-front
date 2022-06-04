import React from "react";
import "./Header.css";
import {Btn} from "../common/Button/Btn";
import {Search} from "../Search/Search";
import { Link } from "react-router-dom";

export const Header = () => {

    return (
        <header>
            <h1>
                <Link to="/"><strong>Mapa </strong> Ogłoszeń</Link>
            </h1>
            <Btn to="/add" text="Dodaj Ogłoszenie"/>
            <Search/>
        </header>
    )

}
