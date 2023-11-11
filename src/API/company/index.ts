import axios, { AxiosResponse } from 'axios';
import { department, post } from '../admin/interfaces.ts';
import { headers, URL } from '../index.ts';

export const getPosts = async () => {
  const response: AxiosResponse<post[]> = await axios.get(
    URL + `/company/posts`,
    { headers: { ...headers } }
  );
  return response.data;
};

export const getCompanyDep = async () => {
  const response: AxiosResponse<department> = await axios.get(
    URL + `/company/departments`,
    { headers: { ...headers } }
  );
  return response.data;
};

export const getCompanyRoles = async () => {
  const response: AxiosResponse<department> = await axios.get(
    URL + `/company/roles`,
    { headers: { ...headers } }
  );
  return response.data;
};
