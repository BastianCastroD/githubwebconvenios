import React, { useState } from "react";
import "../styles/FormClienteEmpresa.css";
import styles from "../styles/FormPacienteCliente.css";
import {
	Label,
	LabelReq,
	Inputs
} from "../components/Formularios";

const FormClienteEmpresa = () => {
	const [registerData, setRegisterData] = useState({
		rutEmpresa: '',
		nombreEmpresa: '',
		apellidoEmpresa: '',
		emailEmpresa: '',
		nombreKam: '',
		emailKam: '',
		cargo: '',
		empresa: ''
	});

	const { rutEmpresa, nombreEmpresa, apellidoEmpresa, emailEmpresa, nombreKam, emailKam, cargo, empresa } = registerData;

	const onchange = (event) => {
		setRegisterData((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(registerData);
	};
	return (
		<main>
			<div className="row align-items-center">
				<div className="col-md-8">
					<div>
						<form className={styles.form} onSubmit={onSubmit}>
							<div className="contenedorTitulo">
								<label className="titulo">Informacion Personal</label>
							</div>
							<Label>RUT <LabelReq> *</LabelReq></Label>
							<Inputs
								type="text"
								placeholder=""
								name="rutEmpresa"
								value={rutEmpresa}
								onChange={onchange}
							/>
							<Label>Nombre <LabelReq> *</LabelReq></Label>
							<Inputs
								type="text"
								name="nombreEmpresa"
								placeholder=""
								value={nombreEmpresa}
								onChange={onchange}
							/>
							<Label>Apellido <LabelReq> *</LabelReq></Label>
							<Inputs
								type="text"
								name="apellidoEmpresa"
								placeholder=""
								value={apellidoEmpresa}
								onChange={onchange}
							/>
							<div className="contenedorTitulo">
								<label className="titulo">Informacion Cuenta</label>
							</div>
							<Label>Correo Electronico <LabelReq> *</LabelReq></Label>
							<Inputs
								type="text"
								placeholder=""
								name="emailEmpresa"
								value={emailEmpresa}
								onChange={onchange}
							/>
							<div className="contenedorTitulo">
								<label className="titulo">Informacion KAM</label>
							</div>
							<Label>Nombre Kam <LabelReq> *</LabelReq></Label>
							<Inputs
								type="text"
								name="nombreKam"
								placeholder=""
								value={nombreKam}
								onChange={onchange}
							/>
							<Label>Correo Electronico Kam <LabelReq> *</LabelReq></Label>
							<Inputs
								type="text"
								name="emailKam"
								placeholder=""
								value={emailKam}
								onChange={onchange}
							/>
							<div className="contenedorTitulo">
								<label className="titulo">Informacion Empresa</label>
							</div>
							<Label>Cargo <LabelReq> *</LabelReq></Label>
							<Inputs
								type="text"
								name="cargo"
								placeholder=""
								value={cargo}
								onChange={onchange}
							/>
							<Label>Empresa (s) <LabelReq> *</LabelReq></Label>
							<Inputs
								type="text"
								name="empresa"
								placeholder=""
								value={empresa}
								onChange={onchange}
							/>
							<button className="buttomCrearCuenta" type="submit">Crear Nuevo Cliente</button>
						</form>
					</div>
				</div>
			</div>
		</main>
	);
}

export default FormClienteEmpresa;