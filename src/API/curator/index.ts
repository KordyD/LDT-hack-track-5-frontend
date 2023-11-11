import axios, { AxiosResponse } from 'axios';
import { headers, URL } from '../index.ts';
import { allTaskAndStage } from '../hr/interfaces.ts';

export const getInternTasks = async (id) => {
  const response: AxiosResponse<allTaskAndStage[]> = await axios.get(
    URL + `/curator/interns/${id}/tasks`,
    { headers: { ...headers } }
  );
  return response.data;
};
