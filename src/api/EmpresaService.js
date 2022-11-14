const axios = require('axios');

export const EmpresaService = async (data) => {
	console.log(data);
	const config = {
		method: 'put',
		url: 'http://localhost:8181/cxf/actualizar/services/actualizar',
		headers: {
			'Content-Type': 'application/json',
			rut: data.rut,
            nombre: data.nombre,
            apellido: data.apellido,
            apellido2: data.apellido2,
            email: data.email,
            password: data.password,
            password2: data.password2,
            nombreKam: data.nombreKam,
            emailKam: data.emailKam,
            cargo: data.cargo,
            empresa: data.empresa,
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