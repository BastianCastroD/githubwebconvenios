import React, { useState } from "react";
import "../styles/FormClienteEmpresa.css";
import styles from "../styles/FormPacienteCliente.css";
import { EmpresaService } from "../api/EmpresaService";
import {
	Label,
	LabelReq,
	Inputs,
	GrupoInput
} from "../components/Formularios";
import Modal from "./Modal";
import ModalAlert from "./ModalAlert";
const initialForm = {
	rut: '',
  nombre: '',
  apellido: '',
  apellido2: '',
  user: '',
  passwd: '',
  kamConvenios: '',
  kamCorreo: '',
  cargo: '',
};

const FormClienteEmpresa = () => {
	const [msj, setMsj] = useState();
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

	const [showModal, setShowModal] = useState(false);
	const handleClose = () => {
		setShowModal(false);
	}

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
		console.log(JSON.parse(resp.length))
		handleClear();
		if (JSON.parse(resp.length) === 20) {
			setShowModal(true)
			setMsj("El Cliente Empresa ya existe")
		} else{
			setShowModal(true)
			setMsj("Cliente Empresa Creado")
		}
	};
	
	const handleClear = () => {
		setRegisterData(initialForm);
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
										name="apellido2"
										placeholder=""
										value={apellido2}
										onChange={onchange}
									/>
								</GrupoInput>							
							</div>
							<div class="col-6">
								<div className="contenedorTitulo">
									<label className="titulo">Informacion Cuenta</label>
								</div>
								<GrupoInput>
									<Label>Correo Electronico <LabelReq> *</LabelReq></Label>
									<Inputs
										type="email"
										placeholder="example@example.com"
										name="user"
										value={user}
										onChange={onchange}
									/>
								</GrupoInput>
								<GrupoInput>
									<Label>Contraseña <LabelReq> *</LabelReq></Label>
									<Inputs
										type="password"
										name="passwd"
										placeholder=""
										value={passwd}
										onChange={onchange}
									/>
									<div className="restriccionPass">
										La contraseña debe contener minimo 7 caracteres y un maximo de 20 caracteres, 
										se exige una letra, un numero y un caracter especial.
									</div>		
								</GrupoInput>							
							</div>
						</div>
						<div class="row">
							<div class="col-6">
								<div className="contenedorTitulo">
									<label className="titulo">Informacion KAM</label>
								</div>
								<GrupoInput>
									<Label>Nombre Kam <LabelReq> *</LabelReq></Label>
									<Inputs
										type="text"
										name="kamConvenios"
										placeholder=""
										value={kamConvenios}
										onChange={onchange}
									/>
								</GrupoInput>
								<GrupoInput>
									<Label>Correo Electronico Kam <LabelReq> *</LabelReq></Label>
									<Inputs
										type="email"
										name="kamCorreo"
										placeholder=""
										value={kamCorreo}
										onChange={onchange}
									/>
									<div className="CrearEmpresa">
										<button className="buttomCrearCuenta" type="button" onClick={onSubmit}>Crear Nuevo Cliente</button>
										<div className="CampoRequerido">
											<span>* Campos requeridos</span>
										</div>
									</div>
								</GrupoInput>
							</div>
							<div class="col-6">
								<div className="contenedorTitulo">
									<label className="titulo">Informacion Empresa</label>
								</div>
								<GrupoInput>
									<Label>Cargo <LabelReq> *</LabelReq></Label>
									<Inputs
										type="text"
										name="cargo"
										placeholder=""
										value={cargo}
										onChange={onchange}
									/>
								</GrupoInput>
								<GrupoInput>
									<Label>Empresa (s) <LabelReq> *</LabelReq></Label>
								</GrupoInput>
								{/* <select name="cars" id="cars">
									<option value="volvo">Volvo</option>
								</select> */}
							</div>
						</div>
					</div>
					<form className={styles.form}>
					</form>
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
		</main>
	);
}

export default FormClienteEmpresa;