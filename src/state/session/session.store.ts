import { Store, StoreConfig } from '@datorama/akita';

export interface SessionState {
  token: string;
  name: string;
}

export const createInitialState = (): SessionState => ({ token: '', name: '' });

@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }
}

export const sessionStore = new SessionStore();
