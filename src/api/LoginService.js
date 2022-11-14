const axios = require('axios');

export const LoginService = async (data) => {
	console.log(data);
	// const data = JSON.stringify({
	// 	//"user":"user@email.com",
	// 	//"password":"password"
	// 	user,
	// 	passwd
	// });
	const config = {
		method: 'post',
		url: 'http://localhost:8181/cxf/usuarios/services/login',
		headers: {
			'Content-Type': 'application/json',
			user: data.email,
			passwd: data.password
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
