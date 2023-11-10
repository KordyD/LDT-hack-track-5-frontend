import { post } from '../admin/interfaces';

export interface PersonalData {
  employeeId: number;
  imagePath: string;
  email: string;
  post: post;
  name: string;
  phone: string;
  socialNetwork: string;
  city: string;
  account: number;
}

export interface updatePersonal {
  imagePath: string;
  name: string;
  phone: string;
  socialNetwork: string;
  city: string;
}
