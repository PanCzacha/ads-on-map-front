import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Header} from "./components/layout/Header";
import {Map} from "./components/Map/Map";
import {AddForm} from "./components/AddForm/AddForm";
import {SearchContext} from './contexts/searchContext';


export const App = () => {
    const [search, setSearch] = useState('');

    return (
        <>
            <SearchContext.Provider value={{search, setSearch}}>
                <Header/>
                    <Routes>
                        <Route path="/" element={<Map/>}/>
                        <Route path="/add" element={<AddForm/>}/>
                    </Routes>
            </SearchContext.Provider>
        </>
    );
}

