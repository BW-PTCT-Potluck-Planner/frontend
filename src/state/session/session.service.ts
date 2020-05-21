import { SessionStore, sessionStore } from './session.store';
import { SessionQuery, sessionQuery } from './session.query';

export class SessionService {
  constructor(private store: SessionStore, private query: SessionQuery) {
    this.query.select().subscribe(({ token }) => {
      localStorage.setItem('token', token);
    });
  }

  public updateSession(): void {
    this.store.update({});
  }
}

export const sessionService = new SessionService(sessionStore, sessionQuery);
