const axios = require('axios');

export const LoginService=async(user, password) => {
  const data = JSON.stringify({
    //"user":"user@email.com",
    //"password":"password"
    user,
    password
  });
  
  const config = {
    method: 'post',
    url: 'https://0ffaf6e6-3b1d-45c6-ae8d-7768095dc926.mock.pstmn.io/login',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  const response=axios(config)
  .then( ({data:outLoginModel})=> {
    console.log(outLoginModel);
    return JSON.stringify(data);
  })
  .catch( (error)=> {
    return error;
  });

  return response;
}
