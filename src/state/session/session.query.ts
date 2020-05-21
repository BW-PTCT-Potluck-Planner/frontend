import { Query } from '@datorama/akita';
import { SessionState, SessionStore, sessionStore } from './session.store';

export class SessionQuery extends Query<SessionState> {
  constructor(protected store: SessionStore) {
    super(store);
  }
}

export const sessionQuery = new SessionQuery(sessionStore);
