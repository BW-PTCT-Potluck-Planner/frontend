import axios from 'axios-observable';

import { SessionStore, sessionStore } from './session.store';
import { SessionQuery, sessionQuery } from './session.query';

interface Registration {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export class SessionService {
  constructor(private readonly store: SessionStore, private readonly query: SessionQuery) {
    this.query
      .select('token')
      .subscribe((Authorization) => (axios.defaults.headers = { Authorization }));
  }

  public updateSession(): void {
    this.store.setError(undefined);
    this.store.setLoading(true);
    this.store.update({});
    this.store.setLoading(false);
  }

  public login(): void {
    this.store.update({ token: 'placeholder' });
  }

  public logout(): void {
    this.store.update({ token: '', name: '' });
  }

  public register(registration: Registration) {
    console.log(registration);
    this.store.update({ token: 'new' });
  }

  public validateUsername(username: string) {
    return true;
  }
}

export const sessionService = new SessionService(sessionStore, sessionQuery);
