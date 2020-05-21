import { SessionStore, sessionStore } from './session.store';

export class SessionService {
  constructor(private store: SessionStore) {
    this.init();
  }

  public init(): void {
    this.store.update({});
  }
}

export const sessionService = new SessionService(sessionStore);
