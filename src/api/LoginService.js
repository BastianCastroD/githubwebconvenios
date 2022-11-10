const axios = require('axios');

export const LoginService = async ({ user, passwd }) => {
	const data = JSON.stringify({
		//"user":"user@email.com",
		//"password":"password"
		user,
		passwd
	});
	const config = {
		method: 'post',
		url: 'http://150.100.253.61:8181/cxf/usuarios/services/login',
		headers: {
			'Content-Type': 'application/json',
			user: user,
			passwd: passwd
		},
	};
	const response = axios(config)
		.then(({ data: outLoginModel }) => {
			console.log(outLoginModel);
			return JSON.stringify(data);
		})
		.catch((error) => {
			return error;
		});

	return response;
}
