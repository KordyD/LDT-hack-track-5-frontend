import axios from 'axios';
import { URL } from '..';

interface getAllTasksResponse {
  created: '2023-11-09T19:46:55.093Z';
  taskId: 0;
  companyId: 0;
  post: {
    postId: 0;
    companyId: 0;
    department: {
      departmentId: 0;
      companyId: 0;
      name: 'string';
    };
    name: 'string';
  };
  imagePath: 'string';
  name: 'string';
  description: 'string';
  levelDifficulty: 0;
  deadline: '2023-11-09T19:46:55.093Z';
  rate: 0;
}

interface addListOfTasksData {
  taskDTOList: [
    {
      postName: 'string';
      imagePath: 'string';
      name: 'string';
      description: 'string';
      levelDifficulty: 6;
      rate: 0;
    },
  ];
}

interface createStageData {
  name: 'string';
  levelDifficulty: 0;
  deadline: '2023-11-09T19:50:26.198Z';
  tasksId: [0];
}

interface createStageResponse {
  created: '2023-11-09T19:50:26.201Z';
  employeeId: 0;
  imagePath: 'string';
  companyId: 0;
  password: 'string';
  email: 'string';
  post: {
    postId: 0;
    companyId: 0;
    department: {
      departmentId: 0;
      companyId: 0;
      name: 'string';
    };
    name: 'string';
  };
  levelDifficulty: 0;
  name: 'string';
  phone: 'string';
  socialNetwork: 'string';
  city: 'string';
  roles: [
    {
      roleId: 0;
      companyId: 0;
      name: 'string';
    },
  ];
  stages: [
    {
      created: '2023-11-09T19:50:26.201Z';
      stageId: 0;
      companyId: 0;
      employeeId: 0;
      name: 'string';
      levelDifficulty: 0;
      testUrl: 'string';
      status: 'OPENED';
      deadline: '2023-11-09T19:50:26.201Z';
      timeFinish: '2023-11-09T19:50:26.201Z';
    },
  ];
  favouriteArticles: [
    {
      created: '2023-11-09T19:50:26.201Z';
      articleId: 0;
      companyId: 0;
      imagePath: 'string';
      department: {
        departmentId: 0;
        companyId: 0;
        name: 'string';
      };
      post: {
        postId: 0;
        companyId: 0;
        department: {
          departmentId: 0;
          companyId: 0;
          name: 'string';
        };
        name: 'string';
      };
      theme: 'string';
      information: 'string';
    },
  ];
  achievements: [
    {
      achievementId: 0;
      imagePath: 'string';
      title: 'string';
      description: 'string';
    },
  ];
  curatorId: 0;
  account: 0;
}

interface createInternData {
  name: 'string';
  email: 'string';
  postName: 'string';
  roleName: 'string';
  curatorEmail: 'string';
}

export const getAllTasks = async () => {
  const response: getAllTasksResponse[] = await axios.get(URL + `/hr/tasks`);
  return response;
};
export const addListOfTasks = async (data: addListOfTasksData) => {
  const response: getAllTasksResponse[] = await axios.post(
    URL + `/hr/tasks`,
    data
  );
  return response;
};
// Что это?
export const addListOfTasksBase = async (data: addListOfTasksData) => {
  const response: getAllTasksResponse[] = await axios.post(
    URL + `/hr/tasks/base`,
    data
  );
  return response;
};
export const createStage = async (internId: number, data: createStageData) => {
  const response: createStageResponse = await axios.post(
    URL + `/hr/interns/{internId}/stage`,
    data
  );
  return response;
};
export const createIntern = async (data: createInternData) => {
  const response: createStageResponse = await axios.post(
    URL + `/hr/intern`,
    data
  );
  return response;
};
// Точно ли тот тип возвращения?
export const getAllInterns = async () => {
  const response: createStageResponse[] = await axios.get(URL + `/hr/interns`);
  return response;
};
