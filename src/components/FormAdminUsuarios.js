import React from "react";
import { NavLink } from "react-router-dom";
import { InputB } from "./Formularios";

import "../styles/AdminUsuarios.css";

const FormAdminUsuarios = () => {
    return (  
        <main>
            <NavLink to="/NuevoClienteEmpresa" >+ Agregar nuevo usuario</NavLink>
            <div class="container text-center">
			    <div class="row">
                    <div class="col">
                        <div className="contenedorTitulo">
                            <label className="titulo">Agregar Usuario</label>
                        </div>
                        <div id="notaLogin">
						    En esta seccion podra gregar un nuevo usuario al sistema.
					    </div>
                        <div>
                            <button className="buttonAgregarUsuario" type="button"> + Agregar Usuario</button>
                        </div>
                    </div>
                    <div class="col">
                        <div className="contenedorTitulo">
                            <label className="titulo">Eliminar Usuario</label>
                        </div>
                        <div id="notaLogin">
						    Para eliminar un usuario ingrese un "ID" que sea valido.
					    </div>
                        <div className="boxEliminar">
                            <InputB
								type="text"
							    name="eliminarUsuario"
								placeholder=""
								value=""    
							/>
                            <div className="boxButton">
                                <button className="buttonEliminar" type="button">Eliminar</button>
                            </div>
                        </div>
                    </div>
		        </div>
            </div>
        </main>
    );
}
 
export default FormAdminUsuarios;