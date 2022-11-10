import React, { useState, useRef } from 'react';
import { LoginService } from '../../api/LoginService';
// import clientFetch from '../../lib/client-fetch';
// import { LoginService } from "../api/LoginService";
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import ReCAPTCHA from "react-google-recaptcha";
import { NavLink } from "react-router-dom";
import "../../styles/Login.css";
import {
	Label,
	LabelReq,
	Inputs,
} from "../Formularios";

const FormLogin = () => {
	const [btnValid] = useState(false);
	console.log(btnValid);

	const history = useNavigate();

	const captcha = useRef(null);

	const validCaptcha = () => {
		console.log(captcha.current);
		if(captcha.current.getValue()){
			console.log('El usuario no es un robot')
		}
		else {
			console.log('Por favor acepta el captcha')
		}
	}

	const [registerData, setRegisterData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = registerData;

	const onchange = (event) => {
		setRegisterData((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	// const fecth = async (payload) => {
	// 	const resp = await LoginService(payload);
	// 	console.log(resp);
	// }


	// Validaciones del Login
	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(registerData);
		history("/Home");
		//if (email === "prueba2@nuevamasvida.cl" && password === "11111111Aa+") {
		//	history("/Home");
        //  } else {
        //    console.log("Usuario invalido");
        //  }	
		const resp = await LoginService(registerData);
		console.log(resp);
	};

	return (
		<div className="row align-items-center">
			<div className="col-md-8">
				<div>
					<div className="contenedorTitulo">
						<label className="titulo">Usuarios Registrados</label>
					</div>
					<div id="notaLogin">
                 	 	Si tiene una cuenta, inicie sesión con su dirección de correo
                  		electrónico.
                	</div>
					<form className={styles.form} onSubmit={onSubmit}>
						<Label>
                  			Correo Electronico<LabelReq> *</LabelReq>
                		</Label>
						<Inputs
							type="text"
							placeholder=""
							name="email"
							value={email}
							onChange={onchange}
						/>
						<Label>
                  			Contraseña<LabelReq> *</LabelReq>
                		</Label>
						<Inputs
							type="password"
							name="password"
							placeholder=""
							value={password}
							onChange={onchange}
						/>
						<div className="recaptcha">
                  			<ReCAPTCHA 
								ref={captcha}
								sitekey="6Lek9tsiAAAAAOUyn_NBrROccYIf_-w38fsocNlN"
								onChange={validCaptcha}
							/>
                		</div>
						<div className='accionLogin'>
							<div className='botonLogin'>
								<button onClick={onSubmit} active={true}>Inicio Sesion</button>
							</div>
							<div className="olvidasteContraseña">
								<li id="li-contraseña">
									<NavLink to="/OlvidasteContraseña">
										¿Olvidaste tu contraseña?
									</NavLink>
								</li>
							</div>
							<div id="requerido">
								<span>* Campos requeridos</span>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default FormLogin