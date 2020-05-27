import { ID } from '@datorama/akita';
import cuid from 'cuid';

export interface Event {
  id: ID;
  name: string;
  description: string;
  when: string;
  location: string;
}

export const createEvent = (item: Partial<Event>): Event => ({
  id: cuid(),
  name: 'Untitled',
  description: '',
  when: '',
  location: '',
  ...item,
});
