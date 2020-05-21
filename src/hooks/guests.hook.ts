import { ID } from '@datorama/akita';
import { useEffect, useState } from 'react';

import { User, userService, usersQuery } from '../state/users';
import { onEmit } from '../utils/onEmit';

interface UserState {
  guests: User[];
  loading: boolean;
  error?: any;
}

export const useGuestFacade = (id: ID): [UserState] => {
  const [state, setState] = useState<UserState>({
    guests: [],
    loading: true,
  });

  useEffect(() => {
    userService.loadAll();

    const subscriptions = [
      onEmit(usersQuery.selectGuest(id), (guests) => setState((state) => ({ ...state, guests }))),
      onEmit(usersQuery.loading$, (loading) => setState((state) => ({ ...state, loading }))),
      onEmit(usersQuery.error$, (error) => setState((state) => ({ ...state, error }))),
    ];

    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [state];
};
