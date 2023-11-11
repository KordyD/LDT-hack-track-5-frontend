import { post } from '../admin/interfaces';
import { role } from '../auth/interfaces';

export interface EmployeeData {
  employeeId: number;
  imagePath: string;
  email: string;
  post: post;
  name: string;
  phone: string;
  socialNetwork: string;
  city: string;
  account: number;
  roles: role[];
  countCompletedTask: number;
}

export interface updatePersonal {
  imagePath: string;
  name: string;
  phone: string;
  socialNetwork: string;
  city: string;
}
