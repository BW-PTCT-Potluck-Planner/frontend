import { ID } from '@datorama/akita';
import cuid from 'cuid';

export interface User {
  id: ID;
  name: string;
}

export const createUser = (user: Partial<User>): User => ({
  id: cuid(),
  name: 'Untitled',
  ...user,
});
