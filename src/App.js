/* Importaciones de componentes */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import "./api/ConexionApi";
import Navbar from "./components/Navbar";
import Login from "./screens/Login";
import Home from "./screens/Home";
import OlvidasteContraseña from "./screens/OlvidasteContraseña";
import NuevoPacienteCliente from "./screens/NuevoPacienteCliente";
import AdministrarUsuarios from "./screens/AdministrarUsuarios";
import AdministrarRoles from "./screens/AdministrarRoles";
import NuevoClienteEmpresa from "./screens/NuevoClienteEmpresa";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/OlvidasteContraseña" element={<OlvidasteContraseña />} />
        <Route exact path="/NuevoPacienteCliente" element={<NuevoPacienteCliente />} />
        <Route exact path="/AdministrarUsuarios" element={<AdministrarUsuarios />} />
        <Route exact path="/AdministrarRoles" element={<AdministrarRoles />} />
        <Route exact path="/NuevoClienteEmpresa" element={<NuevoClienteEmpresa />} />
      </Routes>
    </BrowserRouter>
  );
}