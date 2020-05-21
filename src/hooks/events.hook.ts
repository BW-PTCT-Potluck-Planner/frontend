import { ID } from '@datorama/akita';
import { useEffect, useState } from 'react';

import { Event, eventsService, eventsQuery } from '../state/events';
import { onEmit } from '../utils/onEmit';

interface EventState {
  events: Event[];
  active: Event | null;
  loading: boolean;
  error?: any;
}

export const useEventsFacade = (
  id?: ID
): [EventState, (id: ID) => void, (updated: Event) => void] => {
  const setActive = (id: ID) => eventsService.setActive(id);
  const updateActive = (updated: Event) => eventsService.updateActive(updated);
  const [state, setState] = useState<EventState>({
    events: [],
    active: null,
    loading: true,
  });

  useEffect(() => {
    eventsService.loadMyEvents();
    if (id) setActive(id);

    const subscriptions = [
      onEmit(eventsQuery.events$, (events) => setState((state) => ({ ...state, events }))),
      onEmit(eventsQuery.active$, (active) => setState((state) => ({ ...state, active }))),
      onEmit(eventsQuery.loading$, (loading) => setState((state) => ({ ...state, loading }))),
      onEmit(eventsQuery.error$, (error) => setState((state) => ({ ...state, error }))),
    ];

    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [state, setActive, updateActive];
};
