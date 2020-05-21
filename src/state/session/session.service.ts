import { SessionStore, sessionStore } from './session.store';

interface Registration {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export class SessionService {
  constructor(private store: SessionStore) {}

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
    this.store.update({ token: undefined, name: undefined });
  }

  public register(registration: Registration) {
    console.log(registration);
    this.store.update({ token: 'new' });
  }

  public validateUsername(username: string) {
    return true;
  }
}

export const sessionService = new SessionService(sessionStore);
