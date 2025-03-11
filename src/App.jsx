import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Components/Pages/Login/Login.jsx";
import Reembolsos from "./Components/Pages/Reembolsos/Reembolsos.jsx";
import Solicitacao from "./Components/Pages/Solicitacao/Solicitacao.jsx";
import "./globalStyled.scss"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/reembolsos" element={<Reembolsos/>} />
        <Route path="/solicitacao" element={<Solicitacao/>} />
      </Routes>
    </BrowserRouter>
  );
}
