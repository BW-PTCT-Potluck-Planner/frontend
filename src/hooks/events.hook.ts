import { ID } from '@datorama/akita';
import { useEffect, useState } from 'react';

import { Event, eventsService, eventsQuery } from '../state/events';
import { onEmit } from '../utils/onEmit';

interface EventState {
  events: Event[];
  active: Event | null;
}

export const useEventsFacade = (): [EventState, (id: ID) => void, (updated: Event) => void] => {
  const setActive = (id: ID) => eventsService.setActive(id);
  const updateActive = (updated: Event) => eventsService.updateActive(updated);
  const [state, setState] = useState<EventState>({ events: [], active: null });

  useEffect(() => {
    eventsService.loadAll();

    const subscriptions = [
      onEmit(eventsQuery.events$, (events) => setState((state) => ({ ...state, events }))),
      onEmit(eventsQuery.active$, (active) => setState((state) => ({ ...state, active }))),
    ];

    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [state, setActive, updateActive];
};
