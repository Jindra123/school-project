import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./pages/home";
import Shops from "./pages/shops";
import Create from "./pages/create";
import Dashboard from "./pages/dashboard";


function App() {
  return (
      <BrowserRouter>
          <NavBar />
          <br />
          <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/shops" element={<Shops />} />
              <Route exact path="/create" element={<Create />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
