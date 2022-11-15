const axios = require('axios');

export const ValidatePass = async (data) => {
	console.log(data);
	const config = {
		method: 'post',
		url: 'http://localhost:8181/cxf/validatepass/services/validatepass',
		headers: {
			'Content-Type': 'application/json',
			passwd: data,
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