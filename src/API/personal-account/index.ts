import axios, { AxiosResponse } from 'axios';
import { URL } from '..';
import { headers } from '../';
import { EmployeeData, updatePersonal } from './interfaces';

export const getPersonalData = async () => {
  const response: AxiosResponse<EmployeeData> = await axios.get(
    URL + '/personal-account',
    { headers: { ...headers } }
  );
  return response.data;
};

export const updatePersonalData = async (data: updatePersonal) => {
  const response: AxiosResponse<EmployeeData> = await axios.put(
    URL + '/personal-account',
    data,
    { headers: { ...headers } }
  );
  return response.data;
};
