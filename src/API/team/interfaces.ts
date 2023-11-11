import { role } from '../auth/interfaces.ts';
import { post } from '../admin/interfaces.ts';

export interface employeeTeam {
  employeeId: number;
  name: string;
  city: string;
  postName: string;
  network: string;
  email: string;
  phone: string;
  roles: role;
}

export interface employeeIntern {
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
