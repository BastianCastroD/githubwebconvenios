import React, { useState } from 'react';
import { LoginService } from '../../api/LoginService';
// import clientFetch from '../../lib/client-fetch';
// import { LoginService } from "../api/LoginService";
import styles from './styles.module.scss';

const FormLogin = () => {
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


	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(registerData);
		const resp = await LoginService(registerData);
		console.log(resp);
	};

	return (
		<div className="row align-items-center">
			<div className="col-md-8">
				<div>
					<form className={styles.form} onSubmit={onSubmit}>
						<input
							type="text"
							placeholder="email"
							name="email"
							value={email}
							onChange={onchange}
						/>
						<input
							type="password"
							name="password"
							placeholder="password"
							value={password}
							onChange={onchange}
						/>
						<button onClick={onSubmit}>send</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default FormLogin