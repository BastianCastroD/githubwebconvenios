import React, { useState } from "react";
import "../styles/FormClienteEmpresa.css";
import styles from "../styles/FormPacienteCliente.css";
import { EmpresaService } from "../api/EmpresaService";
import {
	Label,
	LabelReq,
	Inputs
} from "../components/Formularios";

const FormClienteEmpresa = () => {
	const [registerData, setRegisterData] = useState({
		rut: '',
		nombre: '',
		apellido: '',
		apellido2: '',
		user: '',
		passwd: '',
		kamConvenios: '',
		kamCorreo: '',
		cargo: '',
	});

	const { rut, nombre, apellido, apellido2, user, passwd, kamConvenios, kamCorreo, cargo } = registerData;

	const onchange = (event) => {
		setRegisterData((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	const clienteEmpresa = async (data) => {
		const resp = await EmpresaService()
		return resp
	}

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(registerData);
		clienteEmpresa(registerData)
		const resp = await EmpresaService(registerData)
		console.log(resp)
	};

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
								<Label>RUT <LabelReq> *</LabelReq></Label>
								<Inputs
									type="text"
									placeholder=""
									name="rut"
									value={rut}
									onChange={onchange}
								/>
								<Label>Nombre <LabelReq> *</LabelReq></Label>
								<Inputs
									type="text"
									name="nombre"
									placeholder=""
									value={nombre}
									onChange={onchange}
								/>
								<Label>1° Apellido <LabelReq> *</LabelReq></Label>
								<Inputs
									type="text"
									name="apellido"
									placeholder=""
									value={apellido}
									onChange={onchange}
								/>
								<Label>2° Apellido <LabelReq> *</LabelReq></Label>
								<Inputs
									type="text"
									name="apellido2"
									placeholder=""
									value={apellido2}
									onChange={onchange}
								/>							</div>
							<div class="col-6">
								<div className="contenedorTitulo">
									<label className="titulo">Informacion Cuenta</label>
								</div>
								<Label>Correo Electronico <LabelReq> *</LabelReq></Label>
								<Inputs
									type="text"
									placeholder=""
									name="user"
									value={user}
									onChange={onchange}
								/>
								<Label>Contraseña <LabelReq> *</LabelReq></Label>
								<Inputs
									type="text"
									name="passwd"
									placeholder=""
									value={passwd}
									onChange={onchange}
								/>							</div>
						</div>
						<div class="row">
							<div class="col-6">
								<div className="contenedorTitulo">
									<label className="titulo">Informacion KAM</label>
								</div>
								<Label>Nombre Kam <LabelReq> *</LabelReq></Label>
								<Inputs
									type="text"
									name="kamConvenios"
									placeholder=""
									value={kamConvenios}
									onChange={onchange}
								/>
								<Label>Correo Electronico Kam <LabelReq> *</LabelReq></Label>
								<Inputs
									type="text"
									name="kamCorreo"
									placeholder=""
									value={kamCorreo}
									onChange={onchange}
								/>							</div>
							<div class="col-6">
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
									name="cargo"
									placeholder=""
									value={cargo}
									onChange={onchange}
								/>
								<button className="buttomCrearCuenta" type="button" onClick={onSubmit}>Crear Nuevo Cliente</button>							</div>
						</div>
					</div>
					<form className={styles.form}>
					</form>
				</div>
			</div>
		</main>
	);
}

export default FormClienteEmpresa;