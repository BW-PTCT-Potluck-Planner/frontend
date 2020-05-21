import { ID } from '@datorama/akita';
import cuid from 'cuid';

export interface Event {
  id: ID;
  title: string;
}

export const createEvent = (item: Partial<Event>): Event => ({
  id: cuid(),
  title: 'Untitled',
  ...item,
});
