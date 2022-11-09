import React from "react";
import { NavLink } from "react-router-dom";

import BarraOpciones from "../components/BarraOpciones";

const AdministrarUsuarios = () => {
    return (  
        <div>
            <BarraOpciones />
            <NavLink to="/NuevoClienteEmpresa" >+ Agregar nuevo usuario</NavLink>
            
        </div>
    );
}
 
export default AdministrarUsuarios;