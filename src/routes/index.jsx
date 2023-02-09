import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../pages/Home";
import ProdutosPage from "../pages/ProdutosPages/pagePrincipal";
import TestePage from '../pages/Teste/teste';



const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/produtos" element={<ProdutosPage />} />
          <Route exact path="/produtost" element={<TestePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
