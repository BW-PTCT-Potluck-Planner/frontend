import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

import { SessionState, sessionQuery, sessionService } from '../state/session';

const onEmit = <T>(source$: Observable<T>, nextFn: (value: T) => void) =>
  source$.subscribe(nextFn, console.error);

export const useSessionFacade = (): [SessionState] => {
  const [state, setState] = useState<SessionState>(sessionQuery.getValue());

  useEffect(() => {
    sessionService.updateSession();

    const subscriptions = [
      onEmit(sessionQuery.select(), (user) => setState((state) => ({ ...state, user }))),
    ];

    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [state];
};
