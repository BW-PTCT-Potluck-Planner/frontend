import { QueryEntity } from '@datorama/akita';
import { EventsState, EventsStore, eventsStore } from './events.store';

export class EventsQuery extends QueryEntity<EventsState> {
  constructor(protected store: EventsStore) {
    super(store);
  }

  public events$ = this.selectAll();
  public active$ = this.selectActive();
}

export const eventsQuery = new EventsQuery(eventsStore);
