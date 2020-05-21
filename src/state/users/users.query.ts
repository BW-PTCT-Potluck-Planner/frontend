import { QueryEntity, ID } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserState, UserStore, userStore } from './users.store';
import { User } from './user.model';

export class UsersQuery extends QueryEntity<UserState> {
  constructor(protected store: UserStore) {
    super(store);
  }

  public users$ = this.selectAll();
  public active$ = this.selectActive();
  public loading$ = this.selectLoading();
  public error$ = this.selectError();

  public selectGuest(id: ID): Observable<User[]> {
    return this.selectAll().pipe(map((users) => users.filter((user) => user.id === id)));
  }
}

export const usersQuery = new UsersQuery(userStore);
