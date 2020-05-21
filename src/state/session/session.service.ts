import axios from 'axios-observable';
import { switchMap, filter } from 'rxjs/operators';

import { SessionStore, sessionStore } from './session.store';
import { SessionQuery, sessionQuery } from './session.query';

interface Authentication {
  username: string;
  password: string;
}

interface Registration {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export class SessionService {
  constructor(private readonly store: SessionStore, private readonly query: SessionQuery) {
    this.effects();
  }

  private effects(): void {
    this.query
      .select('token')
      .subscribe((Authorization) => (axios.defaults.headers = { Authorization }));

    this.query
      .select('token')
      .pipe(
        filter((token) => !!token),
        switchMap(() => axios.get('/profile'))
      )
      .subscribe(({ data }) => {
        this.store.update({ ...data });
      });
  }

  public updateSession(): void {
    this.store.setError(undefined);
    this.store.setLoading(true);
    this.store.update({});
    this.store.setLoading(false);
  }

  public login(authentication: Authentication): void {
    console.log(authentication);
    this.store.update({ token: 'placeholder' });
  }

  public logout(): void {
    this.store.update({ token: '', name: '' });
  }

  public register(registration: Registration): void {
    console.log(registration);
    this.store.update({ token: 'new' });
  }

  public validateUsername(username: string): boolean {
    return true;
  }
}

export const sessionService = new SessionService(sessionStore, sessionQuery);
