import React, {useEffect, useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./pages/home";
import Shops from "./pages/shops";
import Create from "./pages/create";
import Dashboard from "./pages/dashboard";
import Dealership from "./pages/dealership";
import Color from "./pages/color";
import {ColorSchemaContext} from "./pages/color";


function App() {
    const [valueColor, setValueColor] = useState('#0088FE')

    useEffect(() => {
        document.body.style.background = valueColor;
    });

    return (
        <BrowserRouter>
            <ColorSchemaContext.Provider value={{valueColor, setValueColor}}>
                <NavBar/>
                <br/>
                <Routes>
                    <Route exact path="/" element={<Dashboard/>}/>
                    <Route exact path="/home" element={<Home/>}/>
                    <Route exact path="/shops" element={<Shops/>}/>
                    <Route exact path="/create" element={<Create/>}/>
                    <Route exact path="/dealership" element={<Dealership/>}/>
                    <Route exact path="/color" element={<Color/>}/>
                </Routes>
            </ColorSchemaContext.Provider>
        </BrowserRouter>
    );
}

export default App;
