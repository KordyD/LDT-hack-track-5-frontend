import { post } from '../admin/interfaces';
import { role } from '../auth/interfaces';

export interface PersonalData {
  employeeId: number;
  imagePath: string;
  email: string;
  post: post;
  roles: role[];
  name: string;
  phone: string;
  city: string;
  socialNetwork: string;
  account: number;
  countCompletedTask: number;
}

export interface updatePersonal {
  imagePath: string;
  name: string;
  phone: string;
  socialNetwork: string;
  city: string;
}
