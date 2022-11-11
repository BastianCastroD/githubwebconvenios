import React from "react";
import { Label, GrupoInput, InputH } from "./Formularios";
import { useLocation } from "react-router-dom";

const FormHome = () => {
	const ar = [{ rut: "273737373" }];
	console.log(ar[0].rut);
	const location = useLocation();
	console.log(location.pathname)
	const emailparam = location.pathname.split("/")
	console.log(emailparam[2])
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
									value={ar[0].rut}
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
									value="Bastian"
									readOnly
								/>
							</GrupoInput>
							<GrupoInput>
								<Label className="labelForm" htmlFor="">
									Apellido
								</Label>
								<InputH
									className="inputForm"
									type="text"
									value="Castro"
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
									value="948833456"
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
									value="Bastian@gmail.com"
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
