import { QueryEntity } from '@datorama/akita';
import { MenuState, MenuStore, menuStore } from './menu.store';

export class MenuQuery extends QueryEntity<MenuState> {
  constructor(protected store: MenuStore) {
    super(store);
  }

  public menu$ = this.selectAll();
  public active$ = this.selectActive();
}

export const menuQuery = new MenuQuery(menuStore);