import React from "react";
import "./Header.css";
import {Btn} from "../common/Btn";

export const Header = () => (
    <header>
        <h1>
            <strong>Mapa </strong> Ogłoszeń
        </h1>
       <Btn text="Dodaj Ogłoszenie"/>
        <div className="search">
            <input type="text"/>
            <Btn text="Szukaj"/>
        </div>
    </header>
)
