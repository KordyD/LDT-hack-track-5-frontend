import axios from 'axios';
import { URL } from '..';

interface registerData {
  name: 'string';
  email: 'string';
  password: 'string';
}

interface registerResponse {
  token: 'string';
}

interface registerCompanyData {
  companyDTO: {
    name: 'string';
    description: 'string';
    email: 'string';
    phone: 'string';
    website: 'string';
  };
  registrationAdminDTO: {
    name: 'string';
    email: 'string';
    password: 'string';
  };
}

interface registerCompanyResponse {
  companyDTO: {
    name: 'string';
    description: 'string';
    email: 'string';
    phone: 'string';
    website: 'string';
  };
  jwtResponseDTO: {
    token: 'string';
  };
}

interface loginData {
  email: 'string';
  password: 'string';
}

export const register = async (data: registerData) => {
  const response: registerResponse = await axios.post(
    URL + '/login/registration',
    data
  );
  return response;
};

export const registerCompany = async (data: registerCompanyData) => {
  const response: registerCompanyResponse = await axios.post(
    URL + '/login/company',
    data
  );
  return response;
};

export const login = async (data: loginData) => {
  const response: registerResponse = await axios.post(
    URL + '/login/authentication',
    data
  );
  return response;
};
