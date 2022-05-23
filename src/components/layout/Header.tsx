import React from "react";
import "./Header.css";
import {Btn} from "../common/Button/Btn";
import {Search} from "../Search/Search";

export const Header = () => (
    <header>
        <h1>
            <strong>Mapa </strong> Ogłoszeń
        </h1>
        <Btn text="Dodaj Ogłoszenie"/>
        <Search/>
    </header>
)
