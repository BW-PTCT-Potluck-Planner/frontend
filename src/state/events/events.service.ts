import { ID } from '@datorama/akita';

import { eventsStore, EventsStore } from './events.store';
import { createEvent, Event } from './event.model';

export class EventsService {
  constructor(private store: EventsStore) {}

  public loadMyEvents(): void {
    this.store.setError(undefined);
    this.store.setLoading(true);
    const items: Event[] = [
      { id: '1', name: 'Birthday' },
      { id: '2', name: 'Block Party' },
    ];
    this.store.set(items);
    this.store.setLoading(false);
  }

  public setActive(id: ID): void {
    this.store.setActive(id);
  }

  public updateActive(updated: Event) {
    this.store.updateActive(updated);
  }

  public add(): void {
    const item = createEvent({});
    this.store.add(item);
  }

  public delete(id: ID): void {
    this.store.remove(id);
  }
}

export const eventsService = new EventsService(eventsStore);
