import { QueryEntity } from '@datorama/akita';
import { UserState, UserStore, userStore } from './users.store';

export class UsersQuery extends QueryEntity<UserState> {
  constructor(protected store: UserStore) {
    super(store);
  }

  public users$ = this.selectAll();
  public active$ = this.selectActive();
  public loading$ = this.selectLoading();
  public error$ = this.selectError();
}

export const usersQuery = new UsersQuery(userStore);
