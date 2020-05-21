import { Store, StoreConfig, ID } from '@datorama/akita';

export interface SessionState {
  id: ID;
  token: string;
  name: string;
}

export const createInitialState = (): SessionState => ({
  token: localStorage.getItem('token') ?? '',
  id: -1,
  name: '',
});

@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }
}

export const sessionStore = new SessionStore();
