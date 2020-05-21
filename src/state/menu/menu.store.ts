import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { MenuItem } from './menu-item.model';

export interface MenuState extends ActiveState, EntityState<MenuItem> {}

@StoreConfig({ name: 'menu' })
export class MenuStore extends EntityStore<MenuState> {
  constructor() {
    super();
  }
}

export const menuStore = new MenuStore();
