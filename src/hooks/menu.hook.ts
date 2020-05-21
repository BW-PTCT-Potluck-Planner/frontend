import { ID } from '@datorama/akita';
import { useEffect, useState } from 'react';

import { MenuItem, menuQuery, menuService } from '../state/menu';
import { onEmit } from '../utils/onEmit';

interface MenuState {
  menu: MenuItem[];
  active: MenuItem | null;
  loading: boolean;
  error?: any;
}

export const useMenuFacade = (): [MenuState, (id: ID) => void, (updated: MenuItem) => void] => {
  const setActive = (id: ID) => menuService.setActive(id);
  const updateActive = (updated: MenuItem) => menuService.updateActive(updated);
  const [state, setState] = useState<MenuState>({
    menu: [],
    active: null,
    loading: true,
  });

  useEffect(() => {
    menuService.loadAll();

    const subscriptions = [
      onEmit(menuQuery.menu$, (menu) => setState((state) => ({ ...state, menu }))),
      onEmit(menuQuery.active$, (active) => setState((state) => ({ ...state, active }))),
      onEmit(menuQuery.loading$, (loading) => setState((state) => ({ ...state, loading }))),
      onEmit(menuQuery.error$, (error) => setState((state) => ({ ...state, error }))),
    ];

    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [state, setActive, updateActive];
};
