import { ID } from '@datorama/akita';
import { useEffect, useState } from 'react';

import { User, userService, usersQuery } from '../state/users';
import { onEmit } from '../utils/onEmit';

interface UserState {
  users: User[];
  active: User | null;
  loading: boolean;
  error?: any;
}

export const useUsersFacade = (): [UserState, (id: ID) => void, (updated: User) => void] => {
  const setActive = (id: ID) => userService.setActive(id);
  const updateActive = (updated: User) => userService.updateActive(updated);
  const [state, setState] = useState<UserState>({
    users: [],
    active: null,
    loading: true,
  });

  useEffect(() => {
    userService.loadAll();

    const subscriptions = [
      onEmit(usersQuery.users$, (guests) => setState((state) => ({ ...state, users: guests }))),
      onEmit(usersQuery.active$, (active) => setState((state) => ({ ...state, active }))),
      onEmit(usersQuery.loading$, (loading) => setState((state) => ({ ...state, loading }))),
      onEmit(usersQuery.error$, (error) => setState((state) => ({ ...state, error }))),
    ];

    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [state, setActive, updateActive];
};
