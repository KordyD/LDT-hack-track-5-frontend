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

export const addStageToIntern = async ({ id, data }) => {
  const response: AxiosResponse<allTaskAndStage[]> = await axios.post(
    URL + `/curator/interns/${id}/stage`,
    data,
    { headers: { ...headers } }
  );
  return response.data;
};
