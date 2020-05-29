import axios from 'axios-observable';
import { switchMap, filter, tap, map } from 'rxjs/operators';

import { SessionStore, sessionStore } from './session.store';
import { SessionQuery, sessionQuery } from './session.query';
import { Observable } from 'rxjs';

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

  public login(authentication: Authentication): Observable<string> {
    return axios.post('/users/login', authentication).pipe(
      map(({ data }) => data.token),
      tap((token) => {
        this.store.update({ token });
      })
    );
  }

  public logout(): void {
    this.store.update({ token: '', id: -1, name: '' });
  }

  public register(registration: Registration): Observable<string> {
    const { confirmPassword, email, ...user } = registration;
    return axios.post('/users/register', user).pipe(
      map(({ data }) => data.token),
      tap((token) => {
        this.store.update({ token });
      })
    );
  }

  public validateUsername(username: string): boolean {
    return true;
  }

  public clearError(): void {
    this.store.setError(undefined);
  }
}

export const sessionService = new SessionService(sessionStore, sessionQuery);
