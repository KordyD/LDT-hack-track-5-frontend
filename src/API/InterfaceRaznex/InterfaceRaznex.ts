export interface IRegisterAdmin {
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

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
  againpassword: string;
}
