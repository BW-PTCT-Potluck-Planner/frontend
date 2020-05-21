import { useEffect, useState } from 'react';

import { SessionState, sessionQuery, sessionService } from '../state/session';
import { onEmit } from '../utils/onEmit';

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
