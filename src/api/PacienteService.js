const axios = require('axios');

export const PacienteService = async (data) => {
	console.log(data);
	const config = {
		method: 'put',
		url: 'http://localhost:8181/cxf/actualizar/services/actualizar',
		headers: {
			'Content-Type': 'application/json',
			rut: data.rut,
            nDocumento: data.nDocumento,
            nombre: data.nombre,
            apellido: data.apellido,
            apellido2: data.apellido2,
            celular: data.celular,
            email: data.email,
            password: data.password,
            password2: data.password2,
            terminos: data.terminos,
		},
	};
	const response = axios(config)
		.then(({ data: outLoginModel }) => {
			console.log(outLoginModel);
			return JSON.stringify(outLoginModel);
		})
		.catch((error) => {
			return error;
		});

	return response;
}