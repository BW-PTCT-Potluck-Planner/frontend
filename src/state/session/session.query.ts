import { Query } from '@datorama/akita';
import { SessionState, SessionStore } from './session.store';

export class SessionQuery extends Query<SessionState> {
  constructor(protected store: SessionStore) {
    super(store);
  }
}
