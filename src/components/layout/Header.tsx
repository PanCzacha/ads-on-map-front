import React from "react";
import "./Header.css";
import {Btn} from "../common/Button/Btn";
import {Search} from "../Search/Search";

export const Header = () => {

    return (
        <header>
            <h1>
                <strong>Mapa </strong> Ogłoszeń
            </h1>
            <Btn to="/add" text="Dodaj Ogłoszenie"/>
            <Search/>
        </header>
    )

}
