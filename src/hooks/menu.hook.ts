import { ID } from '@datorama/akita';
import { useEffect, useState } from 'react';

import { MenuItem, menuQuery, menuService } from 'state';
import { onEmit } from 'utils';

interface MenuState {
  menu: MenuItem[];
  active: MenuItem | null;
  loading: boolean;
  error?: any;
}

export const useMenuFacade = (
  id: ID
): [MenuState, (id: ID) => void, (updated: MenuItem) => void] => {
  const setActive = (id: ID) => menuService.setActive(id);
  const updateActive = (updated: MenuItem) => menuService.updateActive(updated);
  const [state, setState] = useState<MenuState>({
    menu: [],
    active: null,
    loading: true,
  });

  useEffect(() => {
    menuService.loadMenu(id);

    const subscriptions = [
      onEmit(menuQuery.menu$, (menu) => setState((state) => ({ ...state, menu }))),
      onEmit(menuQuery.active$, (active) => setState((state) => ({ ...state, active }))),
      onEmit(menuQuery.loading$, (loading) => setState((state) => ({ ...state, loading }))),
      onEmit(menuQuery.error$, (error) => setState((state) => ({ ...state, error }))),
    ];

    return () => {
      subscriptions.forEach((it) => it.unsubscribe());
    };
  }, [id]);

  return [state, setActive, updateActive];
};
