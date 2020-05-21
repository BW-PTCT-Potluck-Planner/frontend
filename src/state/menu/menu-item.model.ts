import { ID } from '@datorama/akita';
import cuid from 'cuid';

export interface MenuItem {
  id: ID;
}

export const createMenuItem = (item: Partial<MenuItem>): MenuItem => ({ id: cuid(), ...item });
