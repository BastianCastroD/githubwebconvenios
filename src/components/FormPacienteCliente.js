import React, { useState } from "react";
import { PacienteService } from "../api/PacienteService";
import {
	Label,
	LabelReq,
	Inputs
} from "../components/Formularios";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import ModalAlert from "./ModalAlert";
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

	const clientePaciente = async (data) => {
		const resp = await PacienteService()
		return resp
	}

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(registerData);
		clientePaciente(registerData)
		const resp = await PacienteService(registerData)
		console.log(JSON.parse(resp.length))
		if (JSON.parse(resp.length) === 20) {

			setShowModal(true)
			setMsj("El Paciente/Cliente ya existe")
		} else {
			setShowModal(true)
			setMsj("Paciente Cliente Creado")
		}
	};

	return (
		<main>

			<div class="container text-center">
				<div class="row">
					<div class="col">
						<div className="contenedorTitulo">
							<label className="titulo">Informacion Personal</label>
						</div>
						<div class="d-flex flex-row mb-3">
							<Label>RUT <LabelReq> *</LabelReq></Label>
						</div>
						<Inputs
							type="text"
							placeholder=""
							name="rut"
							value={rut}
							onChange={onchange}
						/>
						<div class="d-flex flex-row mb-3">
							<Label>N° Documento <LabelReq> *</LabelReq></Label>
						</div>
						<Inputs
							type="text"
							placeholder=""
							name="ndocumento"
							value={ndocumento}
							onChange={onchange}
						/>
						<div class="d-flex flex-row mb-3">
							<Label>Nombre <LabelReq> *</LabelReq></Label>
						</div>
						<Inputs
							type="text"
							name="nombre"
							placeholder=""
							value={nombre}
							onChange={onchange}
						/>
						<div class="d-flex flex-row mb-3">
							<Label>1° Apellido <LabelReq> *</LabelReq></Label>
						</div>
						<Inputs
							type="text"
							name="apellido"
							placeholder=""
							value={apellido}
							onChange={onchange}
						/>
						<div class="d-flex flex-row mb-3">
							<Label>2° Apellido <LabelReq> *</LabelReq></Label>
						</div>
						<Inputs
							type="text"
							placeholder=""
							name="apellido2"
							value={apellido2}
							onChange={onchange}
						/>
						<div class="d-flex flex-row mb-3">
							<Label>Celular <LabelReq> *</LabelReq></Label>
						</div>
						<Inputs
							type="text"
							placeholder=""
							name="celular"
							value={celular}
							onChange={onchange}
						/>						</div>
					<div class="col">
						<div className="contenedorTitulo">
							<label className="titulo">Informacion de la cuenta</label>
						</div>
						<div class="d-flex flex-row mb-3">
							<Label>Correo Electronico <LabelReq> *</LabelReq></Label>
						</div>
						<Inputs
							type="text"
							placeholder=""
							name="user"
							value={user}
							onChange={onchange}
						/>
						<div class="d-flex flex-row mb-3">
							<Label>Contraseña <LabelReq> *</LabelReq></Label>
						</div>
						<Inputs
							type="password"
							placeholder=""
							name="passwd"
							value={passwd}
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
						<button className="buttomCrearCuenta" type="button" onClick={onSubmit}>Crear Cuenta</button>
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