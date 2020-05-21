import { SessionStore, sessionStore } from './session.store';

export class SessionService {
  constructor(private store: SessionStore) {}

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

export const sessionService = new SessionService(sessionStore);
