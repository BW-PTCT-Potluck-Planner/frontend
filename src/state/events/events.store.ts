import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Event } from './event.model';

export interface EventsState extends ActiveState, EntityState<Event> {}

@StoreConfig({ name: 'events' })
export class EventsStore extends EntityStore<EventsState> {
  constructor() {
    super();
  }
}

export const eventsStore = new EventsStore();
