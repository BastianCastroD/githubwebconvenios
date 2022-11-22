import React, { useState } from "react";
import { PacienteService } from "../api/PacienteService";
import {
	Label,
	LabelReq,
	Inputs,
	GrupoInput,
	RestriccionPass,
} from "../components/Formularios";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import ModalAlert from "./ModalAlert";
import { ValidatePass } from "../api/ValidatePass";
const initialForm = {
	rut: '',
	ndocumento: '',
	nombre: '',
	apellido: '',
	apellido2: '',
	celular: '',
	user: '',
	passwd: '',
};
// import { Validate } from "../api/Validate";
// import { Validate } from "../api/Validate";

const FormPacienteCliente = () => {
	const [msj, setMsj] = useState();
	const [checkBox, setCheckbox] = useState(false);
	const [registerData, setRegisterData] = useState({
		rut: '',
		ndocumento: '',
		nombre: '',
		apellido: '',
		apellido2: '',
		celular: '',
		user: '',
		passwd: '',
		terminos: 'false'
	});
	const [showModal, setShowModal] = useState(false);
	const handleClose = () => {
		setShowModal(false);
	}

	const { rut, ndocumento, nombre, apellido, apellido2, celular, user, passwd } = registerData;

	const onchange = (event) => {
		setRegisterData((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));

	};

	// const validateData = async () => {
	// 	const { rut, ndocumento } = registerData;
	// 	console.log({ rut, ndocumento })
	// 	if (rut.length > 9 && ndocumento > 5) {

	// 		const resp = await Validate({ rut, serie: ndocumento });
	// 		return resp;
	// 	}
	// }
	// console.log(validateData())
	const handleClickRemember = (event) => {
		setCheckbox(!checkBox);
		setRegisterData((prev) => ({
			...prev,
			[event.target.name]: !checkBox,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(registerData.passwd);
		handleClear();
		const validatePassword = await ValidatePass(registerData.passwd)
		console.log(validatePassword.response);
		const a = [];
		a.push(validatePassword.response)
		console.log(a[0].data.msg)
		if (a[0].data.code === 500) {
			setShowModal(true)
			setMsj(a[0].data.msg)
			return
		} else {
			const resp = await PacienteService(registerData)
			console.log(JSON.parse(resp.length))
			if (JSON.parse(resp.length) === 20) {

				setShowModal(true)
				setMsj("El Paciente/Cliente ya existe")
			} else {
				setShowModal(true)
				setMsj("Paciente Cliente Creado")
			}
		}
	};

	const handleClear = () => {
		setRegisterData(initialForm);
	};

	return (
		<main>

			<div class="container text-center">
				<div class="row">
					<div class="col">
						<div className="contenedorTitulo">
							<label className="titulo">Informacion Personal</label>
						</div>
						<GrupoInput>
							<Label>RUT <LabelReq> *</LabelReq></Label>
							<Inputs
								type="text"
								placeholder="Sin punto ni guión"
								name="rut"
								value={rut}
								onChange={onchange}
							/>
						</GrupoInput>
						<GrupoInput>
							<Label>N° Documento <LabelReq> *</LabelReq></Label>
							<Inputs
								type="text"
								placeholder=""
								name="ndocumento"
								value={ndocumento}
								onChange={onchange}
							/>
						</GrupoInput>
						<GrupoInput>
							<Label>Nombre <LabelReq> *</LabelReq></Label>
							<Inputs
								type="text"
								name="nombre"
								placeholder=""
								value={nombre}
								onChange={onchange}
							/>
						</GrupoInput>
						<GrupoInput>
							<Label>1° Apellido <LabelReq> *</LabelReq></Label>
							<Inputs
								type="text"
								name="apellido"
								placeholder=""
								value={apellido}
								onChange={onchange}
							/>
						</GrupoInput>
						<GrupoInput>
							<Label>2° Apellido <LabelReq> *</LabelReq></Label>
							<Inputs
								type="text"
								placeholder=""
								name="apellido2"
								value={apellido2}
								onChange={onchange}
							/>
						</GrupoInput>
						<GrupoInput>
							<Label>Celular <LabelReq> *</LabelReq></Label>
							<Inputs
								type="text"
								placeholder="9 XXXX XXXX"
								name="celular"
								value={celular}
								onChange={onchange}
							/>
						</GrupoInput>						
					</div>
					<div class="col">
						<div className="contenedorTitulo">
							<label className="titulo">Informacion de la cuenta</label>
						</div>
						<GrupoInput>
							<Label>Correo Electronico <LabelReq> *</LabelReq></Label>
							<Inputs
								type="email"
								placeholder=""
								name="user"
								value={user}
								onChange={onchange}
							/>
						</GrupoInput>
						<GrupoInput>
							<Label>Contraseña <LabelReq> *</LabelReq></Label>
							<Inputs
								type="password"
								placeholder=""
								name="passwd"
								value={passwd}
								onChange={onchange}
							/>
							<RestriccionPass>
								La contraseña debe contener desde 7 a 20 caracteres, 
								se exige una letra, un numero y un caracter especial.
							</RestriccionPass>
						</GrupoInput>
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
						<div className="CrearPaciente">
							<button className="buttomCrearCuenta" type="button" onClick={onSubmit}>Confirmar Cuenta</button>
							<div className="CampoRequerido">
								<span>* Campos requeridos</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Modal showModal={showModal} onClick={handleClose} >

				<ModalAlert
					msj={msj}
					onClick={handleClose}
					onClickSecondary={() => setShowModal(false)}
					textBtn={"cancel"}
				/>
			</Modal>
		</main >
	);
}

export default FormPacienteCliente;