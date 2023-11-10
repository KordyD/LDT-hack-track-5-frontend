import axios from 'axios';
import { URL } from '..';

interface PersonalDataResponse {
  employeeId: 0;
  imagePath: 'string';
  email: 'string';
  post: {
    postId: 0;
    companyId: 0;
    department: {
      departmentId: 0;
      companyId: 0;
      name: 'string';
    };
    name: 'string';
  };
  name: 'string';
  phone: 'string';
  socialNetwork: 'string';
  city: 'string';
  account: 0;
}

interface updateDate_Data {
  imagePath: 'string';
  name: 'string';
  phone: 'string';
  socialNetwork: 'string';
  city: 'string';
}

export const getPersonalData = async () => {
  const response: PersonalDataResponse = await axios.get(
    URL + '/personal-account'
  );
  return response;
};

export const updateDate = async (data: updateDate_Data) => {
  const response = await axios.post(URL + '/personal-account', data);
  return response;
};
