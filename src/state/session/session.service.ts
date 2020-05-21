import { SessionStore, sessionStore } from './session.store';
import { SessionQuery, sessionQuery } from './session.query';

export class SessionService {
  constructor(private store: SessionStore, private query: SessionQuery) {
    this.init();
  }

  public init(): void {
    this.store.update({});
    this.query.select().subscribe(({ token }) => {
      localStorage.setItem('token', token);
    });
  }
}

export const sessionService = new SessionService(sessionStore, sessionQuery);
