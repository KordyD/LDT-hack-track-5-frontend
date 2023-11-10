import axios, { AxiosResponse } from 'axios';
import { URL } from '..';
import { headers } from '../';
import { PersonalData, updatePersonal } from './interfaces';

export const getPersonalData = async () => {
  const response: AxiosResponse<PersonalData> = await axios.get(
    URL + '/personal-account',
    { headers: { ...headers } }
  );
  return response;
};

export const updatePersonalData = async (data: updatePersonal) => {
  const response: AxiosResponse<PersonalData> = await axios.post(
    URL + '/personal-account',
    data,
    { headers: { ...headers } }
  );
  return response.data;
};
