import { ID } from '@datorama/akita';
import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

import { MenuItem, menuQuery, menuService } from '../state/menu';

interface MenuState {
  menu: MenuItem[];
  active: MenuItem | null;
}

const onEmit = <T>(source$: Observable<T>, nextFn: (value: T) => void) =>
  source$.subscribe(nextFn, console.error);

export const useMenuFacade = (): [MenuState, (id: ID) => void, (updated: MenuItem) => void] => {
  const setActive = (id: ID) => menuService.setActive(id);
  const updateActive = (updated: MenuItem) => menuService.updateActive(updated);
  const [state, setState] = useState<MenuState>({ menu: [], active: null });

  useEffect(() => {
    menuService.loadAll();

    const subscriptions = [
      onEmit(menuQuery.menu$, (menu) => setState((state) => ({ ...state, menu }))),
      onEmit(menuQuery.active$, (active) => setState((state) => ({ ...state, active }))),
    ];

    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);

  return [state, setActive, updateActive];
};
