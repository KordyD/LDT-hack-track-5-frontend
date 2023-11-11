import axios, { AxiosResponse } from 'axios';
import { URL } from '..';
import { headers } from '../';
import { post } from '../admin/interfaces.ts';
import { media } from '../knowledge-base/interfaces.ts';
import { employeeIntern, employeeTeam } from './interfaces';

interface queryParams {
  departmentName?: string;
  postName?: string;
  cityName?: string;
  employeeName?: string;
}

export const getEmployeesWithFilter = async (data: queryParams) => {
  const response: AxiosResponse<employeeTeam[]> = await axios.post(
    URL +
      `/team?departmentName=${data.departmentName}&postName=${data.postName}&cityName=${data.cityName}&employeeName=${data.employeeName}`,
    { headers: { ...headers } }
  );
  return response.data;
};

export const getTeam = async () => {
  const response: AxiosResponse<employeeTeam> = await axios.get(URL + `/team`, {
    headers: { ...headers },
  });
  return response.data;
};

export const getInternById = async (id) => {
  const response: AxiosResponse<employeeIntern> = await axios.get(
    URL + `/team/${id}`,
    { headers: { ...headers } }
  );
  return response.data;
};
