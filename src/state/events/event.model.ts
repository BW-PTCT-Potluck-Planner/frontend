import { ID } from '@datorama/akita';
import cuid from 'cuid';

export interface Event {
  id: ID;
  name: string;
}

export const createEvent = (item: Partial<Event>): Event => ({
  id: cuid(),
  name: 'Untitled',
  ...item,
});
