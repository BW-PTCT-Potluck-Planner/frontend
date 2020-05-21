import { Query } from '@datorama/akita';
import { SessionState, SessionStore, sessionStore } from './session.store';

export class SessionQuery extends Query<SessionState> {
  constructor(protected readonly store: SessionStore) {
    super(store);
  }

  public session$ = this.select();
  public loading$ = this.selectLoading();
  public error$ = this.selectError();
}

export const sessionQuery = new SessionQuery(sessionStore);
