import { ID } from '@datorama/akita';

import { menuStore, MenuStore } from './menu.store';
import { MenuItem, createMenuItem } from './menu-item.model';

export class MenuService {
  constructor(private readonly store: MenuStore) {}

  public loadMenu(id: ID): void {
    this.store.setError(undefined);
    this.store.setLoading(true);
    const items: MenuItem[] = [{ id: '1' }, { id: '2' }];
    this.store.set(items);
    this.store.setLoading(false);
  }

  public setActive(id: ID): void {
    this.store.setActive(id);
  }

  public updateActive(updated: MenuItem): void {
    this.store.updateActive(updated);
  }

  public add(): void {
    const item = createMenuItem({});
    this.store.add(item);
  }

  public delete(id: ID): void {
    this.store.remove(id);
  }

  public clearError(): void {
    this.store.setError(undefined);
  }
}

export const menuService = new MenuService(menuStore);
