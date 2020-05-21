import { useEffect, useState } from 'react';

import { SessionState as Session, sessionQuery, sessionService } from 'state';
import { onEmit } from 'utils';

interface SessionState extends Session {
  loading: boolean;
  error?: any;
}

export const useSessionFacade = (): [SessionState] => {
  const [state, setState] = useState<SessionState>({
    ...sessionQuery.getValue(),
    loading: true,
  });

  useEffect(() => {
    sessionService.updateSession();

    const subscriptions = [
      onEmit(sessionQuery.session$, (session) => setState((state) => ({ ...state, ...session }))),
      onEmit(sessionQuery.loading$, (loading) => setState((state) => ({ ...state, loading }))),
      onEmit(sessionQuery.error$, (error) => setState((state) => ({ ...state, error }))),
    ];

    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [state];
};
