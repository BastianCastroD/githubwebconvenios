//Importaciones//
import React, { useState } from "react";
import { LoginService } from "../api/LoginService";
import "../styles/Login.css";
import { Formik } from "formik";
import { useNavigate } from 'react-router-dom';
import {FormPaciente} from "../components/Formularios";
import FormLogin from "../components/FormLogin";
import Modal from "../components/Modal";
import ModalAlert from "../components/ModalAlert";

const Login = () => {
	const [showModal, setShowModal] = useState(false);
	const handleClose = () => {
		setShowModal(false);
	}
  const history = useNavigate();

  LoginService("user@email.com", "password");

  const onSubmit = async (e) => {
		history("/NuevoPacienteCliente");
	};

  return (
    <main>
      <Formik action="" >
        <FormPaciente>
					<FormLogin />
          <div>
            <div className="contenedorTitulo">
              <label className="titulo">Nuevo Paciente Cliente</label>
            </div>
            <div id="notaRegistro">
              Si no te encuentras registrado, puedes crear una cuenta a
              continuacion.
            </div>
            <div id="accionRegistro">
              <div id="botonRegistro">
                <button onClick={onSubmit}>Crear Cuenta</button>
                <button onClick={()=>setShowModal(true)} >kihi Cuentaaa</button>
              </div>
            </div>
          </div>
        </FormPaciente>
			</Formik>
			<Modal showModal={showModal} onClick={handleClose} >

				<ModalAlert
          msj="Incompleto"
          onClick={handleClose}
          onClickSecondary={()=>setShowModal(false)}
          textBtn={"cancel"}
        />
			</Modal>

    </main>
  );
};

export default Login;
