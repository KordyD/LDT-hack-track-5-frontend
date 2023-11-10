import axios, { AxiosResponse } from 'axios';
import { URL } from '..';
import { headers } from '../';
import { employee } from '../hr/interfaces';
import { Article } from '../knowledge-base/interfaces';
import {
  addMedia,
  articleData,
  company,
  department,
  departmentData,
  employeeData,
  mediaFull,
  post,
  postData,
  product,
  productData,
  question,
  questionData,
} from './interfaces';

export const addVideos = async (data: addMedia[]) => {
  const response: AxiosResponse<mediaFull[]> = await axios.post(
    URL + `/admin/company/videos`,
    data,
    { headers: { ...headers } }
  );
  return response.data;
};

export const addOneVideo = async (data: addMedia) => {
  const response: AxiosResponse<mediaFull[]> = await axios.post(
    URL + `/admin/company/video`,
    data,
    { headers: { ...headers } }
  );
  return response.data;
};

export const addAudios = async (data: addMedia[]) => {
  const response: AxiosResponse<mediaFull[]> = await axios.post(
    URL + `/admin/company/audios`,
    data,
    { headers: { ...headers } }
  );
  return response.data;
};

export const addOneAudio = async (data: addMedia) => {
  const response: AxiosResponse<mediaFull[]> = await axios.post(
    URL + `/admin/company/audio`,
    data,
    { headers: { ...headers } }
  );
  return response.data;
};
export const addQuestions = async (data: questionData[]) => {
  const response: AxiosResponse<question[]> = await axios.post(
    URL + `/admin/company/questions`,
    data,
    { headers: { ...headers } }
  );
  return response.data;
};

export const addArticle = async (data: articleData) => {
  const response: AxiosResponse<Article[]> = await axios.post(
    URL + `/admin/company/article`,
    data,
    { headers: { ...headers } }
  );
  return response.data;
};

export const addArticles = async (data: articleData[]) => {
  const response: AxiosResponse<Article[]> = await axios.post(
    URL + `/admin/company/articles`,
    data,
    { headers: { ...headers } }
  );
  return response.data;
};

export const addProducts = async (data: productData[]) => {
  const response: AxiosResponse<product[]> = await axios.post(
    URL + `/admin/company/products`,
    data,
    { headers: { ...headers } }
  );
  return response.data;
};

export const addPosts = async (data: postData[]) => {
  const response: AxiosResponse<post[]> = await axios.post(
    URL + `/admin/company/posts`,
    data,
    { headers: { ...headers } }
  );
  return response.data;
};

export const addListOfEmployees = async (data: employeeData[]) => {
  const response: AxiosResponse<employee[]> = await axios.post(
    URL + `/admin/company/employees`,
    data,
    { headers: { ...headers } }
  );
  return response.data;
};

export const addListOfDepartments = async (data: departmentData[]) => {
  const response: AxiosResponse<department[]> = await axios.post(
    URL + `/admin/company/posts`,
    data,
    { headers: { ...headers } }
  );
  return response.data;
};

export const getCompany = async () => {
  const response: AxiosResponse<company> = await axios.get(
    URL + `/admin/company/`,
    { headers: { ...headers } }
  );
  return response.data;
};
