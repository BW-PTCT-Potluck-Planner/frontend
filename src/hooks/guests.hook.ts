import { ID } from '@datorama/akita';
import { useEffect, useState } from 'react';

import { User, userService, usersQuery } from '../state/users';
import { onEmit } from '../utils/onEmit';

interface UserState {
  guests: User[];
  active: User | null;
  loading: boolean;
  error?: any;
}

export const useGuestFacade = (id: ID): [UserState, (id: ID) => void] => {
  const setActive = (id: ID) => userService.setActive(id);
  const [state, setState] = useState<UserState>({
    guests: [],
    active: null,
    loading: true,
  });

  useEffect(() => {
    userService.loadGuest(id);

    const subscriptions = [
      onEmit(usersQuery.users$, (guests) => setState((state) => ({ ...state, guests }))),
      onEmit(usersQuery.active$, (active) => setState((state) => ({ ...state, active }))),
      onEmit(usersQuery.loading$, (loading) => setState((state) => ({ ...state, loading }))),
      onEmit(usersQuery.error$, (error) => setState((state) => ({ ...state, error }))),
    ];

    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [state, setActive];
};
