const axios = require('axios');

export const PacienteService = async (data) => {
	console.log(data);
	const config = {
		method: 'put',
		url: 'http://localhost:8181/cxf/actualizar/services/actualizarPaciente',
		headers: {
			'Content-Type': 'application/json',
			rut: data.rut,
			ndocumento: data.ndocumento,
			nombre: data.nombre,
			apellido: data.apellido,
			apellido2: data.apellido2,
			celular: data.celular,
			user: data.user,
			passwd: data.passwd,
		},
	};
	const response = axios(config)
		.then(({ data: outActualizar }) => {
			console.log(outActualizar);
			return JSON.stringify(outActualizar);
		})
		.catch((error) => {
			return error;
		});

	return response;
}