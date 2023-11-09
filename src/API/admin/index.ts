import axios from 'axios';
import { URL } from '..';

interface addVideosData {
  videoDTOList: [
    {
      postName: 'string';
      url: 'string';
      name: 'string';
      description: 'string';
    },
  ];
}

interface addVideosResponse {
  created: '2023-11-09T19:55:31.064Z';
  videoId: 0;
  companyId: 0;
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
  url: 'string';
  name: 'string';
  description: 'string';
}

interface addOneQuestionData {
  questionsDTO: [
    {
      imagePath: 'string';
      theme: 'string';
      answer: 'string';
    },
  ];
}

interface addOneQuestionResponse {
  questionId: 0;
  companyId: 0;
  imagePath: 'string';
  theme: 'string';
  answer: 'string';
}

interface addOneProductData {
  productsDTO: [
    {
      imagePath: 'string';
      name: 'string';
      description: 'string';
      cost: 0;
    },
  ];
}
interface addOneProductResponse {
  productId: 0;
  companyId: 0;
  imagePath: 'string';
  name: 'string';
  description: 'string';
  cost: 0;
}

interface addListOfEmployeesData {
  employeeForCreateDTOList: [
    {
      name: 'string';
      email: 'string';
      postName: 'string';
      roleName: 'string';
      curatorEmail: 'string';
    },
  ];
}

interface addListOfEmployeesResponse {
  created: '2023-11-09T20:00:57.390Z';
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
      created: '2023-11-09T20:00:57.390Z';
      stageId: 0;
      companyId: 0;
      employeeId: 0;
      name: 'string';
      levelDifficulty: 0;
      testUrl: 'string';
      status: 'OPENED';
      deadline: '2023-11-09T20:00:57.390Z';
      timeFinish: '2023-11-09T20:00:57.390Z';
    },
  ];
  favouriteArticles: [
    {
      created: '2023-11-09T20:00:57.390Z';
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

interface getCompanyResponse {
  companyId: 0;
  name: 'string';
  description: 'string';
  email: 'string';
  phone: 'string';
  website: 'string';
  roles: [
    {
      roleId: 0;
      companyId: 0;
      name: 'string';
    },
  ];
  departments: [
    {
      departmentId: 0;
      companyId: 0;
      name: 'string';
    },
  ];
  posts: [
    {
      postId: 0;
      companyId: 0;
      department: {
        departmentId: 0;
        companyId: 0;
        name: 'string';
      };
      name: 'string';
    },
  ];
  employees: [
    {
      created: '2023-11-09T20:04:54.098Z';
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
          created: '2023-11-09T20:04:54.098Z';
          stageId: 0;
          companyId: 0;
          employeeId: 0;
          name: 'string';
          levelDifficulty: 0;
          testUrl: 'string';
          status: 'OPENED';
          deadline: '2023-11-09T20:04:54.098Z';
          timeFinish: '2023-11-09T20:04:54.098Z';
        },
      ];
      favouriteArticles: [
        {
          created: '2023-11-09T20:04:54.098Z';
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
    },
  ];
  questions: [
    {
      questionId: 0;
      companyId: 0;
      imagePath: 'string';
      theme: 'string';
      answer: 'string';
    },
  ];
  products: [
    {
      productId: 0;
      companyId: 0;
      imagePath: 'string';
      name: 'string';
      description: 'string';
      cost: 0;
    },
  ];
  articles: [
    {
      created: '2023-11-09T20:04:54.098Z';
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
  videos: [
    {
      created: '2023-11-09T20:04:54.098Z';
      videoId: 0;
      companyId: 0;
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
      url: 'string';
      name: 'string';
      description: 'string';
    },
  ];
  audio: [
    {
      created: '2023-11-09T20:04:54.098Z';
      audioId: 0;
      companyId: 0;
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
      url: 'string';
      name: 'string';
      description: 'string';
    },
  ];
  tasks: [
    {
      created: '2023-11-09T20:04:54.098Z';
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
      deadline: '2023-11-09T20:04:54.098Z';
      rate: 0;
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
}

export const addVideos = async (data: addVideosData) => {
  const response: addVideosResponse = await axios.post(
    URL + `/admin/company/videos`,
    data
  );
  return response;
};

// в data не массив
export const addOneVideo = async (data: addVideosData) => {
  const response: addVideosResponse = await axios.post(
    URL + `/admin/company/video`,
    data
  );
  return response;
};
export const addOneQuestion = async (data: addOneQuestionData) => {
  const response: addOneQuestionResponse[] = await axios.post(
    URL + `/admin/company/questions`,
    data
  );
  return response;
};
export const addOneProduct = async (data: addOneProductData) => {
  const response: addOneProductResponse[] = await axios.post(
    URL + `/admin/company/products`,
    data
  );
  return response;
};

// Не доделал
export const addListOfPosts = async (data: addListOfEmployeesData) => {
  const response: addListOfEmployeesResponse[] = await axios.post(
    URL + `/admin/company/posts`,
    data
  );
  return response;
};
// Не доделал
export const addListOfDepartments = async (data: addListOfEmployeesData) => {
  const response: addListOfEmployeesResponse[] = await axios.post(
    URL + `/admin/company/posts`,
    data
  );
  return response;
};

export const addListOfEmployees = async (data: addListOfEmployeesData) => {
  const response: addListOfEmployeesResponse[] = await axios.post(
    URL + `/admin/company/employees`,
    data
  );
  return response;
};

export const getCompany = async () => {
  const response: getCompanyResponse[] = await axios.get(
    URL + `/admin/company/`
  );
  return response;
};
