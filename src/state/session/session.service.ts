import { SessionStore, sessionStore } from './session.store';

export class SessionService {
  constructor(private store: SessionStore) {}
}

export const sessionService = new SessionService(sessionStore);
