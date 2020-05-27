import { ID } from '@datorama/akita';
import axios from 'axios-observable';

import { eventsStore, EventsStore } from './events.store';
import { createEvent, Event } from './event.model';
import { tap, catchError, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

export class EventsService {
  constructor(private readonly store: EventsStore) {}

  public loadMyEvents(): Observable<Event[]> {
    this.store.setError(undefined);
    this.store.setLoading(true);

    return axios.get<Event[]>('/events').pipe(
      map(({ data }) => data),
      tap((events) => {
        this.store.set(events);
        this.store.setLoading(false);
      }),
      catchError((err) => {
        this.store.setError(err);
        this.store.setLoading(false);
        return of([] as Event[]);
      })
    );
  }

  public setActive(id: ID | null): void {
    this.store.setActive(id);
  }

  public updateActive(updated: Event): Event {
    this.store.updateActive(updated);

    return updated;
  }

  public create(event: Partial<Event>): Observable<Event> {
    return axios.post<Event>('/events', createEvent(event)).pipe(
      map(({ data }) => data),
      tap((event) => {
        this.store.add(event);
      })
    );
  }

  public delete(id: ID): void {
    this.store.remove(id);
  }
}

export const eventsService = new EventsService(eventsStore);
