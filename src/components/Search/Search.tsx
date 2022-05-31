import {Btn} from "../common/Button/Btn";
import React, {SyntheticEvent, useContext, useState} from "react";
import {SearchContext} from "../../contexts/searchContext";

export const Search = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [inputVal, setInputVal] = useState(search);

    const setSearchForLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    }

    return (
        <div className="search" onSubmit={setSearchForLocalState}>
            <form action="">
            <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
            <Btn text="Szukaj"/>
            </form>
        </div>
    )
}


