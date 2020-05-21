import { ID } from '@datorama/akita';

import { userStore, UserStore } from './users.store';
import { createUser, User } from './user.model';

export class UserService {
  constructor(private store: UserStore) {}

  public loadGuest(id: ID): void {
    this.store.setError(undefined);
    this.store.setLoading(true);
    const items: User[] = [
      { id: '1', name: 'Sam' },
      { id: '2', name: 'John' },
    ];
    this.store.set(items);
    this.store.setLoading(false);
  }

  public setActive(id: ID): void {
    this.store.setActive(id);
  }

  public updateActive(updated: User) {
    this.store.updateActive(updated);
  }

  public add(): void {
    const item = createUser({});
    this.store.add(item);
  }

  public delete(id: ID): void {
    this.store.remove(id);
  }
}

export const userService = new UserService(userStore);
