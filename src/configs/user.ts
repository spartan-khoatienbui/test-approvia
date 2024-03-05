import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

export enum UserStatus {
  Active = 'active',
  Banned = 'banned',
}
export enum UserRole {
  Leader = 'Leader',
  HrManager = 'Hr Manager',
  UiDesigner = 'UI Designer',
  UxDesigner = 'UX Designer',
  UiUxDesigner = 'UI/UX Designer',
  ProjectManager = 'Project Manager',
  BackendDeveloper = 'Backend Developer',
  FullStackDesigner = 'Full Stack Designer',
  FrontEndDeveloper = 'Front End Developer',
  FullStackDeveloper = 'Full Stack Developer',
}

export interface IUser {
  id: string;
  avatarUrl: string;
  name: string;
  company: string;
  isVerified: boolean;
  status: UserStatus;
  role: UserRole;
}
export const users: IUser[] = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(Object.values(UserStatus)) || UserStatus.Active,
  role: sample(Object.values(UserRole)) || UserRole.Leader,
}));
