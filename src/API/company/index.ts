import axios, { AxiosResponse } from 'axios';
import { post } from '../admin/interfaces.ts';
import { headers, URL } from '../index.ts';

export const getPosts = async () => {
  const response: AxiosResponse<post> = await axios.get(
    URL + `/company/posts`,
    { headers: { ...headers } }
  );
  return response.data;
};
