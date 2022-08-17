import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  /* Pour créer un component il faut utiliser la commande "rsc" */
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Home />} />
        {/* path="*" fonctionne si l'url ne correspond à rien de déclaré au dessus */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
