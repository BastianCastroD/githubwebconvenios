import React, { useState } from "react";
import "../styles/FormClienteEmpresa.css";
import styles from "../styles/FormPacienteCliente.css";

const FormClienteEmpresa = () => {
	const [registerData, setRegisterData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = registerData;

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
							<input
								type="text"
								placeholder="name"
								name="name"
								value={name}
								onChange={onchange}
							/>
							<input
								type="text"
								placeholder="mail"
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
							<input
								type="password"
								name="password2"
								placeholder="repeat password"
								value={password2}
								onChange={onchange}
							/>
							<button type="submit">send</button>
						</form>
					</div>
				</div>
			</div>
		</main>
	);
}

export default FormClienteEmpresa;