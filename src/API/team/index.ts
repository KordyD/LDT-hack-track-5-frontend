import axios from 'axios';
import { URL } from '..';

interface getEmployeesWithFilterData {
  departmentName?: string;
  postName?: string;
  cityName?: string;
  employeeName?: string;
}
interface getEmployeesWithFilterResponse {
  employeeId: 0;
  name: 'string';
  city: 'string';
  postName: 'string';
  network: 'string';
  email: 'string';
  phone: 'string';
}

export const getEmployeesWithFilter = async (
  data: getEmployeesWithFilterData
) => {
  const response: getEmployeesWithFilterResponse[] = await axios.post(
    URL + `/team`
  );
  return response;
};
