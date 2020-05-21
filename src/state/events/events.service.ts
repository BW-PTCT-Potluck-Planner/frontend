import { ID } from '@datorama/akita';

import { eventsStore, EventsStore } from './events.store';
import { createEvent, Event } from './event.model';
import { EventsQuery, eventsQuery } from './events.query';

export class EventsService {
  constructor(private store: EventsStore, private query: EventsQuery) {}

  public loadMyEvents(): void {
    this.store.setError(undefined);
    this.store.setLoading(true);

    const items = this.query.getCount()
      ? this.query.getAll()
      : [
          { id: '1', title: 'Birthday' },
          { id: '2', title: 'Block Party' },
        ];

    this.store.set(items);
    this.store.setLoading(false);
  }

  public setActive(id: ID | null): void {
    this.store.setActive(id);
  }

  public updateActive(updated: Event): Event {
    this.store.updateActive(updated);

    return updated;
  }

  public create(event: Partial<Event>): Event {
    const newEvent = createEvent(event);
    this.store.add(newEvent);

    return newEvent;
  }

  public delete(id: ID): void {
    this.store.remove(id);
  }
}

export const eventsService = new EventsService(eventsStore, eventsQuery);
