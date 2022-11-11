import React, { useState } from "react";
import styles from "../styles/FormPacienteCliente.css";
import {
	Label,
	LabelReq,
	Inputs
} from "../components/Formularios";
import { NavLink } from "react-router-dom";

const FormPacienteCliente = () => {
	const [checkBox, setCheckbox] = useState(false);
	const [registerData, setRegisterData] = useState({
		rut: '',
		nDocumento: '',
		nombre: '',
		apellido: '',
		apellido2: '',
		celular: '',
		email: '',
		password: '',
		password2: '',
		terminos: 'false'
	});

	const { rut, nDocumento, nombre, apellido, apellido2, celular, email, password, password2 } = registerData;

	const onchange = (event) => {
		setRegisterData((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};
	const handleClickRemember = (event) => {
		setCheckbox(!checkBox);
		setRegisterData((prev) => ({
			...prev,
			[event.target.name]: !checkBox,
		}));
	};

	const onSubmit =(e) => {
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
								name="rut"
								value={rut}
								onChange={onchange}
							/>
							<Label>N° Documento <LabelReq> *</LabelReq></Label>
							<Inputs
								type="text"
								placeholder=""
								name="nDocumento"
								value={nDocumento}
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
								placeholder=""
								name="apellido2"
								value={apellido2}
								onChange={onchange}
							/>
							<Label>Celular <LabelReq> *</LabelReq></Label>
							<Inputs
								type="text"
								placeholder=""
								name="celular"
								value={celular}
								onChange={onchange}
							/>
							<div className="contenedorTitulo">
								<label className="titulo">Informacion de la cuenta</label>
							</div>
							<Label>Correo Electronico <LabelReq> *</LabelReq></Label>
							<Inputs
								type="text"
								placeholder=""
								name="email"
								value={email}
								onChange={onchange}
							/>
							<Label>Contraseña <LabelReq> *</LabelReq></Label>
							<Inputs
								type="text"
								placeholder=""
								name="password"
								value={password}
								onChange={onchange}
							/>
							<Label>Repetir contraseña <LabelReq> *</LabelReq></Label>
							<Inputs
								type="text"
								placeholder=""
								name="password2"
								value={password2}
								onChange={onchange}
							/>
							<div className="boxTerminos">
								<input
									type="checkbox"
									name="terminos"
									value={checkBox}
									checked={checkBox}
									onChange={handleClickRemember}
								/>
								<div className="aceptoTerminos">
									<p> Acepto los <NavLink className="navTerminos" to="">Terminos y condiciones</NavLink></p>
								</div>
							</div>
							<button className="buttomCrearCuenta" type="submit">Crear Cuenta</button>
						</form>
					</div>
				</div>
			</div>
		</main>
	);
}

export default FormPacienteCliente;