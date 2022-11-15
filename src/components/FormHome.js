import React, { useState } from "react";
import { Label, GrupoInput, InputH } from "./Formularios";
import { useLocation } from "react-router-dom";
import { HomeService } from "../api/HomeService";
//import { LoginService } from "../api/LoginService";

const FormHome = () => {
	const [initialState, setInitialState] = useState({
		nombre: '',
		rut: '',
		apellido: '',
		apellido2: '',
		email: '',
		celular: '',
	})
	const location = useLocation();
	console.log(location.pathname)

	const emailparam = location.pathname.split("/")
	console.log(emailparam[2])

	const home = async (email) => {
		const response = await HomeService(email)
		const datosUsuarios = JSON.parse(response)
		console.log(datosUsuarios.usuario[0].apellido)
		const { rut, nombre, apellido, apellido2, correo, celular } = datosUsuarios.usuario[0];
		setInitialState({
			rut: rut,
			nombre: nombre,
			apellido: apellido,
			apellido2: apellido2,
			email: correo,
			celular
		})
	}
	home(emailparam[2])
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
									value={initialState.rut}
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
									value={initialState.nombre}
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
									value={initialState.apellido}
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
									value={initialState.apellido2}
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
									value={initialState.celular}
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
									value={initialState.email}
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
