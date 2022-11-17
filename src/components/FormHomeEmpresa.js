import React, { useEffect, useState } from "react";
import { Label, GrupoInput, InputH } from "./Formularios";
import { Route, useLocation } from "react-router-dom";
import { HomeServiceEmpresa } from "../api/HomeServiceEmpresa";
//import { LoginService } from "../api/LoginService";

const FormHome = () => {
	const [initialState, setInitialState] = useState({
		rut: '',
		nombre: '',
		apellido: '',
		apellido2: '',
		user: '',
		kamConvenios: '',
		kamCorreo: '',
		cargo: '',
	})
	const location = useLocation();

	const emailparam = location.pathname.split("/")
	console.log(emailparam[2])

	const home = async (email) => {
		const response = await HomeServiceEmpresa(email)
		const datosUsuarios = JSON.parse(response)
		console.log(datosUsuarios.usuario[0].apellido)
        const { rut, nombre, apellido, apellido2, user, kamConvenios, kamCorreo, cargo } = datosUsuarios.usuario[0];
		setInitialState({
			rut: rut,
            nombre: nombre,
            apellido: apellido,
            apellido2: apellido2,
            user: user,
            kamConvenios: kamConvenios,
            kamCorreo: kamCorreo,
            cargo: cargo,
        })
	}
	useEffect(() => {
		home(emailparam[2])
	}, [])

    return (
		<main>
			<div className="row align-items-center">
				<div>
					<div class="container text-center">
						<div class="row">
							<div class="col-6">
								<div className="contenedorTitulo">
									<label className="titulo">Informacion Personal</label>
								</div>
								<GrupoInput>
									<Label>RUT</Label>
									<InputH
									className="inputForm"
									value={initialState.rut}
									type="text"
									readOnly
								/>
								</GrupoInput>
								<GrupoInput>
									<Label>Nombre</Label>
									<InputH
									className="inputForm"
									type="text"
									value={initialState.nombre}
									readOnly
								/>
								</GrupoInput>
								<GrupoInput>
									<Label>1° Apellido </Label>
									<InputH
									className="inputForm"
									type="text"
									value={initialState.apellido}
									readOnly
								/>
								</GrupoInput>
								<GrupoInput>
									<Label>2° Apellido </Label>
									<InputH
									className="inputForm"
									type="text"
									value={initialState.apellido2}
									readOnly
								/>
								</GrupoInput>							
							</div>
							<div class="col-6">
								<div className="contenedorTitulo">
									<label className="titulo">Informacion Cuenta</label>
								</div>
								<GrupoInput>
									<Label>Correo Electronico</Label>
									<InputH
									className="inputForm"
									type="text"
									value={initialState.user}
									readOnly
								/>
								</GrupoInput>
								<GrupoInput>
									<Label>Contraseña</Label>
									<InputH
									className="inputForm"
									type="text"
									value={initialState.passwd}
									readOnly
								/>
								</GrupoInput>							
							</div>
						</div>
						<div class="row">
							<div class="col-6">
								<div className="contenedorTitulo">
									<label className="titulo">Informacion KAM</label>
								</div>
								<GrupoInput>
									<Label>Nombre Kam </Label>
									<InputH
									className="inputForm"
									type="text"
									value={initialState.kamConvenios}
									readOnly
								/>
								</GrupoInput>
								<GrupoInput>
									<Label>Correo Electronico Kam </Label>
									<InputH
									className="inputForm"
									type="text"
									value={initialState.kamCorreo}
									readOnly
								/>
								</GrupoInput>
							</div>
							<div class="col-6">
								<div className="contenedorTitulo">
									<label className="titulo">Informacion Empresa</label>
								</div>
								<GrupoInput>
									<Label>Cargo </Label>
									<InputH
									className="inputForm"
									type="text"
									value={initialState.cargo}
									readOnly
								/>
								</GrupoInput>
								<GrupoInput>
									<Label>Empresa (s)</Label>
								</GrupoInput>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default FormHome;