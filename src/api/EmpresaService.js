const axios = require('axios');

export const EmpresaService = async (data) => {
	console.log(data);
	const config = {
		method: 'put',
		url: 'http://localhost:8181/cxf/actualizarEmpresa/services/actualizarEmpresa',
		headers: {
			'Content-Type': 'application/json',
			rut: data.rut,
			nombre: data.nombre,
			apellido: data.apellido,
			apellido2: data.apellido2,
			user: data.user,
			passwd: data.passwd,
			kamConvenios: data.kamConvenios,
			kamCorreo: data.kamCorreo,
			cargo: data.cargo,
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