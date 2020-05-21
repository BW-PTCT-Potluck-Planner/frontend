import { ID } from '@datorama/akita';
import { useEffect, useState } from 'react';

import { User, userService, usersQuery } from '../state/users';
import { onEmit } from '../utils/onEmit';

interface UserState {
  guests: User[];
  active: User | null;
}

export const useUsersFacade = (): [UserState, (id: ID) => void, (updated: User) => void] => {
  const setActive = (id: ID) => userService.setActive(id);
  const updateActive = (updated: User) => userService.updateActive(updated);
  const [state, setState] = useState<UserState>({ guests: [], active: null });

  useEffect(() => {
    userService.loadAll();

    const subscriptions = [
      onEmit(usersQuery.users$, (guests) => setState((state) => ({ ...state, guests }))),
      onEmit(usersQuery.active$, (active) => setState((state) => ({ ...state, active }))),
    ];

    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [state, setActive, updateActive];
};
