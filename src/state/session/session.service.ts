import { SessionStore, sessionStore } from './session.store';
import { SessionQuery, sessionQuery } from './session.query';

export class SessionService {
  constructor(private store: SessionStore, private query: SessionQuery) {
    this.query.select().subscribe(({ token }) => {
      localStorage.setItem('token', token);
    });
  }

  public updateSession(): void {
    this.store.setError(undefined);
    this.store.setLoading(true);
    this.store.update({});
    this.store.setLoading(false);
  }

  public login(): void {}

  public logout(): void {
    this.store.update({ token: undefined, name: undefined });
  }
}

export const sessionService = new SessionService(sessionStore, sessionQuery);
