import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { User } from './user.model';

export interface UserState extends ActiveState, EntityState<User> {}

@StoreConfig({ name: 'users' })
export class UserStore extends EntityStore<UserState> {}

export const userStore = new UserStore();
