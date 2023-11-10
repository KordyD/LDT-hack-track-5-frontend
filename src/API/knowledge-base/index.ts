import axios from 'axios';
import { URL } from '..';

// Чет не то
interface getAllQuestionsResponse {
  articleListResponseDTO: {
    id: 0;
    name: 'string';
  }[];
}
interface getAllFavoritesResponse {
  articleListResponseDTO: {
    id: 0;
    name: 'string';
  }[];
}
interface getAllArticles {
  articleListResponseDTO: {
    id: 0;
    name: 'string';
  }[];
}

export const addToFavorites = async (articleID: number) => {
  const response = await axios.post(
    URL + `/knowledge-base/favorites/articles/${articleID}`
  );
  return response;
};

export const deleteFromFavorites = async (articleID: number) => {
  const response = await axios.delete(
    URL + `/knowledge-base/favorites/articles/${articleID}`
  );
  return response;
};

// нет ответа
export const getAllVideo = async () => {
  const response = await axios.get(URL + `/knowledge-base/videos`);
  return response;
};
// нет ответа
export const getVideo = async (videoId: number) => {
  const response = await axios.get(URL + `/knowledge-base/videos/${videoId}`);
  return response;
};
// нет ответа
export const getAudio = async (audioId: number) => {
  const response = await axios.get(URL + `/knowledge-base/videos/${audioId}`);
  return response;
};
// нет ответа
export const getVideoByPost = async (postName: string) => {
  const response = await axios.get(URL + `/knowledge-base/videos/posts`);
  return response;
};
// нет ответа
export const getVideoByDepartment = async (departmentName: string) => {
  const response = await axios.get(URL + `/knowledge-base/videos/departments`);
  return response;
};

export const getAllQuestions = async () => {
  const response: getAllQuestionsResponse = await axios.get(
    URL + `/knowledge-base/questions`
  );
  return response;
};

// нет ответа
export const getQuestion = async (questionId: number) => {
  const response = await axios.get(
    URL + `/knowledge-base/questions/${questionId}`
  );
  return response;
};

// Нет ли ошибки в url?
export const getAllFavorites = async () => {
  const response: getAllFavoritesResponse = await axios.get(
    URL + `/knowledge-base/favourites/articles`
  );
  return response;
};

export const getAllArticles = async () => {
  const response: getAllFavoritesResponse = await axios.get(
    URL + `/knowledge-base/articles`
  );
  return response;
};

// Нет ответа
export const getArticle = async (articleId: number) => {
  const response = await axios.get(
    URL + `/knowledge-base/articles/${articleId}`
  );
  return response;
};

// Другой интерфейс подставил
export const getArticlesByPost = async (postName: string) => {
  const response: getAllArticles = await axios.get(
    URL + `/knowledge-base/articles/posts`
  );
  return response;
};
// Другой интерфейс подставил
export const getArticlesByDepartments = async (departmentName: string) => {
  const response: getAllArticles = await axios.get(
    URL + `/knowledge-base/articles/departments`
  );
  return response;
};
