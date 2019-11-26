// @flow

import Item from './Item';
import { observable, action, computed } from 'mobx';

export default class ItemList
{
   @observable items: Item[] = [];

   @action add(item: Item)
   {
      this.items.push(item);
   }

   @action remove(item: Item)
   {
      this.items.splice(this.items.indexOf(item), 1);
   }

   @computed get total()
   {
      return this.items.reduce((sum: number, item: Item) => sum + item.total, 0);
   }
}