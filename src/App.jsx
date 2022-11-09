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
              <Route path="/" element={<Dashboard />} />
              <Route path="/home" element={<Home />} />
              <Route path="/shops" element={<Shops />} />
              <Route path="/create" element={<Create />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
