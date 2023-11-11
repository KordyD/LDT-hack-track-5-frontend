import axios, { AxiosResponse } from 'axios';
import { URL } from '..';
import { headers } from '../';
import { EmployeeData } from '../personal-account/interfaces';
import { employeeTeam } from './interfaces';

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
  const response: AxiosResponse<employeeTeam[]> = await axios.get(
    URL + `/team`,
    {
      headers: { ...headers },
    }
  );
  return response.data;
};

export const getInternById = async (id: number) => {
  const response: AxiosResponse<EmployeeData> = await axios.get(
    URL + `/team/${id}`,
    { headers: { ...headers } }
  );
  return response.data;
};
