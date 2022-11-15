import React from "react";
import { Label, GrupoInput, InputH } from "./Formularios";
import { useLocation } from "react-router-dom";
import { HomeService } from "../api/HomeService";
//import { LoginService } from "../api/LoginService";
import { useEffect } from "react";

const FormHome = () => {

	const location = useLocation();
	console.log(location.pathname)

	const emailparam = location.pathname.split("/")
	console.log(emailparam[2])

	const home= async(email) =>{
		const response=await HomeService(email)
		const datosUsuarios = JSON.parse(response)
		console.log({datosUsuarios})
	}

	useEffect(() => {
		home(emailparam[2])
	})

	return (
		<main>
			<div className="container">
				<div className="row">
					<div className="col">
						<GrupoInput>
							<div className="contenedorTitulo">
								<label className="titulo">Informacion Personal</label>
							</div>
							<GrupoInput>
								<Label className="labelForm" htmlFor="">
									RUT
								</Label>
								<InputH
									className="inputForm"
									value={""}
									type="text"
									readOnly
								/>
							</GrupoInput>
							<GrupoInput>
								<Label className="labelForm" htmlFor="">
									Nombre
								</Label>
								<InputH
									className="inputForm"
									type="text"
									value={""}
									readOnly
								/>
							</GrupoInput>
							<GrupoInput>
								<Label className="labelForm" htmlFor="">
									1° Apellido
								</Label>
								<InputH
									className="inputForm"
									type="text"
									value={""}
									readOnly
								/>
							</GrupoInput>
							<GrupoInput>
								<Label className="labelForm" htmlFor="">
									2° Apellido
								</Label>
								<InputH
									className="inputForm"
									type="text"
									value={""}
									readOnly
								/>
							</GrupoInput>
							<GrupoInput>
								<Label className="labelForm" htmlFor="">
									Numero de Telefono
								</Label>
								<InputH
									className="inputForm"
									type="text"
									value={""}
									readOnly
								/>
							</GrupoInput>
						</GrupoInput>{" "}
					</div>
					<div className="col">
						<GrupoInput>
							<div className="contenedorTitulo">
								<label className="titulo">Informacion de la Cuenta</label>
							</div>
							<GrupoInput>
								<Label className="labelForm" htmlFor="">
									Correo Electronico
								</Label>
								<InputH
									className="inputForm"
									type="text"
									value={""}
									readOnly
								/>
							</GrupoInput>
						</GrupoInput>{" "}
					</div>
				</div>
			</div>
		</main>
	);
};

export default FormHome;
